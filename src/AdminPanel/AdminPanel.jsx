import { motion } from "framer-motion";
import Authentication from "./Authentication/Authentication";
import Dashboard from "./Dashboard/Dashboard";
import Guide from "./Guide/Guide";
import Concepts from "./Concepts/Concepts";
import UiComponents from "./UiComponents/UiComponents";
import Header from "../components/Header";
import { useState } from "react";
import KpiSummary from "../components/KpiSummary";
import { IoMdClose } from "react-icons/io";
import CampaignsTable from "../components/CampaignsTable ";

function AdminPanel() {
  const [adminPanel, setAdminPanel] = useState(window.innerWidth >= 1024);

  const toggleAdminPanel = () => {
    setAdminPanel((prev) => !prev);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{
          x: adminPanel ? "0%" : "-100%",
        }}
        transition={{ duration: 0.3 }}
        className={`fixed lg:static lg:translate-x-0 z-20 lg:z-auto ${
          adminPanel ? "lg:w-64" : "lg:w-0"
        } bg-white h-screen flex flex-col`}
      >
        <div className="w-64 bg-white z-10">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-4 h-20 border-b xl:hidden">
            <h1 className="text-3xl font-bold whitespace-nowrap">
              Admin Panel
            </h1>
            <button
              onClick={toggleAdminPanel}
              className="lg:hidden sm:block lg:static p-2"
            >
              <IoMdClose
                className={`text-4xl text-gray-500 hover:text-gray-700 transition duration-300 ${
                  adminPanel ? "block" : "hidden"
                }`}
              />
            </button>
          </div>
        </div>
        <div className="pt-2 overflow-auto scrollbar-hidden h-full pb-4">
          <div className="px-4">
          <h1 className="text-3xl font-bold whitespace-nowrap lg:block max-[448px]:hidden md:hidden">
              Admin Panel
            </h1>
            <Dashboard />
            <Concepts />
            <UiComponents />
            <Authentication />
            <Guide />
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div
        className={`w-full h-screen flex flex-col transition-all duration-300 ${
          adminPanel ? "lg:ml-0" : "lg:ml-0"
        }`}
      >
        {/* Header */}
        <Header setAdminPanel={toggleAdminPanel} />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hidden">
          <KpiSummary />
          <CampaignsTable />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
