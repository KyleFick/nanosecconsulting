"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/custom/Nav/SideBar";
import Navigation from "@/components/custom/Nav/Navigation";

const CyberLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isSidebarOpen && !(event.target as HTMLElement).closest(".sidebar")) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isSidebarOpen]);

  return (
    <div className="relative flex min-h-screen">
      {/* <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-10">
        <source src="/video.mp4" type="video/mp4" />
      </video> */}

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 bg-opacity-90 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20 sidebar`}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      <div className="w-full relative z-10">
        <Navigation onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="px-5 md:px-10">{children}</div>
      </div>
    </div>
  );
};

export default CyberLayout;