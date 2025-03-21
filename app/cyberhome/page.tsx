"use client";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import HackerSpace from "@/public/HackerSpace.webp";
import Link from "next/link";

const CyberHome = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black rounded-xl mt-5">
      {/* Hero Section */}
      <section className="p-10 flex flex-col justify-center items-center text-center space-y-8 px-5">
        <h1 className="text-7xl font-bold text-neon-blue animate-pulse ">
          Welcome to Nano Sec Consulting
        </h1>
        <p className="text-xl text-green-300 max-w-3xl mx-auto terminal-text">
          Protecting your digital assets with cutting-edge cybersecurity. We use advanced ethical hacking, real-time monitoring, and tailored security services to ensure your safety.
        </p>
        <Link href="/cyberhome/assessment">
            <button className="bg-green-400 text-black px-6 py-3 rounded-lg font-bold text-xl hover:bg-green-600 transition-all">
            Get Your Free Security Assessment
            </button>
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black/80">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl text-green-400 terminal-text">Our Services</h2>
          <p className="text-lg text-green-300 max-w-xl mx-auto terminal-text">
            From penetration testing to compliance audits, we offer comprehensive cybersecurity solutions for businesses of all sizes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 mt-10">
          {[
            { title: "Penetration Testing", description: "Discover hidden vulnerabilities before hackers do." },
            { title: "Incident Response", description: "Fast, efficient actions to mitigate damage from cyber-attacks." },
            { title: "Compliance Audits", description: "Ensure full compliance with industry regulations for data protection." },
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-black/70 backdrop-blur-md border-2 border-green-400 shadow-2xl hover:scale-105 hover:shadow-xl transition-all text-white p-6 terminal-card"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold terminal-text">{`user@nano-sec:~$ ${service.title}`}</CardTitle>
              </CardHeader>
              <CardContent className="terminal-text">
                {service.description}
                <div className="cursor"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-5 border-3 border-sky-500 text-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-semibold terminal-text">About Nano Sec Consulting</h2>
          <p className="text-lg terminal-text">
            At Nano Sec, we combine advanced hacking techniques with years of experience in the cybersecurity field. Our mission is to provide unparalleled protection against digital threats, leveraging cutting-edge tools and strategies.
          </p>
          <p className="text-lg terminal-text">
            Whether you're a small business or a large enterprise, our bespoke services cater to your unique needs, ensuring the safety of your data and systems.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black/80 text-white">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl terminal-text">What Our Clients Say</h2>
          <div className="flex justify-center space-x-8 mt-8">
            <div className="max-w-sm">
              <p className="text-lg terminal-text">
                "Nano Sec's team helped us uncover vulnerabilities we never knew existed. Their response was swift, and we felt secure with their insights."
              </p>
              <p className="font-semibold mt-4 terminal-text">- John Doe, CEO of TechCorp</p>
            </div>
            <div className="max-w-sm">
              <p className="text-lg terminal-text">
                "The penetration testing and compliance audit they performed were thorough. They truly care about securing our data."
              </p>
              <p className="font-semibold mt-4 terminal-text">- Jane Smith, CTO of DataSafe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20  border-3 border-sky-500 text-black">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-semibold terminal-text">Get in Touch</h2>
          <p className="text-lg terminal-text">Ready to secure your digital world? Reach out to us now and get a personalized security assessment.</p>
          <button className="bg-black text-green-400 px-6 py-3 rounded-lg font-bold text-xl hover:bg-green-600 transition-all">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/80 text-white text-center">
        <p>&copy; 2025 Nano Sec Consulting | All rights reserved.</p>
        <p>Privacy Policy | Terms & Conditions</p>
      </footer>
    </div>
  );
};

export default CyberHome;
