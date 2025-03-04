import { FiMenu } from "react-icons/fi";

const Navigation = ({ onSidebarToggle }: { onSidebarToggle: () => void }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-black bg-opacity-80 text-white">
      {/* Sidebar Toggle Button */}
      <button onClick={onSidebarToggle} className="text-white text-2xl">
        <FiMenu />
      </button>
      <h1 className="text-xl font-bold text-neon-blue">NanoSec Consulting</h1>
    </nav>
  );
};

export default Navigation;