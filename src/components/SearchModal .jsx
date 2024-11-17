import React from "react";

const SearchModal = ({setModalOpen}) => {

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <button onClick={() => setModalOpen(false)} className="ml-2 text-xl font-bold rounded-md text-gray-500 border-2 px-2 py-1 hover:bg-lime-400 hover:text-yellow-50 ">Esc</button>
          </div>
        </div>
        <div className="px-4 pb-4">
          <h2 className="text-gray-700 text-lg font-medium mb-2">Recommended</h2>
          <ul>
            {[
              { name: "Documentation", icon: "📄" },
              { name: "Changelog", icon: "💻" },
              { name: "Button", icon: "🖱️" },
            ].map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
                <span className="ml-auto text-gray-400">{">"}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
