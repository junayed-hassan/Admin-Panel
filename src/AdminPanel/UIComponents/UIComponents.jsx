import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaFileWaveform, FaDisplay } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaCreativeCommonsSampling } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { LuNavigation2Off } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";

const sectionsData = [
  {
    key: "common",
    icon: <FaCreativeCommonsSampling />,
    title: "Common",
    items: ["Button", "Grid", "Typography", "Icons"]
  },
  {
    key: "feedback",
    icon: <VscFeedback />,
    title: "Feedback",
    items: ["Alert", "Dialog", "Drawer", "Progress", "Skeleton", "Spinner", "Toast"]
  },
  {
    key: "data",
    icon: <FaDisplay />,
    title: "Data Display",
    items: ["Avatar", "Badge", "Calendar", "Cards", "Table", "Tag", "Timeline", "Tooltip" ]
  },
  {
    key: "forms",
    icon: <FaFileWaveform />,
    title: "Forms",
    items: ["Checkbox", "Date Picker", "Form Control", "Input", "Input Group", "Radio", "Segment", "Select", "Switcher", "Time Input", "Upload"]
  },
  {
    key: "navigation",
    icon: <LuNavigation2Off />,
    title: "Navigation",
    items: ["Dropdown", "Menu", "Pagination", "Steps", "Tabs"]
  },
  {
    key: "graph",
    icon: <BsGraphUpArrow />,
    title: "Graph",
    items: ["Charts", "Maps"]
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


function UiComponents() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="text-gray-500">
      <h3 className="uppercase font-medium pt-4">UiComponents</h3>
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
    </div>
  );
}

export default UiComponents
  
  