import Authentication from "./Authentication/Authentication";
import Dashboard from "./Dashboard/Dashboard";
import Guide from "./Guide/Guide";
import Concepts from "./Concepts/Concepts";
import UiComponents from "./UiComponents/UiComponents";
import Header from "../components/Header";
import { useState } from "react";
import KpiSummary from "../components/KpiSummary";
import CampaignsTable from "../components/CampaignsTable ";

function AdminPanel() {
  const [adminPanel, setAdminPanel] = useState(true);
  return (
    <>
      <div className="flex">
        {adminPanel === true ? (
          <div className="w-64 bg-white h-screen flex flex-col">
            <div className="fixed top-0 left-0 w-64 bg-white z-10">
              <h1 className="text-3xl font-bold pt-4 mb-2 px-5">Admin Panel</h1>
            </div>
            <div className="pt-2 overflow-auto scrollbar-hidden h-full pb-4 ">
              <div className="px-4 ">
                <Dashboard />
                <Concepts />
                <UiComponents />
                <Authentication />
                <Guide />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="w-full h-screen flex flex-col">
          {/* Header */}
          <Header adminPanel={adminPanel} setAdminPanel={setAdminPanel} />

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <KpiSummary />
            <CampaignsTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
