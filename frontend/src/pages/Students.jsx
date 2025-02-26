import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Student() {
  const [FullName, SetFullName] = useState("");
  const [Address, setAddress] = useState("");
  const [Gender, setGender] = useState("");
  const [Class, setClass] = useState("");
  const [Phone, setPhone] = useState("");

  const handleEmpty = () => {
    SetFullName("");
    setAddress("");
    setGender("");
    setClass("");
    setPhone("");
  };

  const navigate = useNavigate();

  const HandleInsert = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/create/student", {
        fullName: FullName,
        Adress: Address,
        Gender: Gender,
        Class: Class,
        Phone: Phone,
      })
      .then(() => {
        alert("Data inserted successfully");
        handleEmpty(e);
        navigate("/StudentList");
      })
      .catch((error) => {
        console.log("There is an error: ", error);
      });
  };

  return (
    <div className="w-screen">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md ml-[32%] mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 ">
          Student Information
        </h2>
        <form className="space-y-6">
          <div className="grid gap-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                value={FullName}
                onChange={(e) => SetFullName(e.target.value)}
                type="text"
                placeholder="Enter full name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Address</label>
              <input
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Enter address"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Gender</label>
              <input
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
                type="text"
                placeholder="Enter gender"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Class</label>
              <input
                value={Class}
                onChange={(e) => setClass(e.target.value)}
                type="text"
                placeholder="Enter class"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="Enter phone number"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>
          <button
            onClick={HandleInsert}
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 hover:shadow-lg transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Student;
