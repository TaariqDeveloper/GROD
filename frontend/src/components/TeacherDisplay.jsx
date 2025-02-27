import axios from "axios";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function TeacherDisplay() {
  const [data, setData] = useState([]);
  const [page, setpage] = useState(0);

  const handleNext = () => {
    setpage(page + 1);
  };
  const handlePrev = () => {
    if (page > 0) {
      setpage(page - 1);
    }
  };

  const HandleGetData = () => {
    axios
      .get(`http://localhost:4000/read/teacher?page=${page}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("There is an error: ", error);
      });
  };

  useEffect(() => {
    HandleGetData();
  }, [page]);

  const RemoveData = (_id) => {
    axios
      .delete(`http://localhost:4000/delete/Teacher/${_id}`)
      .then(() => {
        alert("Deleted successfully");
        HandleGetData(); // Refresh data after deletion
      })
      .catch((error) => {
        alert("Error deleting item: " + error);
      });
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 pl-[250px] p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Teacher List
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <NavLink to="/Teacher">
            <button className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition">
              <FaPlusCircle size={18} />
              <span>Add Teacher</span>
            </button>
          </NavLink>

          <div className="relative w-full md:w-1/3 mt-3 md:mt-0">
            <input
              type="search"
              placeholder="Search..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <svg
              className="absolute left-3 top-3 text-gray-500 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"
              />
            </svg>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">FullName</th>
                <th className="py-3 px-4 text-left">SchoolName</th>
                <th className="py-3 px-4 text-left">JobTitle</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Gender</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item._id}
                  className={`border-b hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4">{item.Id}</td>
                  <td className="py-3 px-4">{item.FullName}</td>
                  <td className="py-3 px-4">{item.SchoolName}</td>
                  <td className="py-3 px-4">{item.JopTitle}</td>
                  <td className="py-3 px-4">{item.Email}</td>
                  <td className="py-3 px-4">{item.Phone}</td>
                  <td className="py-3 px-4">{item.Gender}</td>
                  <td className="py-3 px-4 flex justify-center space-x-3">
                    <NavLink
                      to={`/updateTeacher/${item._id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit size={20} />
                    </NavLink>
                    <button
                      onClick={() => RemoveData(item._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div class="flex space-x-2 p-4">
        <button
          onClick={handlePrev}
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Brev
        </button>
        <button
          onClick={handleNext}
          class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TeacherDisplay;
