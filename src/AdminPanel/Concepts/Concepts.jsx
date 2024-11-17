import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaStarOfLife, FaCalendarDays, FaRocketchat } from "react-icons/fa6";
import { GoDotFill, GoProjectTemplate } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { MdLiveHelp } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaFileArchive, FaRegUser, FaBox} from "react-icons/fa"; 

const sectionsData = [
  {
    key: "signIn",
    icon: <FaStarOfLife />,
    title: "Al",
    items: ["Chat", "Image"]
  },
  {
    key: "projects",
    icon: <GoProjectTemplate className="text-xl" />,
    title: "Projects",
    items: ["Scrum Board", "List", "Details", "Tasks", "Issue"]
  },
  {
    key: "products",
    icon: <FaBox />,
    title: "Products",
    items: ["List", "Edit", "Create" ]
  },
  {
    key: "customer",
    icon: <FaRegUser className="text-xl" />,
    title: "Customer",
    items: ["List", "Edit", "Create", "Details"]
  },
  {
    key: "orders",
    icon: <BsCart3 className="text-xl" />,
    title: "Orders",
    items: ["List", "Edit", "Create", "Details"]
  },
  {
    key: "account",
    icon: <RiAccountPinBoxFill className="text-xl" />,
    title: "Account",
    items: ["Settings", "Activity log", "Roles & Permissions", "Pricing"]
  },
  {
    key: "help",
    icon: <MdLiveHelp className="text-xl" />,
    title: "Help Center",
    items: ["Support Hub", "Article", "Edit Article", "Manage Article"]
  }
];

function CollapsibleSection({ section, isOpen, toggle }) {
  return (
    <ul>
      <div
        onClick={() => toggle(section.key)}
        className="flex items-center gap-3 py-3 font-medium cursor-pointer"
      >
        {section.icon}
        <p className="w-40">{section.title}</p>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && (
        <div className="ml-2 animate-fadeIn">
          {section.items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 py-1.5">
              <GoDotFill /> {item}
            </div>
          ))}
        </div>
      )}
    </ul>
  );
}


function Concepts() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="text-gray-500">
      <h3 className="uppercase font-medium pt-4">Concepts</h3>
      <div>
        {sectionsData.map((section) => (
          <CollapsibleSection
            key={section.key}
            section={section}
            isOpen={openSections[section.key]}
            toggle={toggleSection}
          />
        ))}
      </div>

      {/* Static Links */}
      <div className="text-gray-500 mb-4">
        <ul>
          <li className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700">
            <FaCalendarDays className="text-xl pt-1" />
            <p className="w-36">Calendar</p>
          </li>
          <li className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700">
            <FaFileArchive className="text-xl pt-1" />
            <p className="w-36">File Manager</p>
          </li>
          <li className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700">
            <IoIosMail className="text-2xl pt-1" />
            <p className="w-36">Mail</p>
          </li>
          <li className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700">
            <FaRocketchat className="text-xl pt-1" />
            <p className="w-36">Chat</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Concepts;
