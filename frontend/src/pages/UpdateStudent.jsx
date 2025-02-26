import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateStudent() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [phone, setPhone] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const handleGetSingleData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/read/single/${params.id}`
      );
      if (res.data) {
        setFullName(res.data.fullName);
        setAddress(res.data.Address);
        setGender(res.data.Gender);
        setStudentClass(res.data.Class);
        setPhone(res.data.Phone);
      } else {
        console.error("No data received");
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/update/student/${params.id}`, {
        fullName,
        Address: address,
        Gender: gender,
        Class: studentClass,
        Phone: phone,
      });
      alert("Updated successfully!");
      navigate("/StudentList");
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  useEffect(() => {
    handleGetSingleData();
  }, [params.id]);

  return (
    <div className="min-h-screen   p-6 w-[200%] ml-20 ">
      <div className="bg-white p-8 rounded-xl shadow-lg ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Update Student
        </h2>
        <form className="space-y-5" onSubmit={handleUpdate}>
          {" "}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Enter full name"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Enter address"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Gender</label>
            <input
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              type="text"
              placeholder="Enter gender"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Class</label>
            <input
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              type="text"
              placeholder="Enter class"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Enter phone number"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent;
