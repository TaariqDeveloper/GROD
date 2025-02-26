import { useState } from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaBox,
  FaUser,
  FaCalendarCheck,
  FaInfoCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SideNavbar({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="flex h-screen bg-gray-100 ">
        <div
          className={`${
            isOpen ? "w-64" : "w-16"
          } bg-green-500 text-white transition-all duration-300 p-5 relative`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars size={24} />
          </button>
          <ul className="space-y-6 mt-12">
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-green-600 p-2 rounded-md">
              <FaTachometerAlt />
              <NavLink to="/StudentList">
                {" "}
                {isOpen && <span>Student</span>}
              </NavLink>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-green-600 p-2 rounded-md">
              <FaBox />
              <NavLink to="/teachers">
                {" "}
                {isOpen && <span>Teachers</span>}
              </NavLink>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-green-600 p-2 rounded-md">
              <FaUser />
              {isOpen && <span>Documents</span>}
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-green-600 p-2 rounded-md">
              <FaUser />
              {isOpen && <span>Parent</span>}
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-green-600 p-2 rounded-md">
              <FaCalendarCheck />
              {isOpen && <span>Attendance</span>}
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-green-600 p-2 rounded-md">
              <FaInfoCircle />
              {isOpen && <span>Help</span>}
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default SideNavbar;
