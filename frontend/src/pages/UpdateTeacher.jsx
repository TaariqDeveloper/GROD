import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateTeacher() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const handleGetData = () => {
    axios
      .get(`http://localhost:4000/read/teacher/${params.id}`)
      .then((res) => {
        setId(res.data.Id);
        setName(res.data.FullName);
        setSchool(res.data.SchoolName);
        setJobTitle(res.data.JopTitle);
        setEmail(res.data.Email);
        setPhone(res.data.Phone);
        setGender(res.data.Gender);
      })
      .catch((error) => {
        console.log("There is an error:", error);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/update/Teacher/${params.id}`, {
        Id: id,
        FullName: name,
        SchoolName: school,
        JopTitle: jobTitle,
        Email: email,
        Phone: phone,
        Gender: gender,
      })
      .then(() => {
        alert("Updated successfully!");
        navigate("/teachers");
      })
      .catch((error) => {
        console.log("There is an error:", error);
      });
  };

  useEffect(() => {
    handleGetData();
  }, [params.id]);

  return (
    <div className="w-full min-h-screen bg-gray-100 pl-[250px] flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[800px]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Update Teacher
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium">ID</label>
            <input
              value={id}
              readOnly
              type="number"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              type="text"
              placeholder="Enter school name"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Job Title</label>
            <input
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              type="text"
              placeholder="Enter job title"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
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
          <button
            onClick={handleUpdate}
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

export default UpdateTeacher;
