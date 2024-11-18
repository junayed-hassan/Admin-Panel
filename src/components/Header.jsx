import { TbAlignJustified } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { useState } from "react";

import imgI from "./images/i.png";
import imgJ from "./images/j.png";
import imgR from "./images/r.png";
import imgU from "./images/u.png";
import SearchModal from "./SearchModal ";
import ProfileDropdown from "./ProfileDropdown";

function Header({setAdminPanel}) {

  // Languages list
  const languages = [
    { name: "Iran", code: "US", image: imgI },
    { name: "Ukraine", code: "CN", image: imgJ },
    { name: "Russia", code: "ES", image: imgR },
    { name: "United States", code: "AR", image: imgU },
  ];

  // State management
  const [langOpen, setLangOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]); // Default language set
  const [isModalOpen, setModalOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      name: "Jeremiah Minsk",
      message: "mentioned you in a comment.",
      time: "2 minutes ago",
    },
    {
      id: 2,
      name: "Max Alexander",
      message: "invited you to a new project.",
      time: "10 minutes ago",
    },
    {
      id: 3,
      name: "",
      message: "Please submit your daily report.",
      time: "3 hours ago",
    },
  ];

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      {/* Left Icons */}
      <div className="flex gap-5 px-3 text-3xl items-center">
        <TbAlignJustified onClick={() => setAdminPanel((prev) => !prev)} />
        <FaSearch  onClick={() => setModalOpen(true)} className="text-2xl mt-1" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-7">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            className="text-xl flex items-center gap-2"
            onClick={() => setLangOpen(!langOpen)}
          >
            <img
              src={selectedLang.image}
              alt={selectedLang.name}
              className="w-6 h-6 rounded-xl"
            />
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-10">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setSelectedLang(lang);
                    setLangOpen(false);
                  }}
                >
                  <img src={lang.image} alt={lang.name} className="w-5 h-5 rounded-xl" />
                  <span>{lang.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="text-xl"
          >
            <BsBell />
          </button>
          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md p-4 z-10">
              <h3 className="font-bold mb-2">Notifications</h3>
              {notifications.map((notif) => (
                <div key={notif.id} className="flex items-start gap-2 mb-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold">{notif.name}</span>{" "}
                      {notif.message}
                    </p>
                    <p className="text-xs text-gray-500">{notif.time}</p>
                  </div>
                </div>
              ))}
              <button onClick={() => setNotificationOpen(!notificationOpen)} className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md">
                View All Activity
              </button>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <ProfileDropdown />
      </div>
      {isModalOpen && <SearchModal setModalOpen={setModalOpen} />}
    </header>
  );
}

export default Header;
