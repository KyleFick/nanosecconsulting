import { FiMenu } from "react-icons/fi";
import Nano from "@/public/Nano Testing.jpg";
import Image from "next/image";
import Link from "next/link";

const Navigation = ({ onSidebarToggle }: { onSidebarToggle: () => void }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-black bg-opacity-80 text-white">
      <button onClick={onSidebarToggle} className="text-white text-2xl">
        <FiMenu />
      </button>

      <Link href="/cyberhome">
        <div className="grid grid-cols-2 items-center">
          {/* Left - Logo */}
          <div className="flex justify-end">
            <Image
              src={Nano}
              alt="NanoSecConsulting Logo"
              width={50}
              height={50}
              className="rounded-lg mx-5"
            />
          </div>

          {/* Right - Text */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-neon-blue p-5">Nano Sec Consulting</h1>
          </div>
        </div>
      </Link>

    </nav>
  );
};

export default Navigation;