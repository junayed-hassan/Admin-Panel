import { useState } from "react";
import { FaUser, FaCog, FaChartLine, FaSignOutAlt } from "react-icons/fa";

function ProfileDropdown() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Image Button */}
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => setProfileOpen(!profileOpen)}
      />

      {/* Profile Dropdown Menu */}
      {profileOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-20">
          {/* Profile Header */}
          <div className="flex items-center p-4 border-b">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3">
              <h2 className="font-semibold">Angelina Gotelli</h2>
              <p className="text-sm text-gray-500">admin-01@ecme.com</p>
            </div>
          </div>

          {/* Dropdown Links */}
          <ul className="p-2">
            <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
              <FaUser className="mr-2" /> Profile
            </li>
            <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
              <FaCog className="mr-2" /> Account Setting
            </li>
            <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
              <FaChartLine className="mr-2" /> Activity Log
            </li>
          </ul>

          {/* Sign Out Button */}
          <div className="border-t">
            <button className="w-full flex items-center justify-center p-3 hover:bg-gray-100">
              <FaSignOutAlt className="mr-2" /> Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
