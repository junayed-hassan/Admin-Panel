import { IoMdAnalytics } from "react-icons/io";
import { SiGooglemarketingplatform } from "react-icons/si";
import { GoProjectTemplate } from "react-icons/go";
import { SiAwssecretsmanager } from "react-icons/si";

function Dashboard() {
  return (
    <div className="text-gray-500 mb-4">
      <h3 className="uppercase font-medium pt-4">Dashboard</h3>
      <ul>
        <li className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700">
          <span className="text-xl pt-2"><SiAwssecretsmanager /></span>
          <p className="w-36">Management</p>
        </li>
        <li className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700">
          <span className="text-xl pt-2"><GoProjectTemplate /></span>
          <p className="w-36">Project</p>
        </li>
        <li className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700">
          <span className="text-xl pt-2"><SiGooglemarketingplatform /></span>
          <p className="w-36">Marketing</p>
        </li>
        <li className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700">
          <span className="text-xl pt-2"><IoMdAnalytics /></span>
          <p className="w-36">Analytic</p>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
