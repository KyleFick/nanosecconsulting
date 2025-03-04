import Image from "next/image";
import Nano from "@/public/Nano Testing.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <header className="flex flex-col items-center justify-center text-center py-20 px-4">
        <Image src={Nano} alt="NanoSecConsulting Logo" width={300} height={300} className="rounded-lg" />
        <h1 className="text-4xl md:text-6xl font-bold mt-6 text-neon-blue">Nano Sec Consulting</h1>
        <p className="text-lg md:text-2xl mt-4 max-w-2xl text-gray-300">Elite Cybersecurity Solutions for the Digital Age</p>
      </header>

      <section className="flex justify-center items-center">
        <Link href="/cyberhome">
        <Button>
          Dive Deeper
        </Button>
        </Link>
      </section>

      <section className="py-16 px-8 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-neon-red">Our Services</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-neon-blue">Pentesting & Security Audits</h3>
            <p className="text-gray-400 mt-2">We identify and mitigate vulnerabilities before attackers do.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-neon-red">Incident Response</h3>
            <p className="text-gray-400 mt-2">Fast and effective response to cyber threats and breaches.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-neon-blue">Secure Infrastructure</h3>
            <p className="text-gray-400 mt-2">Building robust, attack-resistant systems.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-neon-blue">Contact Us</h2>
        <p className="text-gray-400 mt-4">Secure your business with NanoSecConsulting today.</p>
        <a href="mailto:contact@nanosec.com" className="mt-6 inline-block bg-neon-red text-white px-6 py-3 rounded-lg text-lg font-semibold">Email Us</a>
      </section>
    </div>
  );
}
