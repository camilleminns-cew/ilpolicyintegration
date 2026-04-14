import { useState } from "react";

const data = {
  overview: {
    title: "Legislation Overview",
    rows: [
      {
        label: "Bill",
        eeup: "Equitable Energy Upgrade Program (EEUP)",
        crga: "Clean & Reliable Grid Affordability Act (CRGA), SB 25",
        power: "POWER Act (SB4016/HB5513)"
      },
      {
        label: "Parent Law",
        eeup: "Climate & Equitable Jobs Act (CEJA), Public Act 102-0662, Section 16-111.10",
        crga: "Public Act 104-0458, amends Public Utilities Act",
        power: "Standalone bill, builds on CEJA/CRGA framework"
      },
      {
        label: "Status",
        eeup: "Enacted 2021. ICC guidelines in comment period. Implementation pending.",
        crga: "Signed Jan 8, 2026. Effective June 1, 2026. Tariff filings due June 2026.",
        power: "Subject matter hearings began April 2026. Working group negotiations pending."
      },
      {
        label: "Primary Focus",
        eeup: "Residential behind-the-meter energy upgrades via on-bill tariff (IUI/PAYS® model)",
        crga: "Grid-scale storage (3 GW by 2030), VPP programs, IRP, enhanced EE, nuclear moratorium lift",
        power: "Data center accountability: ratepayer protections, BYO clean capacity, community benefits, water use"
      },
      {
        label: "Applies To",
        eeup: "All electric IOUs (ComEd, Ameren). Residential customers. Owners and renters with owner permission.",
        crga: "All electric IOUs (≥300K customers for VPP). Residential, commercial, industrial.",
        power: "Hyperscale data centers (>50 MW). IOUs, munis, and co-ops."
      }
    ]
  },
  mechanism: {
    title: "Financial Mechanism & Cost Recovery",
    rows: [
      {
        label: "Core Mechanism",
        eeup: "Utility invests low-cost capital in behind-the-meter upgrades. Costs recovered through opt-in tariff on customer's utility bill, modeled after PAYS®.",
        crga: "VPP: Utility-administered program aggregating DERs (solar+storage, EVs, smart thermostats) for scheduled dispatch. Compensation via enrollment and performance payments.",
        power: "Data centers pay own interconnection/T&D costs. Annual contributions to Public Benefits & Affordability Fund ($2–12M tiered by facility size)."
      },
      {
        label: "Who Pays Upfront",
        eeup: "The utility. No upfront cost to customer.",
        crga: "VPP: Customer or third party owns the DER. Solar+storage rebates conditioned on VPP enrollment. Storage for All program for equitable access.",
        power: "Data center developer pays all infrastructure costs. Fund contributions are ongoing annual payments."
      },
      {
        label: "Cost Recovery",
        eeup: "On-bill tariff tied to the meter (not the person). Transfers with occupancy. Estimated savings must exceed the charge.",
        crga: "VPP costs recovered through tariffed charges to all ratepayers. DER owners receive compensation payments for dispatch participation.",
        power: "Fund administered by DCEO/IEPA. Distributed to existing state programs (LIHEAP, UDAP, IHWAP)."
      },
      {
        label: "Credit/Income Requirements",
        eeup: "No credit check. No personal debt. Accessible to lower-income residents and EJ communities by statute.",
        crga: "VPP: No income requirement to participate. Higher enrollment payments for LMI/equity participants. But requires customer to already own or acquire a DER.",
        power: "Fund benefits targeted to income-qualified electric customers. No requirements on end beneficiaries beyond income eligibility."
      }
    ]
  },
  eligible: {
    title: "Eligible Technologies & Resources",
    rows: [
      {
        label: "Behind-the-Meter Upgrades",
        eeup: "Energy efficiency (weatherization, insulation, air sealing), heat pumps, solar, storage, demand response equipment. Must produce immediate net savings.",
        crga: "VPP-eligible: inverter-based renewables paired with storage, smart thermostats, EVs with managed charging, battery storage. Rebates for solar+storage conditioned on VPP enrollment.",
        power: "BYONCCE eligible demand-side measures: energy efficiency, VPPs, demand response, battery storage, load shifting. Fund directs to IHWAP (weatherization, heat pumps, smart thermostats)."
      },
      {
        label: "Grid-Scale Resources",
        eeup: "Not applicable. Residential behind-the-meter only.",
        crga: "3 GW utility-scale standalone storage by 2030. Initial procurement ~1 GW in Aug 2026. Geothermal heating/cooling program.",
        power: "BYONCCE: new wind, solar, energy storage that is new, additive, and locally deliverable within RTO footprint."
      },
      {
        label: "Fossil Fuel Exclusions",
        eeup: "Not explicitly addressed in statute (efficiency and clean energy focus).",
        crga: "Nuclear moratorium lifted. Gas not excluded from utility resource mix but new EE/storage programs are clean-only.",
        power: "Explicit: no gas-consuming technology. No fuel-switching credits (gas therm → electric kWh conversions prohibited). Diesel backup generators restricted to true emergencies."
      }
    ]
  },
  equity: {
    title: "Equity, Affordability & Community Protections",
    rows: [
      {
        label: "LMI/EJ Access",
        eeup: "Statute requires accessibility for lower-income and EJ community residents. No credit check removes primary barrier. Must notify participants of PIPP eligibility and free weatherization programs.",
        crga: "VPP: Higher enrollment payments for LMI/equity participants. Storage for All program to ensure equitable residential battery access. But participation still requires DER ownership/acquisition.",
        power: "3-mile siting buffer from EJ/Equity Investment Eligible Communities. Fund prioritizes weatherization in census tracts near data center facilities. Binding CBAs required."
      },
      {
        label: "Renter Access",
        eeup: "Yes. Renters can participate with property owner permission. Tariff is tied to meter, not person — transfers with occupancy.",
        crga: "VPP: Renters can participate if they control the DER (e.g., smart thermostat). But solar+storage ownership typically requires homeownership or landlord cooperation.",
        power: "Fund benefits flow through DCEO programs (LIHEAP, IHWAP) which serve renters. But deployment mechanism (rebates/grants) has known uptake limitations."
      },
      {
        label: "Affordability Programs",
        eeup: "The program itself IS the affordability mechanism — permanent bill reduction through efficiency upgrades with guaranteed net savings.",
        crga: "Enhanced EE spending (2% annual savings goal). Time-of-use rates. VPP payments put money back in participants' pockets. $13.4B estimated ratepayer savings over 20 years.",
        power: "Public Benefits & Affordability Fund: LIHEAP enhancement, shutoff avoidance (UDAP), arrearage forgiveness, IHWAP whole-home retrofits. Tiered contributions, inflation-adjusted."
      }
    ]
  },
  vpp: {
    title: "VPP / Distributed Capacity Connection",
    rows: [
      {
        label: "VPP Relevance",
        eeup: "EEUP-installed solar+storage systems are prime candidates for VPP enrollment. The utility already has the on-bill relationship. Aggregated EEUP batteries could be dispatched as a VPP resource under CRGA's tariff.",
        crga: "Creates the VPP tariff framework. Requires utilities to file tariffs by June 2026. Scheduled dispatch June–Sept, weekday afternoons. Compensation: upfront enrollment + performance payments. No penalties.",
        power: "BYONCCE (Pg 623-624) allows data centers to count demand-side measures including VPPs and utility-administered EE/storage programs toward clean capacity obligation."
      },
      {
        label: "Scaling Challenge",
        eeup: "Designed to scale: no credit barrier, no upfront cost, works for renters. Capital recycles as tariff payments return to utility. Not dependent on individual consumer purchasing decisions.",
        crga: "VPP enrollment depends on customers already owning DERs. Rebates help, but uptake curves have a ceiling — you can only induce so many people to buy something and enroll it.",
        power: "Fund deployment through existing DCEO programs (LIHEAP, IHWAP) uses rebate/grant channels with known participation limits. LMI households 1/3 as likely to access incentives."
      },
      {
        label: "THE SYNERGY",
        eeup: "EEUP is the deployment mechanism that can populate CRGA's VPP programs and fulfill POWER Act demand-side capacity requirements — at scale, without the uptake ceiling of incentive programs. It creates VPP-enrollable assets in homes that would never access them through rebates alone.",
        crga: "CRGA's VPP tariff creates the compensation structure and grid services framework. It needs assets enrolled. EEUP creates those assets in homes that the rebate model can't reach.",
        power: "POWER Act's BYONCCE allows data centers to invest in utility-administered EE and storage programs. If EEUP is that program, data center dollars fund permanent home upgrades deployed via IUI — not spent-down grants — and the resulting batteries count toward the data center's clean capacity."
      }
    ]
  },
  timeline: {
    title: "Implementation Timeline & Key Dates",
    rows: [
      {
        label: "2026 Q2",
        eeup: "ICC guidelines comment period. Implementation framework finalization.",
        crga: "June 1: CRGA effective. Utilities file VPP tariffs. June 30: ICC approves tariffs. Updated 3-year EE plans due.",
        power: "April: Subject matter hearings (Senate). Working group negotiations to follow."
      },
      {
        label: "2026 Q3-Q4",
        eeup: "Utility tariff filings expected following ICC guideline adoption.",
        crga: "Aug 26: Initial ~1 GW storage procurement. Nov 15: First IRP due to ICC.",
        power: "House working groups convene (labor, generators, utilities, consumer advocates). Passage target: spring session or veto session."
      },
      {
        label: "2027-2028",
        eeup: "Program launch and first installations (timeline dependent on ICC process).",
        crga: "Dec 2027: Large utilities file VPP program tariffs. Dec 2028: ICC approves, utilities report on participation and wholesale value.",
        power: "If passed: rulemaking process. Fund contributions begin upon data center construction milestones."
      },
      {
        label: "2030",
        eeup: "Scaling across utility territories.",
        crga: "3 GW cumulative storage target. VPP scheduled dispatch program effective through at least Dec 31, 2030.",
        power: "BYONCCE milestones: 80% clean energy/capacity, 25% clean backup by 2030."
      }
    ]
  }
};

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "mechanism", label: "Mechanism" },
  { key: "eligible", label: "Technologies" },
  { key: "equity", label: "Equity" },
  { key: "vpp", label: "VPP Synergy" },
  { key: "timeline", label: "Timeline" }
];

const pillColors = {
  eeup: { bg: "#1a5632", text: "#fff", label: "EEUP" },
  crga: { bg: "#1b4d6e", text: "#fff", label: "CRGA" },
  power: { bg: "#7c2d12", text: "#fff", label: "POWER Act" }
};

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const section = data[activeTab];

  return (
    <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", background: "#faf9f7", minHeight: "100vh", color: "#1a1a1a" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
        {/* Header */}
        <div style={{ borderBottom: "3px solid #1a1a1a", paddingBottom: 16, marginBottom: 24 }}>
          <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#666", fontFamily: "'IBM Plex Mono', monospace", marginBottom: 4 }}>
            Clean Energy Works — Internal Reference
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 4px", lineHeight: 1.2 }}>
            Three Illinois Legislations: Where They Connect
          </h1>
          <p style={{ fontSize: 14, color: "#555", margin: 0, fontStyle: "italic" }}>
            CEJA/EEUP → CRGA → POWER Act: the case for linking inclusive utility investment, VPP tariffs, and data center accountability
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 20, borderBottom: "1px solid #ddd", paddingBottom: 8 }}>
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              style={{
                padding: "8px 16px",
                fontSize: 13,
                fontFamily: "'IBM Plex Mono', monospace",
                border: activeTab === t.key ? "1px solid #1a1a1a" : "1px solid #ccc",
                borderRadius: 2,
                background: activeTab === t.key ? "#1a1a1a" : "#fff",
                color: activeTab === t.key ? "#fff" : "#555",
                cursor: "pointer",
                fontWeight: activeTab === t.key ? 600 : 400,
                transition: "all 0.15s ease"
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#1a1a1a" }}>
          {section.title}
        </h2>

        {/* Rows */}
        {section.rows.map((row, i) => {
          const isSynergy = row.label === "THE SYNERGY";
          return (
            <div
              key={i}
              style={{
                marginBottom: 16,
                border: isSynergy ? "2px solid #1a5632" : "1px solid #e0ddd8",
                borderRadius: 4,
                background: isSynergy ? "#f0f7f2" : "#fff",
                overflow: "hidden"
              }}
            >
              {/* Row label */}
              <div style={{
                padding: "10px 16px",
                background: isSynergy ? "#1a5632" : "#f5f4f1",
                borderBottom: "1px solid #e0ddd8",
                fontSize: 13,
                fontWeight: 700,
                fontFamily: "'IBM Plex Mono', monospace",
                letterSpacing: 0.5,
                color: isSynergy ? "#fff" : "#333",
                textTransform: isSynergy ? "uppercase" : "none"
              }}>
                {row.label}
              </div>

              {/* Three columns */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", minHeight: 0 }}>
                {["eeup", "crga", "power"].map(col => (
                  <div
                    key={col}
                    style={{
                      padding: "14px 16px",
                      borderRight: col !== "power" ? "1px solid #e8e6e2" : "none",
                      fontSize: 13,
                      lineHeight: 1.55,
                      color: "#2a2a2a"
                    }}
                  >
                    <span style={{
                      display: "inline-block",
                      padding: "2px 8px",
                      borderRadius: 2,
                      fontSize: 10,
                      fontWeight: 700,
                      fontFamily: "'IBM Plex Mono', monospace",
                      letterSpacing: 0.5,
                      background: pillColors[col].bg,
                      color: pillColors[col].text,
                      marginBottom: 8
                    }}>
                      {pillColors[col].label}
                    </span>
                    <div>{row[col]}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Action item box - only on VPP tab */}
        {activeTab === "vpp" && (
          <div style={{
            marginTop: 24,
            padding: 20,
            background: "#fffbeb",
            border: "2px solid #d4a017",
            borderRadius: 4
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, fontFamily: "'IBM Plex Mono', monospace", color: "#92400e", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>
              Action Item: ICJC Agenda Request
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, margin: "0 0 12px" }}>
              <strong>Request an agenda slot at an upcoming ICJC collaborative call</strong> to surface the formal connection between CRGA's VPP tariff requirements (Section 16-107.9) and EEUP's inclusive utility investment model (Section 16-111.10). Specifically:
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: "0 0 8px", paddingLeft: 16, borderLeft: "3px solid #d4a017" }}>
              <strong>1. CRGA's VPP tariff needs enrolled assets.</strong> The tariff framework creates compensation for dispatch, but depends on customers already owning DERs. EEUP creates those assets — in homes that would never access them through rebates alone — with no upfront cost, no credit check, and guaranteed net savings. EEUP-installed solar+storage is immediately VPP-enrollable.
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: "0 0 8px", paddingLeft: 16, borderLeft: "3px solid #d4a017" }}>
              <strong>2. POWER Act's BYONCCE allows data centers to meet clean capacity through demand-side investment.</strong> If EEUP is the delivery mechanism for that investment, data center dollars fund permanent home upgrades via IUI — not spent-down grants — and the resulting distributed storage counts toward the data center's capacity obligation. This solves the scaling problem your director identified: incentive programs have uptake ceilings; IUI doesn't.
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: "0 0 8px", paddingLeft: 16, borderLeft: "3px solid #d4a017" }}>
              <strong>3. The implementation timelines converge.</strong> EEUP guidelines are in comment period now. CRGA VPP tariffs are due June 2026. POWER Act working groups are convening. There is a narrow window to ensure these three programs are designed to interoperate — before each gets locked into its own silo.
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: "#666", fontStyle: "italic" }}>
              The ask is not to change any legislation. It's to ensure the implementation of all three recognizes the connections — so that EEUP-deployed assets can enroll in CRGA VPP programs, and POWER Act fund disbursements can flow through EEUP's IUI mechanism rather than being limited to existing programmatic channels with known uptake ceilings.
            </p>
          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop: 32, paddingTop: 16, borderTop: "1px solid #ddd", fontSize: 11, color: "#999", fontFamily: "'IBM Plex Mono', monospace" }}>
          Draft — Internal Reference Only — Clean Energy Works — April 2026
        </div>
      </div>
    </div>
  );
}
