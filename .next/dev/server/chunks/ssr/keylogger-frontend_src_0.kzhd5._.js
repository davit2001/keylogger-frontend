module.exports = [
"[project]/keylogger-frontend/src/hooks/useAnimationGate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimationGate",
    ()=>useAnimationGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useAnimationGate() {
    const [animationDone, setAnimationDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return {
        animationDone,
        markDone: ()=>setAnimationDone(true)
    };
}
}),
"[project]/keylogger-frontend/src/data/mockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockData",
    ()=>mockData
]);
const mockData = [
    {
        id: "REC-001",
        context: "Subject observed entering Building 7 at 09:14. Mobile device detected on restricted network segment 192.168.1.44. Browsing history suggests encrypted communication tools were accessed. Flagged for secondary review by automated threat detection system.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDAxIiwiaWF0IjoxNzM2MDAwMDAwLCJleHAiOjE3MzYwODY0MDAsImRhdGEiOiJDTEFTU0lGSUVELU9NRUVHQS1UQVJHRVQtQUxQSEEiLCJsb2NhdGlvbiI6IjQ4LjIwODIsMTYuMzczNCIsImRldmljZSI6IkFuZHJvaWQtU00tRzk5OCJ9.xK9mP2vL8nQ4rT7wY3hJ6sA1bC5dE0fG",
        timeline: "2025-03-12T09:14:00Z"
    },
    {
        id: "REC-002",
        context: "Anomalous login attempt detected from IP 203.0.113.47. Pattern matches known APT signature database entry #4492. Multi-factor bypass attempted using cloned SIM methodology. Account temporarily suspended pending forensic analysis.",
        encryptedPayload: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN1cnZlaWxsYW5jZS1rZXktMDIifQ.eyJzdWIiOiJSRUMtMDAyIiwiaXNzIjoiTkVYVVMtQ09SRSIsImF1ZCI6WyJTRUNVUklUWS1PUFMiXSwiaWF0IjoxNzM2MDUwMDAwLCJleHAiOjE3MzYxMzY0MDAsInRocmVhdExldmVsIjoiQ1JJVElDQUwiLCJpcEFkZHJlc3MiOiIyMDMuMC4xMTMuNDciLCJjb3VudHJ5IjoiVU5LTk9XTiJ9.mN3pQ7rS9tU2vW4xY6zA8bC0dE1fG2hI",
        timeline: "2025-03-15T14:32:00Z"
    },
    {
        id: "REC-003",
        context: "Communication intercept from target NIGHTHAWK-7. Encrypted message traffic volume increased 340% over baseline. Decryption keys rotated 3 times within 6-hour window, suggesting operational security awareness.",
        encryptedPayload: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImN1cnZlIjoiUC0yNTYifQ.eyJzdWIiOiJSRUMtMDAzIiwib3BlcmF0aW9uIjoiTklHSFRIQVdLIiwicGhhc2UiOiI3LUFMUEhBIiwic2lnbmFsU3RyZW5ndGgiOiItNzJkQm0iLCJlbmNyeXB0aW9uIjoiQUVTLTI1Ni1HQ00iLCJrZXlSb3RhdGlvbnMiOjMsInRpbWVzdGFtcCI6MTczNjEwMDAwMH0.pK2mN4oP6qR8sT0uV1wX3yZ5aB7cD9eF",
        timeline: "2025-03-20T22:08:00Z"
    },
    {
        id: "REC-004",
        context: "Vehicle registered to ATLAS-PRIME-4 tracked across 7 surveillance zones. Last confirmed position: Meridian Bridge crossing at 23:47. Subject appeared to use counter-surveillance maneuvers. Thermal imaging confirmed single occupant.",
        encryptedPayload: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDA0IiwidmVoaWNsZSI6IllaTi03NzFYQiIsInJvdXRlIjpbIlpPTkUtQSIsIlpPTkUtRCIsIlpPTkUtRyIsIk1FUklESUFOLUJSSURHRSJdLCJzcGVlZEF2ZyI6NDIsImNvdW50ZXJTdXJ2ZWlsbGFuY2UiOnRydWUsInRocmVhdCI6Ik1FRElVTSJ9.qL3nM5oN7pQ9rS1tU2vW4xY6zA8bC0dE1fG2hI3jK4l",
        timeline: "2025-04-01T23:47:00Z"
    },
    {
        id: "REC-005",
        context: "Biometric scan matched 94.7% confidence to SIERRA-ECHO target profile. Subject accessed restricted data archive for 11 minutes before triggering silent alarm. Perimeter breach logged at sector 9. Response team deployed.",
        encryptedPayload: "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6ImJpb21ldHJpYy1rZXkifQ.eyJzdWIiOiJSRUMtMDA1IiwiYmlvbWV0cmljQ29uZmlkZW5jZSI6OTQuNywidGFyZ2V0IjoiU0lFUlJBLUVDSE8iLCJhcmNoaXZlQWNjZXNzRHVyYXRpb24iOjY2MCwic2VjdG9yIjo5LCJyZXNwb25zZVRlYW0iOiJBTFBIQS0yIn0.rM4oN6pO8qR0sT2uV3wX5yZ7aB9cD1eF3gH",
        timeline: "2025-04-08T03:21:00Z"
    },
    {
        id: "REC-006",
        context: "Dark web forum post attributed to handle PHOSPHORUS linked to subject. Discussion referenced operational codewords matching active intelligence operation. Post deleted within 4 minutes but full capture retained in archive.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDA2IiwicGxhdGZvcm0iOiJEQVJLV0VCLUZPUlVNIiwiaGFuZGxlIjoiUEhPU1BIT1JVUyIsImNvZGV3b3JkcyI6WyJHSE9TVFdJUkUiLCJQUk9UT0NPTCBaRVJPIl0sInBvc3REdXJhdGlvbiI6MjQwLCJhcmNoaXZlZCI6dHJ1ZX0.sN5pO7qP9rS1tU3vW5xY8zA0bC2dE4fG",
        timeline: "2025-04-15T11:55:00Z"
    },
    {
        id: "REC-007",
        context: "Financial transaction anomaly: 47 micro-transfers totaling $9,847.32 routed through shell entities in 3 jurisdictions. Pattern matches known cryptocurrency laundering topology. Assets flagged for seizure order.",
        encryptedPayload: "eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCIsImN1cnZlIjoiUC0zODQifQ.eyJzdWIiOiJSRUMtMDA3IiwidHJhbnNhY3Rpb25Db3VudCI6NDcsInRvdGFsVmFsdWUiOjk4NDcuMzIsImN1cnJlbmN5IjoiVVNEIiwianVyaXNkaWN0aW9ucyI6WyJQQU5BTUEiLCJNQUxUQSIsIlNFWUNIRUxMRVMiXSwicGF0dGVybk1hdGNoIjoiTEFVTkRFUklORy1UWVBFLUI3In0.tO6qP8rQ0sT2uV4wX6yZ9zA1bC3dE5fG7hI",
        timeline: "2025-04-22T16:03:00Z"
    },
    {
        id: "REC-008",
        context: "Drone surveillance of compound ECHO-FOXTROT-9 revealed new construction extending underground perimeter by estimated 40 meters. Thermal signature suggests high-power computing infrastructure. RF emissions detected matching classified communication standard.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDA4IiwiY29tcG91bmQiOiJFQ0hPLUZPWFRST1QtOSIsImNvbnN0cnVjdGlvbkRlcHRoIjo0MCwidGhlcm1hbFNpZ25hdHVyZSI6IkhJR0gtUE9XRVItQ09NUFVURSJ9.uP7rQ9sR1tU3vW5xY7zA2bC4dE6fG8hI0jK",
        timeline: "2025-05-03T07:45:00Z"
    },
    {
        id: "REC-009",
        context: "HUMINT source CARDINAL reports meeting with OMEGA-GROUP facilitator. Discussed procurement of specialized electronic components matching EMP device specification. Source reliability rating: ALPHA. Corroboration required before action.",
        encryptedPayload: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDA5Iiwic291cmNlIjoiQ0FSRElOQUwiLCJyZWxpYWJpbGl0eSI6IkFMUEhBIiwidGFyZ2V0R3JvdXAiOiJPTUVHQS1HUk9VUCIsImNvbXBvbmVudHMiOiJFTVAtU1BFQ0lGSUNBVElPTiIsImNvcnJvYm9yYXRpb25SZXF1aXJlZCI6dHJ1ZX0.vQ8sR0tS2uV4wX6yZ8zA3bC5dE7fG9hI1jK2l",
        timeline: "2025-05-10T19:30:00Z"
    },
    {
        id: "REC-010",
        context: "Satellite imagery shows convoy of 4 vehicles departing TANGO-BASE at 04:30 local. Route analysis suggests destination is Keylogger. Lead vehicle carries encrypted transponder last seen in Operation BLACKTHORN. Air assets repositioned.",
        encryptedPayload: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDEwIiwiY29udm95U2l6ZSI6NCwiZGVwYXJ0dXJlIjoiMDQ6MzAiLCJiYXNlIjoiVEFOR08tQkFTRSIsImRlc3RpbmF0aW9uIjoiTkVYVVMtUE9JTlQtREVMVEEiLCJ0cmFuc3BvbmRlciI6IkJMQUNLVEhPUk4tMDciLCJhaXJBc3NldHMiOiJSRVBPU0lUSU9ORUQifQ.wR9tS1uT3vW5xY7zA4bC6dE8fG0hI2jK3l4m",
        timeline: "2025-05-17T04:30:00Z"
    },
    {
        id: "REC-011",
        context: "Deep packet inspection of subject's network traffic identified exfiltration attempt of 2.3GB classified dataset. Data was fragmented across 89 encrypted packets using novel steganographic technique. Full reconstruction successful.",
        encryptedPayload: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDExIiwiZGF0YVNpemUiOiIyLjNHQiIsInBhY2tldENvdW50Ijo4OSwic3RlZ2Fub2dyYXBoeSI6Ik5PVkVMLVRFQ0hOSVFVRSIsInJlY29uc3RydWN0aW9uIjoiU1VDQ0VTUyIsImNsYXNzaWZpY2F0aW9uIjoiVE9QLVNFQ1JFVC9TSSJ9.xS0uT2vU4wV6xY8zA5bC7dE9fG1hI3jK4l5m6n",
        timeline: "2025-05-24T13:17:00Z"
    },
    {
        id: "REC-012",
        context: "SIGINT collection indicates coordination between WOLF-PACK cell and external handler. Encryption key exchange occurred via quantum-resistant algorithm. Message content references 'phase 3 initiation' and specific infrastructure targets.",
        encryptedPayload: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNpZ2ludC1rZXkifQ.eyJzdWIiOiJSRUMtMDEyIiwiY2VsbCI6IldPTEYtUEFDSyIsImFsZ29yaXRobSI6IVFVQU5UVU0tUkVTSVNUQU5UIiwicGhhc2UiOiIzLUlOSVRJQVRJT04iLCJpbmZyYXN0cnVjdHVyZVRhcmdldHMiOnRydWV9.yT1vU3wV5xW7yZ9zA6bC8dE0fG2hI4jK5l6m7n8o",
        timeline: "2025-06-02T08:44:00Z"
    },
    {
        id: "REC-013",
        context: "Facial recognition match at ZEPHYR INTERNATIONAL AIRPORT: confidence 98.2%. Subject traveling under alias using forged passport (Document Control #FF-99127). Immigration authorities notified. Subject in transit, destination UNKNOWN.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDEzIiwiYWlycG9ydCI6IlpFUEhZUi1JTlRMLiIsImNvbmZpZGVuY2UiOjk4LjIsImFsaWFzIjoiQ09ORklERU5USUFMIiwiZG9jdW1lbnROdW0iOiJGRi05OTEyNyIsImZvcmdlZCI6dHJ1ZX0.zU2wV4xW6yX8zA7bC9dE1fG3hI5jK6l7m8n9oP",
        timeline: "2025-06-11T06:20:00Z"
    },
    {
        id: "REC-014",
        context: "Network intrusion detected at DEFENSE CONTRACTOR NODE 7-B. Lateral movement traced through 12 internal systems over 72-hour period. Zero-day exploit used matches signature of STATE-ACTOR malware family FROSTBITE.",
        encryptedPayload: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDE0Iiwibm9kZSI6IkRFRkVOU0UtQ09OVFJBQ1RPUi03QiIsInN5c3RlbXNDb21wcm9taXNlZCI6MTIsImR1cmF0aW9uSG91cnMiOjcyLCJtYWx3YXJlRmFtaWx5IjoiRlJPU1RCSVRFIiwiYXR0cmlidXRpb24iOiJTVEFURUFDVE9SIn0.aV3xW5yX7zA9bC0dE2fG4hI6jK7l8m9nOp0q",
        timeline: "2025-06-19T21:05:00Z"
    },
    {
        id: "REC-015",
        context: "Surveillance package BRAVO-7 recovered from dead drop at RIVERSIDE PARK bench 14. Contents include microfiche with redacted document fragments and encrypted USB drive. Lab analysis pending. Chain of custody maintained.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDE1IiwicGFja2FnZSI6IkJSQVZPLTciLCJsb2NhdGlvbiI6IlJJVkVSU0lERS1QQVJLLUIxNCIsImNvbnRlbnRzIjpbIk1JQ1JPRklDSEUiLCJFTkNSWVBURUQtVVNCIl0sImxhYkFuYWx5c2lzIjoiUEVORElORyJ9.bW4yX6zA8bC1dE3fG5hI7jK8l9mNO0pQ1r",
        timeline: "2025-06-28T15:40:00Z"
    },
    {
        id: "REC-016",
        context: "Acoustic surveillance of MERIDIAN HOTEL room 1147 captured 38 minutes of conversation referencing OPERATION VOIDSTAR. Subject used white noise generator and signal jammer, partially defeating collection. Audio enhancement ongoing.",
        encryptedPayload: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDE2IiwibG9jYXRpb24iOiJNRVJJRElBTi1IT1RFTC0xMTQ3IiwiZHVyYXRpb25NaW4iOjM4LCJvcGVyYXRpb24iOiJWT0lEU1RBUiIsImNvdW50ZXJtZWFzdXJlcyI6WyJXSElURU5PSVNFR0VOIiwiU0lHTkFMSkFNTUVSIl19.cX5zA7bC9dE0fG2hI4jK5l6m7nOP1qR2s",
        timeline: "2025-07-05T20:15:00Z"
    },
    {
        id: "REC-017",
        context: "Covert entry team documented contents of SAFE-HOUSE GAMMA. Found: 3 encrypted laptops, burner phones ×11, one-time pad sheets, currency in 6 denominations totaling approx $240K equivalent. Evidence catalogued under warrant.",
        encryptedPayload: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDE3IiwibG9jYXRpb24iOiJTQUZFSE9VU0UtR0FNTUEiLCJsYXB0b3BzIjozLCJidXJuZXJQaG9uZXMiOjExLCJjdXJyZW5jeVZhbHVlIjoyNDAwMDAsImN1cnJlbmNpZXMiOjZ9.dY6aB8cC0dE2fG4hI6jK7l8m9nPQ2rS3t",
        timeline: "2025-07-14T02:30:00Z"
    },
    {
        id: "REC-018",
        context: "ELINT platform SPECTRE-9 detected radar emissions consistent with prototype electronic warfare system. Frequency hopping pattern analyzed over 4 hours. Signal likely originating from mobile platform within 50km grid square ROMEO-7.",
        encryptedPayload: "eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDE4IiwicGxhdGZvcm0iOiJTUEVDVFJFLTkiLCJzeXN0ZW1UeXBlIjoiRUxFQ1RST05JQy1XQVJGQVJFLU1PQklMRSIsImZyZXFIb3BwaW5nIjp0cnVlLCJjb2xsZWN0aW9uSG91cnMiOjQsImdyaWQiOiJST01BTy03In0.eZ7bC9dD1eF3gH5iJ7kL9mNP4qR5sT6u",
        timeline: "2025-07-22T10:00:00Z"
    },
    {
        id: "REC-019",
        context: "Insider threat indicator: DELTA-WING employee FOXTROT-2 accessed 1,247 files outside normal job function over 30-day period. Data loss prevention alert triggered on day 29. Investigation initiated under compartmented protocol.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDE5Iiwib3JnIjoiREVMVEEtV0lORyIsImVtcGxveWVlIjoiRk9YVFJPVC0yIiwiZmlsZXNBY2Nlc3NlZCI6MTI0NywicGVyaW9kRGF5cyI6MzAsImRscEFsZXJ0Ijp0cnVlfQ.fA8cD0eE2fG4hI6jK8lM0nOP3rS4tU5v",
        timeline: "2025-08-01T09:00:00Z"
    },
    {
        id: "REC-020",
        context: "Cross-border agent NOVEMBER-6 reported contact with defector claiming knowledge of BLACKSITE KAPPA-3. Defector identity unverified. Information provided includes facility blueprint fragments and guard rotation schedule. Validity: UNCONFIRMED.",
        encryptedPayload: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDIwIiwiYWdlbnQiOiJOT1ZFTUJFUi02IiwiZGVmZWN0b3JTdGF0dXMiOiJVTlZFUklGSUVEIiwiZmFjaWxpdHkiOiJCTEFDS1NJVEUgS0FQUEEtMyIsImluZm9ybWF0aW9uUXVhbGl0eSI6IlVOQ09ORklSTUVEIn0.gB9dE1fF3gH5iJ7kL9mN1oPQ4rS5tU6vW",
        timeline: "2025-08-10T17:22:00Z"
    },
    {
        id: "REC-021",
        context: "Cryptanalysis team VECTOR successfully broke partial key for intercepted communication batch INDIGO-44. Approximately 31% of traffic decrypted. Content references personnel codenames active in PRISM-WATCH operation. Director briefed.",
        encryptedPayload: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDIxIiwidGVhbSI6IlZFQ1RPUiIsImJhdGNoIjoiSU5ESUdPLTQ0IiwiZGVjcnlwdGVkUGVyY2VudCI6MzEsIm9wZXJhdGlvbiI6IlBSSVNNLVdBVENIIiwiZGlyZWN0b3JCcmllZmVkIjp0cnVlfQ.hC0eF2gG4hI6jK8lM0nOP2qR3sT5uV7wX",
        timeline: "2025-08-19T11:45:00Z"
    },
    {
        id: "REC-022",
        context: "Physical surveillance: PACKAGE DELTA followed for 6.4km through OLDTOWN district. Made 3 apparent counter-surveillance passes, 2 brush contacts with unknown individuals. Package eventually lost in LABYRINTH MARKET area. Coverage gap: 14 minutes.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDIyIiwicGFja2FnZSI6IkRFTFRBIiwiZGlzdGFuY2VLbSI6Ni40LCJicnVzaENvbnRhY3RzIjoyLCJsb3N0IjoidHJ1ZSIsImNvdmVyYWdlR2FwTWluIjoxNH0.iD1fG3hH5iJ7kL9mN1pQR4sT6uV8wX9yZ",
        timeline: "2025-09-03T14:10:00Z"
    },
    {
        id: "REC-023",
        context: "Geospatial analysis of pattern-of-life data over 90-day baseline confirmed predictive model for subject IRON-GHOST movement. Model accuracy 87.3%. Pre-positioning of surveillance assets recommended for next probable appearance window.",
        encryptedPayload: "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDIzIiwic3ViamVjdCI6IklST04tR0hPU1QiLCJiYXNlbGluZURheXMiOjkwLCJtb2RlbEFjY3VyYWN5Ijo4Ny4zLCJwcmVQb3NpdGlvbmluZyI6IlJFQ09NTUVOREVEIN0.jE2gH4iI6jK8lM0nO2pQR5sT7uV9wX0yZA",
        timeline: "2025-09-11T08:30:00Z"
    },
    {
        id: "REC-024",
        context: "Remote access trojan NIGHTCRAWLER v3.1 deployed on target infrastructure. Keylogger capturing credentials for 4 internal systems. Screenshot capture every 90 seconds. Exfiltration using DNS tunneling over port 53. Stealth operation nominal.",
        encryptedPayload: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDI0IiwibWFsd2FyZSI6Ik5JR0hUQ1JBV0xFUi12My4xIiwia2V5bG9nZ2VyIjp0cnVlLCJzY3JlZW5zaG90SW50ZXJ2YWxTZWMiOjkwLCJleGZpbHRyYXRpb24iOiJETlMtVFVOTkVMSU5HIn0.kF3hI5jJ7kL9mN1oP3qRS6tU8vW0xY1zA2b",
        timeline: "2025-09-20T00:15:00Z"
    },
    {
        id: "REC-025",
        context: "Satellite phone intercept: 2-minute 47-second call between ROMEO and JULIET-ACTUAL. Voice analysis confirms both parties. Discussed handoff of CATEGORY-ONE material at unspecified NORTHERN CROSSING. Geolocation: inconclusive.",
        encryptedPayload: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDI1IiwiZHVyYXRpb25TZWMiOjE2NywicGFydHkxIjoiUk9NRU8iLCJwYXJ0eTIiOiJKVUxJRVQtQUNUVUFMIiwibWF0ZXJpYWxDYXRlZ29yeSI6Ik9ORSIsImxvY2F0aW9uIjoiSU5DT05DTFVTSVZFIN0.lG4iJ6kK8lM0nO2pQ4rST7uV9wX1yZ2aB3c",
        timeline: "2025-10-01T18:55:00Z"
    },
    {
        id: "REC-026",
        context: "Automated behavioral analysis flagged ODIN-WATCH subject for anomalous sleep pattern deviation. 14-day rolling average shifted by 4.2 hours, historically correlated with pre-operational stress in 73% of monitored subjects.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDI2Iiwib3BlcmF0aW9uIjoiT0RJTi1XQVRDSCIsInNsZWVwRGV2aWF0aW9uSG91cnMiOjQuMiwiY29ycmVsYXRpb25QY3QiOjczLCJhbGVydExldmVsIjoiWUVMTE9XIn0.mH5jK7lL9mN1oP3qR5ST8vW0xY2zA3bC4d",
        timeline: "2025-10-09T06:00:00Z"
    },
    {
        id: "REC-027",
        context: "Social engineering attempt against CROWN JEWEL facility: caller impersonated Director Hargrove using voice deepfake technology. Security desk detected 2-second latency artifact. Call traced to VOIP relay chain spanning 9 countries.",
        encryptedPayload: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDI3IiwidGFyZ2V0IjoiQ1JPV04tSkVXRUwiLCJ0ZWNobmlxdWUiOiJWT0lDRS1ERUVQRUFLIC IsImRldGVjdGVkIjp0cnVlLCJyZWxheUNoYWluTGVuZ3RoIjo5fQ.nI6kL8mM0nO2pQ4rS6TU9wX1yZ3aB4cD5e",
        timeline: "2025-10-18T09:40:00Z"
    },
    {
        id: "REC-028",
        context: "Field operative ORACLE intercepted physical handoff of CATEGORY-ALPHA documents at NORTHERN TRAIN STATION. 3 photographs captured, subjects unaware. Documents appear to be technical schematics. Forensic photography team en route.",
        encryptedPayload: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDI4Iiwib3BlcmF0aXZlIjoiT1JBQ0xFIiwibG9jYXRpb24iOiJOT1JUSCBUUUFJU04gU1RBVElPTiIsInBob3Rvc0NhcHR1cmVkIjozLCJkb2N1bWVudFR5cGUiOiJURUNITklDQUwtU0NIRU1BVElDUyJ9.oJ7lM9nN1oP3qR5sT7UV0yZ2aB4cD5eF6g",
        timeline: "2025-10-27T12:15:00Z"
    },
    {
        id: "REC-029",
        context: "Signals anomaly detected at LISTENING POST FOXTROT: unknown burst transmission protocol, duration 0.3 seconds, detected 7 times across 48-hour window. Burst analysis suggests pre-arranged signal using single-key stream cipher.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDI5IiwibGlzdGVuaW5nUG9zdCI6IkZPWFRST1QiLCJidXJzdER1cmF0aW9uU2VjIjowLjMsImJ1cnN0Q291bnQiOjcsIndpbmRvd0hvdXJzIjo0OCwiY2lwaGVyIjoiU0lOR0xFLUtFWS1TVFJFQU0ifQ.pH8mN0oO2pQ4rS6tU8VW1zA3bC5dE6fG7h",
        timeline: "2025-11-05T23:00:00Z"
    },
    {
        id: "REC-030",
        context: "PRISM-WATCH subjects ALPHA and BRAVO simultaneously accessed separate nodes of DARKNET forum IRONVEIL within 3-minute window. No direct communication observed. Possible use of forum as dead drop communication channel.",
        encryptedPayload: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDMwIiwib3BlcmF0aW9uIjoiUFJJU00tV0FUQ0giLCJzdWJqZWN0cyI6WyJBTFBIQSIsIkJSQVZPIl0sImZvcnVtIjoiSVJPTlZFSUwiLCJ3aW5kb3dNaW4iOjMsImRlYWREcm9wU3VzcGVjdCI6dHJ1ZX0.qI9nO1pP3qR5sT7uV9WX2aB4cD6eF7gH8i",
        timeline: "2025-11-14T15:30:00Z"
    },
    {
        id: "REC-031",
        context: "Undercover operative SPHINX confirmed delivery of disinformation package to ECHO-NETWORK. Target accepted fabricated intelligence with high confidence. Estimated 72-96 hours before adversary acts on false data. Countermeasures standing by.",
        encryptedPayload: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDMxIiwib3BlcmF0aXZlIjoiU1BISVJYSU5YIiwidGFyZ2V0IjoiRUNITy1ORVRXT1JLIiwiZGlzaW5mb0RlbGl2ZXJlZCI6dHJ1ZSwiYWN0aW9uV2luZG93SG91cnMiOls3Miw5Nl19.rJ0oP2qQ4rS6tU8vW0XY3bC5dE7fG8hI9j",
        timeline: "2025-11-22T07:05:00Z"
    },
    {
        id: "REC-032",
        context: "Unmanned ground vehicle CRAWLER-3 infiltrated SECTOR-12 perimeter undetected. 47-minute survey completed. Full structural mapping acquired via LiDAR. 2 guard positions not accounted for in existing blueprints. Update filed.",
        encryptedPayload: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDMyIiwidWd2IjoiQ1JBV0xFUi0zIiwic2VjdG9yIjoiMTIiLCJzdXJ2ZXlNaW4iOjQ3LCJsaWRhck1hcHBlZCI6dHJ1ZSwidW5hY2NvdW50ZWRQb3NpdGlvbnMiOjJ9.sK1pQ3rR5sT7uV9wX1YZ4cD6eF8gH9iJ0k",
        timeline: "2025-12-01T03:20:00Z"
    },
    {
        id: "REC-033",
        context: "Thermal satellite imagery reveals 14 individuals departing COMPOUND-KILO via tunnel exit not previously identified in intelligence databases. Exit coordinates logged. Tunnel likely extends 200-300m toward RIVER-EAST boundary.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDMzIiwiY29tcG91bmQiOiJLSUxPIiwicGVyc29ubmVsRXhpdGVkIjoxNCwidHVubmVsTGVuZ3RoTSI6WzIwMCwzMDBdLCJib3VuZGFyeSI6IlJJVkVSLUVBU1QiLCJuZXdJbnRlbCI6dHJ1ZX0.tL2qR4sS6tU8vW0xY2ZA5dE7fG9hI0jK1l",
        timeline: "2025-12-09T05:45:00Z"
    },
    {
        id: "REC-034",
        context: "Cryptographic analysis team IRON detected steganographic data hidden in 22 public social media images posted by suspected FOLIO network member. Extracted payload totals 4.1KB. Content: encoded map coordinates and time markers.",
        encryptedPayload: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDM0IiwidGVhbSI6IklST04iLCJpbWFnZUNvdW50IjoyMiwidG90YWxQYXlsb2FkS0IiOjQuMSwiY29udGVudCI6WyJNQVAtQ09PUkRJTkFURVMiLCJUSU1FLU1BUktFUlMiXX0.uM3rS5tT7uV9wX1yZ3AB6eF8gH0iJ1kL2m",
        timeline: "2025-12-17T19:00:00Z"
    },
    {
        id: "REC-035",
        context: "Border crossing data matched: Subject PHANTOM-ZERO entered via CHECKPOINT BRAVO using legend identity. Duration of stay: 9 days 4 hours. 3 unaccounted hours on day 7. Surveillance gaps due to generator failure at camera cluster 4.",
        encryptedPayload: "eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDM1Iiwic3ViamVjdCI6IlBIQU5UT00tWkVSTyIsImNoZWNrcG9pbnQiOiJCUkFWTyIsInN0YXlEdXJhdGlvbkRheXMiOjksInVuYWNjb3VudGVkSG91cnMiOjMsImd1bmRlckZhaWx1cmUiOnRydWV9.vN4sT6uU8vW0xY2zA4BC7fG9hI1jK2lM3n4o",
        timeline: "2026-01-05T10:30:00Z"
    },
    {
        id: "REC-036",
        context: "Honeypot server MIRAGE-2 successfully lured automated reconnaissance bot linked to adversary infrastructure. Full C2 server enumeration in progress. 3 additional bot IP addresses identified. Reverse intrusion authorized under standing directive.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDM2Iiwic2VydmVyIjoiTUlSQUdFLTIiLCJib3RJcHNJZGVudGlmaWVkIjozLCJyZXZlcnNlSW50cnVzaW9uIjoiQVVUSE9SSVpFRCIsImMyRW51bWVyYXRpb24iOiJJTi1QUk9HUkVTUyJ9.wO5tU7vV9wX1yZ3aB5CD8gH0iJ2kL3mN4o5p",
        timeline: "2026-01-13T16:20:00Z"
    },
    {
        id: "REC-037",
        context: "Agent COBALT reports HYDRA NETWORK planning major asset movement within 30-day window. Secondary confirmation from SIGINT intercept partially corroborates. Risk assessment: HIGH. Tasking order for enhanced coverage submitted to oversight board.",
        encryptedPayload: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDM3IiwiYWdlbnQiOiJDT0JBTFQiLCJuZXR3b3JrIjoiSFlEUkEiLCJ0aW1lZnJhbWVEYXlzIjozMCwic2lnaW50Q29ycm9ib3JhdGlvbiI6dHJ1ZSwicmlza0xldmVsIjoiSElHSCJ9.xP6uV8wW0xY2zA4bC6DE9hI1jK3lM4nO5p6q",
        timeline: "2026-01-21T13:00:00Z"
    },
    {
        id: "REC-038",
        context: "Electromagnetic pulse event detected near GRID-NOVEMBER-4. Duration: 1.4 seconds. Consistent with non-nuclear EMP device test. 3 civilian vehicles and 1 surveillance drone affected. Source triangulated to warehouse district. Team dispatched.",
        encryptedPayload: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDM4IiwiZXZlbnRUeXBlIjoiRU1QIiwiZ3JpZCI6Ik5PVkVNQkVSLTQiLCJkdXJhdGlvblNlYyI6MS40LCJhZmZlY3RlZFZlaGljbGVzIjozLCJkcm9uZXNBZmZlY3RlZCI6MX0.yQ7vW9xX1yZ3aB5cD7EF0iJ2kL4mN5oP6q7r",
        timeline: "2026-01-29T08:10:00Z"
    },
    {
        id: "REC-039",
        context: "FININT: shell company MERIDIAN GLOBAL LLC traced through 5 intermediary entities to sanctioned VIPER-GROUP financial structure. Total flow: $14.2M over 18 months. SEC referral pending. Treasury Asset Forfeiture notified.",
        encryptedPayload: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDM5IiwiY29tcGFueSI6Ik1FUklESUFOLUdMT0JBTC1MTEMiLCJlbnRpdGllc1RyYWNlZCI6NSwic2FuY3Rpb25lZEdyb3VwIjoiVklQRVItR1JPVVAiLCJ0b3RhbEZsb3dNIjoxNC4yLCJwZXJpb2RNb250aHMiOjE4fQ.zR8wX0yY2zA4bC6dE8FG1jK3lM5nO6pQ7r8s",
        timeline: "2026-02-06T11:35:00Z"
    },
    {
        id: "REC-040",
        context: "Technical surveillance measure (TSM) sweep of EMBASSY ANNEX CHARLIE found 2 previously undetected listening devices. Device type matches KOMODO-series implants associated with nation-state adversary ZETA. Diplomatic implications under review.",
        encryptedPayload: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDQwIiwidHNtTG9jYXRpb24iOiJFTUJBU1NZLUFOTkVYLUMiLCJkZXZpY2VzRm91bmQiOjIsImRldmljZVR5cGUiOiJLT01PRE8tU0VSSUVTIiwiYWR2ZXJzYXJ5IjoiWkVUQSIsImRpcGxvbWF0aWNSZXZpZXciOnRydWV9.AS9xY1zZ3aB5cD7eF9GH2kL4mN6oP7qR8s9t",
        timeline: "2026-02-14T14:50:00Z"
    },
    {
        id: "REC-041",
        context: "Predictive targeting algorithm ORACLE-5 flagged 3 individuals for elevated monitoring based on travel, communications and financial pattern convergence. Confidence scores: 91.2%, 88.7%, 83.1%. Judge advocate review required before further action.",
        encryptedPayload: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDQxIiwiYWxnb3JpdGhtIjoiT1JBQ0xFLTUiLCJmbGFnZ2VkSW5kaXZpZHVhbHMiOjMsImNvbmZpZGVuY2VTY29yZXMiOls5MS4yLDg4LjcsODMuMV0sImxlZ2FsUmV2aWV3UmVxdWlyZWQiOnRydWV9.BT0yZ2aA4bC6dE8fG0HI3lM5nO7pQ8rS9tU",
        timeline: "2026-02-22T09:15:00Z"
    },
    {
        id: "REC-042",
        context: "Drone swarm HARBINGER-12 deployed for broad area surveillance over EVENT-ZONE-FIVE. 14 drones operating in mesh configuration. Total coverage: 4.2 square kilometers. Continuous feed maintained for 9 hours. 2 persons of interest identified.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDQyIiwic3dhcm0iOiJIQVJCSU5HRVItMTIiLCJkcm9uZUNvdW50IjoxNCwiY292ZXJhZ2VLbTIiOjQuMiwib3BlcmF0aW9uSG91cnMiOjksInBvaUlkZW50aWZpZWQiOjJ9.CU1zA3bB5cD7eF9gH1IJ4mN6oP8qR9sT0uV",
        timeline: "2026-03-02T06:00:00Z"
    },
    {
        id: "REC-043",
        context: "Exfiltrated document WHISPER-FILE-99 authenticated via watermark analysis. Document originates from VAULT-7 classification level. Contents describe contingency protocol for OPERATION EMBER. Provenance investigation: ONGOING.",
        encryptedPayload: "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDQzIiwiZG9jdW1lbnQiOiJXSElTUEVSLUZJTEUtOTkiLCJjbGFzc2lmaWNhdGlvbiI6IlZBVUxULTciLCJvcGVyYXRpb24iOiJFTUJFUiIsInByb3ZlbmFuY2UiOiJPTkdPSU5HIn0.DV2aB4cC6dE8fG0hI2JK5nO7pQ9rS0tU1vW",
        timeline: "2026-03-10T21:40:00Z"
    },
    {
        id: "REC-044",
        context: "MASINT collection: unusual seismic signature detected at SITE-INDIGO coordinates. Energy release inconsistent with natural seismology. Depth: approximately 50m. Consistent with underground test or demolition activity. Continuous monitoring initiated.",
        encryptedPayload: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDQ0Iiwic2l0ZSI6IklORElHTyIsImRlcHRoTSI6NTAsInNpZ25hdHVyZVR5cGUiOiJVTkRFUkdST1VORC1URVNUIG9yIERFTU9MSVRJT04iLCJtb25pdG9yaW5nIjoiQUNUSVZFIn0.EW3bC5dD7eF9gH1iJ3KL6oP8qR0sT1uV2wX",
        timeline: "2026-03-18T04:30:00Z"
    },
    {
        id: "REC-045",
        context: "Human network STARFISH provided warning of planned disruption event targeting Keylogger infrastructure. Timeline: 10-14 days. Method: suspected supply chain attack on firmware vendor. Protective action underway with affected vendor.",
        encryptedPayload: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDQ1IiwibmV0d29yayI6IlNUQVJGSVNIIiwidGFyZ2V0IjoiTkVYVVMtR1JJRCIsInRpbWVsaW5lRGF5cyI6WzEwLDE0XSwibWV0aG9kIjoiU1VQUExZQ0hBSU4tQVRUQUNLIiwidmVuZG9yQWN0aW9uIjoiQUNUSVZFIn0.FX4cD6eE8fG0hI2jK4LM7pQ9rS1tU2vW3xY",
        timeline: "2026-03-26T12:00:00Z"
    },
    {
        id: "REC-046",
        context: "Long-term penetration asset CERBERUS reports internal power struggle within TYPHOON organization. Faction A seeking operational control vs Faction B maintaining ideological purity. Intelligence value of CERBERUS position: CRITICAL. Extraction plan on standby.",
        encryptedPayload: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDQ2IiwiYXNzZXQiOiJDRVJCRVJVUyIsInRhcmdldE9yZyI6IlRZUEhPT04iLCJmYWN0aW9ucyI6WyJPUEVSQVRJT05BTCIsIklERU9MT0dJQ0FMIl0sImludGVsVmFsdWUiOiJDUklUSUNBTCIsImV4dHJhY3Rpb25SZWFkeSI6dHJ1ZX0.GY5dE7fF9gH1iJ3kL5MN8qR0sT2uV3wX4yZ",
        timeline: "2026-04-01T17:45:00Z"
    },
    {
        id: "REC-047",
        context: "AI-assisted pattern analysis MERIDIAN-AI detected coordinated social media manipulation campaign: 1,247 bot accounts, 3 narrative themes, 14-hour activity burst. Attribution confidence 76% to known influence operation infrastructure KALEIDOSCOPE.",
        encryptedPayload: "eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDQ3IiwiYWkiOiJNRVJJRElBTi1BSSIsImJvdEFjY291bnRzIjoxMjQ3LCJuYXJyYXRpdmVzIjozLCJhY3Rpdml0eUhvdXJzIjoxNCwiYXR0cmlidXRpb25QY3QiOjc2LCJpbmZsdWVuY2VPcCI6IktBTEVJRE9TQ09QRSJ9.HZ6eF8gG0hI2jK4lM6NO9sT1uV3wX5yZ0aB",
        timeline: "2026-04-05T10:20:00Z"
    },
    {
        id: "REC-048",
        context: "Quantum communication intercept attempt at RELAY-STATION-4 partially successful. Entanglement collapse detected 0.8ms before capture, triggering key destruction. 12% of pre-collapse metadata retained. Theoretical framework breach: FIRST CONFIRMED INSTANCE.",
        encryptedPayload: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSRUMtMDQ4IiwicmVsYXlTdGF0aW9uIjoiNCIsImVudGFuZ2xlbWVudENvbGxhcHNlTXMiOjAuOCwibWV0YWRhdGFSZXRhaW5lZFBjdCI6MTIsImZpcnN0Q29uZmlybWVkSW5zdGFuY2UiOnRydWV9.IA7fG9hH1iJ3kL5mN7OP0tU2vW4xY5zA1bC",
        timeline: "2026-04-07T23:55:00Z"
    },
    {
        id: "REC-049",
        context: "Final warning indicator received from NETWORK-ALPHA: OPERATION SANDSTORM entering activation phase. All assets confirm readiness. Last known position of primary target: TERMINAL-9, EASTERN APPROACH. Command authority transferred to field commander.",
        encryptedPayload: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsInByaW9yaXR5IjoiQ0lSQ1VCUSJ9.eyJzdWIiOiJSRUMtMDQ5Iiwib3BlcmF0aW9uIjoiU0FORFNUUk9STSIsInBoYXNlIjoiQUNUSVZBVElPTiIsInRhcmdldExvY2F0aW9uIjoiVEVSTUlOQUwtOS1FQVNUIiwiY29tbWFuZFRyYW5zZmVyIjoidHJ1ZSJ9.JB8gH0iI2jK4lM6nO8PQ1uV3wX5yZ7aB2cD",
        timeline: "2026-04-09T05:00:00Z"
    },
    {
        id: "REC-050",
        context: "Keylogger CORE surveillance aggregate: All 49 prior records cross-correlated. Network analysis reveals single coordinating entity ARCHITECT with 97.4% confidence. Identity remains UNKNOWN. All active operations converge on TERMINUS EVENT in 72-hour window.",
        encryptedPayload: "eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCIsInByaW9yaXR5IjoiT01FR0EtQ0xBU1MifQ.eyJzdWIiOiJSRUMtMDUwIiwiY29ycmVsYXRlZFJlY29yZHMiOjQ5LCJhcmNoaXRlY3RDb25maWRlbmNlIjo5Ny40LCJpZGVudGl0eSI6IlVOS05PV04iLCJ0ZXJtaW51c0V2ZW50V2luZG93SG91cnMiOjcyLCJuZXh1c0xldmVsIjoiT01FR0EifQ.KC9hI1jJ3kL5mN7oP9QR2vW4xY6zA8bC3dE4fG5hI6jK7lM8nO9pQ0rS1tU2vW3xY4zA5bC6dE",
        timeline: "2026-04-11T00:00:00Z"
    }
];
}),
"[project]/keylogger-frontend/src/components/opening-animation/OpeningAnimation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OpeningAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// One full keylogger animation cycle (type + data-sent flash) takes ~9 seconds.
// We start the exit fade at 9000ms so exactly one cycle plays before the dashboard appears.
const CYCLE_DURATION = 9000;
function OpeningAnimation({ onComplete }) {
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("active");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setTimeout(()=>setPhase("exiting"), CYCLE_DURATION);
        return ()=>clearTimeout(t);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        onExitComplete: onComplete,
        children: phase === "active" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.5
            },
            className: "fixed inset-0 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                src: "/keylogger-demo.html",
                style: {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    display: "block"
                },
                title: "Cybersecurity Awareness — Keylogger Simulation"
            }, void 0, false, {
                fileName: "[project]/keylogger-frontend/src/components/opening-animation/OpeningAnimation.tsx",
                lineNumber: 32,
                columnNumber: 11
            }, this)
        }, "keylogger-intro", false, {
            fileName: "[project]/keylogger-frontend/src/components/opening-animation/OpeningAnimation.tsx",
            lineNumber: 24,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/opening-animation/OpeningAnimation.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/keylogger-frontend/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/keylogger-frontend/src/components/ui/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/keylogger-frontend/src/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/keylogger-frontend/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/@base-ui/react/esm/button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/button.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/keylogger-frontend/src/components/data-table/ContextCell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextCell",
    ()=>ContextCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const TRUNCATE_LENGTH = 120;
function ContextCell({ text }) {
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLong = text.length > TRUNCATE_LENGTH;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-slate-600 leading-relaxed",
                children: expanded || !isLong ? text : `${text.slice(0, TRUNCATE_LENGTH)}...`
            }, void 0, false, {
                fileName: "[project]/keylogger-frontend/src/components/data-table/ContextCell.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            isLong && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "link",
                size: "sm",
                className: "ml-1 h-auto p-0 text-sky-600 text-xs hover:text-sky-500 font-mono",
                onClick: ()=>setExpanded((v)=>!v),
                children: expanded ? "[ COLLAPSE ]" : "[ SHOW MORE ]"
            }, void 0, false, {
                fileName: "[project]/keylogger-frontend/src/components/data-table/ContextCell.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/keylogger-frontend/src/components/data-table/ContextCell.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/keylogger-frontend/src/components/data-table/EncryptedPayloadCell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EncryptedPayloadCell",
    ()=>EncryptedPayloadCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function EncryptedPayloadCell({ payload }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-sm break-all font-mono text-xs text-amber-600 leading-relaxed",
        children: payload
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/data-table/EncryptedPayloadCell.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/keylogger-frontend/src/components/data-table/TimelineCell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineCell",
    ()=>TimelineCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/date-fns/parseISO.js [app-ssr] (ecmascript)");
;
;
function TimelineCell({ isoString }) {
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(isoString);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "whitespace-nowrap font-mono text-xs text-violet-600",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "d MMMM yyyy")
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/data-table/TimelineCell.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/keylogger-frontend/src/components/data-table/DataTableColumns.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cellRenderer",
    ()=>cellRenderer,
    "columnConfig",
    ()=>columnConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$data$2d$table$2f$ContextCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/components/data-table/ContextCell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$data$2d$table$2f$EncryptedPayloadCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/components/data-table/EncryptedPayloadCell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$data$2d$table$2f$TimelineCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/components/data-table/TimelineCell.tsx [app-ssr] (ecmascript)");
;
;
;
;
const columnConfig = [
    {
        key: "id",
        label: "ID",
        width: "w-28"
    },
    {
        key: "context",
        label: "Context",
        width: "w-72"
    },
    {
        key: "encryptedPayload",
        label: "Encrypted Payload",
        width: "w-80"
    },
    {
        key: "timeline",
        label: "Timeline",
        width: "w-36"
    }
];
const cellRenderer = {
    id: (v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-mono text-sky-600 font-bold text-sm tracking-wider",
            children: v
        }, void 0, false, {
            fileName: "[project]/keylogger-frontend/src/components/data-table/DataTableColumns.tsx",
            lineNumber: 23,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    context: (v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$data$2d$table$2f$ContextCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextCell"], {
            text: v
        }, void 0, false, {
            fileName: "[project]/keylogger-frontend/src/components/data-table/DataTableColumns.tsx",
            lineNumber: 27,
            columnNumber: 19
        }, ("TURBOPACK compile-time value", void 0)),
    encryptedPayload: (v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$data$2d$table$2f$EncryptedPayloadCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedPayloadCell"], {
            payload: v
        }, void 0, false, {
            fileName: "[project]/keylogger-frontend/src/components/data-table/DataTableColumns.tsx",
            lineNumber: 28,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)),
    timeline: (v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$data$2d$table$2f$TimelineCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimelineCell"], {
            isoString: v
        }, void 0, false, {
            fileName: "[project]/keylogger-frontend/src/components/data-table/DataTableColumns.tsx",
            lineNumber: 29,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
};
}),
"[project]/keylogger-frontend/src/components/data-table/DataTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$data$2d$table$2f$DataTableColumns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/components/data-table/DataTableColumns.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const MotionTableRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"]);
function DataTable({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-slate-200 overflow-hidden bg-white shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
            className: "table-fixed w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                        className: "border-slate-200 bg-slate-50 hover:bg-slate-50",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$data$2d$table$2f$DataTableColumns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["columnConfig"].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                className: `${col.width} text-sky-600 font-mono text-xs uppercase tracking-widest py-4 px-4 border-b border-slate-200`,
                                children: col.label
                            }, col.key, false, {
                                fileName: "[project]/keylogger-frontend/src/components/data-table/DataTable.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/keylogger-frontend/src/components/data-table/DataTable.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/keylogger-frontend/src/components/data-table/DataTable.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: data.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionTableRow, {
                            initial: {
                                opacity: 0,
                                x: -8
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: i * 0.04,
                                duration: 0.3
                            },
                            className: "border-slate-100 hover:bg-slate-50 transition-colors",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$data$2d$table$2f$DataTableColumns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["columnConfig"].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                    className: "align-top py-4 px-4 whitespace-normal",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$data$2d$table$2f$DataTableColumns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cellRenderer"][col.key](row[col.key])
                                }, col.key, false, {
                                    fileName: "[project]/keylogger-frontend/src/components/data-table/DataTable.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this))
                        }, row.id, false, {
                            fileName: "[project]/keylogger-frontend/src/components/data-table/DataTable.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/keylogger-frontend/src/components/data-table/DataTable.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/keylogger-frontend/src/components/data-table/DataTable.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/data-table/DataTable.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/keylogger-frontend/src/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/@base-ui/react/esm/select/index.parts.js [app-ssr] (ecmascript) <export * as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
"use client";
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Root;
function SelectGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Group, {
        "data-slot": "select-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("scroll-my-1 p-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function SelectValue({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Value, {
        "data-slot": "select-value",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Trigger, {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Icon, {
                render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "pointer-events-none size-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function SelectContent({ className, children, side = "bottom", sideOffset = 4, align = "center", alignOffset = 0, alignItemWithTrigger = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Positioner, {
            side: side,
            sideOffset: sideOffset,
            align: align,
            alignOffset: alignOffset,
            alignItemWithTrigger: alignItemWithTrigger,
            className: "isolate z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Popup, {
                "data-slot": "select-content",
                "data-align-trigger": alignItemWithTrigger,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                        fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].List, {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                        fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].GroupLabel, {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-1.5 py-1 text-xs text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Item, {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemText, {
                className: "flex flex-1 shrink-0 gap-2 whitespace-nowrap",
                children: children
            }, void 0, false, {
                fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemIndicator, {
                render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center"
                }, void 0, false, {
                    fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                    className: "pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Separator, {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none -mx-1 my-1 h-px bg-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ScrollUpArrow, {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {}, void 0, false, {
            fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ScrollDownArrow, {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {}, void 0, false, {
            fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
            lineNumber: 184,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/ui/select.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TablePagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/components/ui/select.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const PAGE_SIZE_OPTIONS = [
    5,
    10,
    20,
    50
];
function TablePagination({ currentPage, totalPages, pageSize, onPageChange, onPageSizeChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 px-1 gap-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-slate-400 font-mono hidden sm:inline",
                    children: "ROWS/PAGE"
                }, void 0, false, {
                    fileName: "[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                    value: String(pageSize),
                    onValueChange: (v)=>onPageSizeChange(Number(v)),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "w-20 h-8 text-xs bg-white border-slate-300 text-sky-600 font-mono",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                fileName: "[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                            className: "bg-white border-slate-200",
                            children: PAGE_SIZE_OPTIONS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: String(s),
                                    className: "text-xs font-mono text-sky-600 focus:bg-slate-100 focus:text-sky-700",
                                    children: s
                                }, s, false, {
                                    fileName: "[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    disabled: currentPage <= 1,
                    onClick: ()=>onPageChange(currentPage - 1),
                    className: "h-8 px-3 text-xs font-mono border-slate-300 bg-white hover:bg-slate-50 text-sky-600 hover:text-sky-700 disabled:opacity-30",
                    children: "← PREV"
                }, void 0, false, {
                    fileName: "[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-mono text-slate-500 tabular-nums",
                    children: [
                        currentPage,
                        " / ",
                        totalPages
                    ]
                }, void 0, true, {
                    fileName: "[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    disabled: currentPage >= totalPages,
                    onClick: ()=>onPageChange(currentPage + 1),
                    className: "h-8 px-3 text-xs font-mono border-slate-300 bg-white hover:bg-slate-50 text-sky-600 hover:text-sky-700 disabled:opacity-30",
                    children: "NEXT →"
                }, void 0, false, {
                    fileName: "[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/keylogger-frontend/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$hooks$2f$useAnimationGate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/hooks/useAnimationGate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/data/mockData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$opening$2d$animation$2f$OpeningAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/components/opening-animation/OpeningAnimation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$data$2d$table$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/components/data-table/DataTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$pagination$2f$TablePagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/keylogger-frontend/src/components/pagination/TablePagination.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const DEFAULT_PAGE_SIZE = 10;
function Home() {
    const { animationDone, markDone } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$hooks$2f$useAnimationGate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationGate"])();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_PAGE_SIZE);
    const { data, total, totalPages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const start = (currentPage - 1) * pageSize;
        return {
            data: __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockData"].slice(start, start + pageSize),
            total: __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockData"].length,
            totalPages: Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockData"].length / pageSize)
        };
    }, [
        currentPage,
        pageSize
    ]);
    function handlePageChange(page) {
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    function handlePageSizeChange(size) {
        setPageSize(size);
        setCurrentPage(1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !animationDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$opening$2d$animation$2f$OpeningAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onComplete: markDone
            }, void 0, false, {
                fileName: "[project]/keylogger-frontend/src/app/page.tsx",
                lineNumber: 37,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-slate-100 p-4 md:p-8 lg:p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl md:text-3xl font-mono font-bold text-sky-600 tracking-tight",
                                children: "Keylogger dashboard"
                            }, void 0, false, {
                                fileName: "[project]/keylogger-frontend/src/app/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 h-px bg-gradient-to-r from-sky-400/60 via-sky-300/30 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/keylogger-frontend/src/app/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/keylogger-frontend/src/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$data$2d$table$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            data: data
                        }, void 0, false, {
                            fileName: "[project]/keylogger-frontend/src/app/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/keylogger-frontend/src/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$keylogger$2d$frontend$2f$src$2f$components$2f$pagination$2f$TablePagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        currentPage: currentPage,
                        totalPages: totalPages,
                        pageSize: pageSize,
                        total: total,
                        onPageChange: handlePageChange,
                        onPageSizeChange: handlePageSizeChange
                    }, void 0, false, {
                        fileName: "[project]/keylogger-frontend/src/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/keylogger-frontend/src/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=keylogger-frontend_src_0.kzhd5._.js.map