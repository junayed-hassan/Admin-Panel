import { IoDocumentTextSharp, IoCodeSlashSharp } from "react-icons/io5";
import { FaShareNodes } from "react-icons/fa6";
import { GiDiscGolfBag } from "react-icons/gi";

function Guide() {
  return (
    <div className="text-gray-500 mb-4">
      <h3 className="uppercase font-medium pt-4">Guide</h3>
      <ul>
        <li className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700">
          <span className="text-xl pt-2"><IoDocumentTextSharp /></span>
          <p className="w-36">Documentation</p>
        </li>
        <li className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700">
          <span className="text-xl pt-2"><FaShareNodes /></span>
          <p className="w-36">Shared Component</p>
        </li>
        <li className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700">
          <span className="text-xl pt-2"><GiDiscGolfBag /></span>
          <p className="w-36">Utilities</p>
        </li>
        <li className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700">
          <span className="text-xl pt-2"><IoCodeSlashSharp /></span>
          <p className="w-36">Changelog</p>
        </li>
      </ul>
    </div>
  );
}

export default Guide;
