"use client";

import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";
import { BiBong, BiCoin } from "react-icons/bi";
import { TfiTablet } from "react-icons/tfi";

// Define link structure
interface NavLinksItem {
  id: number;
  name: string;
  href: string;
  icon: React.ElementType;
}

const links: NavLinksItem[] = [
  {
    id: 1,
    name: "About",
    href: "/About",
    icon: BiBong,
  },
  {
    id: 2,
    name: "Contact",
    href: "/Contact",
    icon: TfiTablet,
  },
  {
    id: 3,
    name: "Services",
    href: "/Services",
    icon: BiCoin,
  },
];

const Sidebar = ({ onClose }: { onClose: () => void }) => {
  const pathname = usePathname(); 

  return (
    <div className="h-screen w-64 bg-black bg-opacity-90 text-white flex flex-col p-5 shadow-lg">
      <div className="flex justify-end">
        <button onClick={onClose} className="text-2xl text-gray-400 hover:text-white">
          <FiX />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="mt-4 space-y-2">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`flex items-center space-x-3 px-4 py-2 rounded-md transition-all ${
              pathname === link.href ? "bg-blue-600 text-white" : "hover:bg-gray-800"
            }`}
          >
            <link.icon className="text-xl" />
            <span>{link.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
