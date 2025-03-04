import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RiskAssessment } from "@/app/data/Information";
const CyberHome = () => {
    return (
        <div className="p-5">
            <div className="flex justify-center items-center">
                <h1 className="text-4xl md:text-6xl font-bold mt-6 text-neon-blue">Nano Sec Consulting</h1>
            </div>

            <div>
                {RiskAssessment.map((RiskAssessment) => 
                <Card key={RiskAssessment.id} className="bg-black border-text-neon-blue">
                    <CardHeader>
                        <CardTitle>{RiskAssessment.Title}</CardTitle>
                        <CardDescription>{RiskAssessment.Instructions}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <h3>Scenario 1: Network Security</h3>
                            <p>Your company stores sensitive client data and operates on a cloud-based infrastructure. Recently, you noticed unusual network traffic from an external IP. What action do you take?  </p>
                            <ul>
                                <li>A) Nothing, we assume our cloud provider handles security.</li>
                                <li>B) Run an antivirus scan and hope it’s not serious.</li>
                                <li>C) Conduct a penetration test to identify vulnerabilities.</li>
                                <li>D) Activate our incident response team to investigate.</li>
                            </ul>

                            <div>
                                <p>
                                ✅ **Service Recommendation:**  
                                - If you chose **A or B**, you may need **Network Penetration Testing & Security Audits**.  
                                - If you chose **C**, you may need **Advanced Penetration Testing**.  
                                - If you chose **D**, you likely need **Incident Response & Forensics**.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>Scenario 2: Web & API Security</h3>
                            <p>Your company just launched a new web application. A customer reports that their account was accessed by an unknown person. How do you respond?  </p>
                            <ul>
                                <li>A) Tell them to reset their password and ignore further reports.</li>
                                <li>B) Check if it was a user mistake and do nothing if they can't prove a breach.</li>
                                <li>C) Conduct a Web & API security test to check for vulnerabilities.</li>
                                <li>D) Immediately shut down the application and conduct a forensic investigation.</li>
                            </ul>

                            <div>
                                <p>
                                ✅ **Service Recommendation:**  
                                - If you chose **A or B**, you may need **Web & API Security Testing**.  
                                - If you chose **C**, you need **Advanced Web & API Security Audits**.  
                                - If you chose **D**, you require **Incident Response & Forensics**.  
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>Scenario 3: Compliance & Security Audits</h3>
                            <p>You are handling financial transactions and customer data. A regulator requests proof that your company follows security best practices. What do you do? </p>
                            <ul>
                                <li>A) Send them whatever documentation you have, even if it's outdated.</li>
                                <li>B) Ignore the request and hope they don’t follow up.</li>
                                <li>C) Conduct a security compliance audit to verify you meet regulations.</li>
                                <li>D) Engage a cybersecurity consultant to prepare for full certification.</li>
                            </ul>
                            <div>
                                <p>
                                ✅ **Service Recommendation:**  
                                - If you chose **A or B**, you may need **Basic Security Compliance Audits**.  
                                - If you chose **C**, you require **ISO 27001, PCI DSS, or GDPR Compliance Testing**.  
                                - If you chose **D**, you need **Advanced Security Audits & Consultation**.   
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>Scenario 4: Red Team vs. Blue Team</h3>
                            <p>Your organization wants to test its cybersecurity defenses. What would be the best approach?</p>
                            <ul>
                                <li>A) Wait until an actual cyberattack happens to see how prepared you are.</li>
                                <li>B) Use internal IT staff to test security, even though they lack offensive experience.</li>
                                <li>C) Hire a Red Team to simulate real-world attacks.</li>
                                <li>D) Engage both a Red and Blue Team for a full cybersecurity battle simulation.</li>
                            </ul>
                            <div>
                                <p>
                                ✅ **Service Recommendation:**  
                                - If you chose **A or B**, you may need **Basic Red Team Engagement**.  
                                - If you chose **C**, you require **Advanced Red Teaming**.  
                                - If you chose **D**, you need **Full Red Team/Blue Team Cyber Exercises**.    
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>Scenario 5: Incident Response & Forensics</h3>
                            <p>Your company detects a potential ransomware attack encrypting files. What is your response?</p>
                            <ul>
                                <li>A) Pay the ransom and hope the attackers release your data.</li>
                                <li>B) Shut down affected systems and restore from the last backup.</li>
                                <li>C) Launch an internal investigation to determine the source of the breach.</li>
                                <li>D) Engage a cybersecurity incident response team immediately.</li>
                            </ul>
                            <div>
                                <p>
                                ✅ **Service Recommendation:**  
                                - If you chose **A or B**, you may need **Cybersecurity Risk Assessment & Backup Strategy Consulting**.  
                                - If you chose **C**, you need **Forensic Investigation & Threat Hunting**.  
                                - If you chose **D**, you require **Advanced Incident Response & Forensics**.     
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2>Final Evalutation:</h2>
                            <p>
                                - **Mostly A/B Answers?** → Your company needs **basic security audits & penetration testing**.  
                                - **Mostly C Answers?** → Your company requires **advanced security testing & compliance audits**.  
                                - **Mostly D Answers?** → You need **full-scope security services, including Red Teaming and Incident Response**. </p>
                        </div>
                    </CardContent>
                </Card>
                )}
            </div>
        </div>
    );
}

export default CyberHome;