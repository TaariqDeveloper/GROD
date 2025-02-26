import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Teachers() {
  const [ID, setID] = useState("");
  const [FullName, setFullName] = useState("");
  const [SchoolName, setSchoolName] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleEmpty = () => {
    setID("");
    setFullName("");
    setSchoolName("");
    setJobTitle("");
    setEmail("");
    setPhone("");
    setGender("");
  };

  const handleInsert = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/create/teacher", {
        Id: ID,
        FullName: FullName,
        SchoolName: SchoolName,
        JopTitle: JobTitle,
        Email: Email,
        Phone: Phone,
        Gender: Gender,
      })
      .then(() => {
        alert("Teacher added successfully!");
        handleEmpty();
        navigate("/teachers");
      })
      .catch((error) => {
        console.log("Error inserting data: ", error);
      });
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 pl-[250px] flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[800px]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Teacher
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium">ID</label>
            <input
              value={ID}
              onChange={(e) => setID(e.target.value)}
              type="Number"
              placeholder="Enter Your ID"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Enter full name"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              School Name
            </label>
            <input
              value={SchoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              type="text"
              placeholder="Enter school name"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Job Title</label>
            <input
              value={JobTitle}
              onChange={(e) => setJobTitle(e.target.value)} // Make sure this is set correctly
              type="text"
              placeholder="Enter job title"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Enter phone number"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Gender</label>
            <input
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
              type="text"
              placeholder="Enter gender"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <button
            onClick={handleInsert}
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Teachers;
