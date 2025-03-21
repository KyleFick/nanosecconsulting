(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_81a76763._.js", {

"[project]/app/data/Information.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Evaluation": (()=>Evaluation),
    "RiskAssessment": (()=>RiskAssessment),
    "services": (()=>services)
});
const RiskAssessment = [
    {
        Title: "Cybersecurity Risk Assessment",
        Instructions: "Read each scenario and select the response that best describes your organization’s current situation. Your answers will help determine the security services you."
    },
    {
        id: 1,
        Title: "Scenario 1: Network Security",
        Instructions: "Your company stores sensitive client data and operates on a cloud-based infrastructure. Recently, you noticed unusual network traffic from an external IP. What action do you take?",
        Options: [
            "A) Nothing, we assume our cloud provider handles security.",
            "B) Run an antivirus scan and hope it’s not serious.",
            "C) Conduct a penetration test to identify vulnerabilities.",
            "D) Activate our incident response team to investigate."
        ],
        Recommendations: {
            A: "Network Penetration Testing & Security Audits",
            B: "Network Penetration Testing & Security Audits",
            C: "Advanced Penetration Testing",
            D: "Incident Response & Forensics"
        }
    },
    {
        id: 2,
        Title: "Scenario 2: Web & API Security",
        Instructions: "Your company just launched a new web application. A customer reports that their account was accessed by an unknown person. How do you respond?",
        Options: [
            "A) Tell them to reset their password and ignore further reports.",
            "B) Check if it was a user mistake and do nothing if they can't prove a breach.",
            "C) Conduct a Web & API security test to check for vulnerabilities.",
            "D) Immediately shut down the application and conduct a forensic investigation."
        ],
        Recommendations: {
            A: "Web & API Security Testing",
            B: "Web & API Security Testing",
            C: "Advanced Web & API Security Audits",
            D: "Incident Response & Forensics"
        }
    },
    {
        id: 3,
        Title: "Scenario 3: Compliance & Security Audits",
        Instructions: "You are handling financial transactions and customer data. A regulator requests proof that your company follows security best practices. What do you do?",
        Options: [
            "A) Send them whatever documentation you have, even if it's outdated.",
            "B) Ignore the request and hope they don’t follow up.",
            "C) Conduct a security compliance audit to verify you meet regulations.",
            "D) Engage a cybersecurity consultant to prepare for full certification."
        ],
        Recommendations: {
            A: "Basic Security Compliance Audits",
            B: "Basic Security Compliance Audits",
            C: "ISO 27001, PCI DSS, or GDPR Compliance Testing",
            D: "Advanced Security Audits & Consultation"
        }
    },
    {
        id: 4,
        Title: "Scenario 4: Red Team vs. Blue Team",
        Instructions: "Your organization wants to test its cybersecurity defenses. What would be the best approach?",
        Options: [
            "A) Wait until an actual cyberattack happens to see how prepared you are.",
            "B) Use internal IT staff to test security, even though they lack offensive experience.",
            "C) Hire a Red Team to simulate real-world attacks.",
            "D) Engage both a Red and Blue Team for a full cybersecurity battle simulation."
        ],
        Recommendations: {
            A: "Basic Red Team Engagement",
            B: "Basic Red Team Engagement",
            C: "Advanced Red Teaming",
            D: "Full Red Team/Blue Team Cyber Exercises"
        }
    },
    {
        id: 5,
        Title: "Scenario 5: Incident Response & Forensics",
        Instructions: "Your company detects a potential ransomware attack encrypting files. What is your response?",
        Options: [
            "A) Pay the ransom and hope the attackers release your data.",
            "B) Shut down affected systems and restore from the last backup.",
            "C) Launch an internal investigation to determine the source of the breach.",
            "D) Engage a cybersecurity incident response team immediately."
        ],
        Recommendations: {
            A: "Cybersecurity Risk Assessment & Backup Strategy Consulting",
            B: "Cybersecurity Risk Assessment & Backup Strategy Consulting",
            C: "Forensic Investigation & Threat Hunting",
            D: "Advanced Incident Response & Forensics"
        }
    }
];
const Evaluation = {
    Basic: "Your company needs basic security audits & penetration testing.",
    Advanced: "Your company requires advanced security testing & compliance audits.",
    FullScope: "You need full-scope security services, including Red Teaming and Incident Response."
};
const services = [
    {
        id: 1,
        title: "Basic Vulnerability Assessments",
        description: "Identify and report common vulnerabilities in your systems to enhance security."
    },
    {
        id: 2,
        title: "Phishing Simulation Testing",
        description: "Simulate phishing attacks to evaluate and improve employee security awareness."
    },
    {
        id: 3,
        title: "Web Application Scanning",
        description: "Perform automated and manual scans to detect web application vulnerabilities."
    },
    {
        id: 4,
        title: "Password Policy Audits",
        description: "Review and strengthen password policies to enforce secure authentication practices."
    },
    {
        id: 5,
        title: "Network Security Assessments",
        description: "Evaluate your network security posture and recommend improvements."
    },
    {
        id: 6,
        title: "Compliance Readiness Checks",
        description: "Assist in preparing for compliance audits by ensuring regulatory standards are met."
    },
    {
        id: 7,
        title: "Security Awareness Training",
        description: "Educate staff on cybersecurity best practices to reduce human-related risks."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/cyberhome/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$Information$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/Information.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CyberHome = ()=>{
    _s();
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSelect = (questionId, option)=>{
        setAnswers({
            ...answers,
            [questionId]: option
        });
    };
    const handleSubmit = ()=>{
        setSubmitted(true);
    };
    const evaluateResults = ()=>{
        const answerCounts = {
            A: 0,
            B: 0,
            C: 0,
            D: 0
        };
        Object.values(answers).forEach((answer)=>{
            if (answer in answerCounts) {
                answerCounts[answer]++;
            }
        });
        if (answerCounts.A + answerCounts.B > answerCounts.C && answerCounts.A + answerCounts.B > answerCounts.D) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$Information$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Evaluation"].Basic;
        } else if (answerCounts.C > answerCounts.D) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$Information$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Evaluation"].Advanced;
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$Information$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Evaluation"].FullScope;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl md:text-6xl font-bold mt-6 text-neon-blue",
                children: "Nano Sec Consulting"
            }, void 0, false, {
                fileName: "[project]/app/cyberhome/page.tsx",
                lineNumber: 38,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/cyberhome/page.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cyberhome/page.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
};
_s(CyberHome, "O/nYjJkSnbJ3pHgVyFGmBZJX18s=");
_c = CyberHome;
const __TURBOPACK__default__export__ = CyberHome;
var _c;
__turbopack_context__.k.register(_c, "CyberHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_81a76763._.js.map