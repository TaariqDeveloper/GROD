import axios from "axios";
import React, { useEffect, useState } from "react";

function Boxes() {
  const [getAllTeachers, setTeacher] = useState([]);
  const HandleAllStudents = () => {
    axios
      .get("http://localhost:4000/totalteacher/Teacher")
      .then((res) => {
        setTeacher(res.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    HandleAllStudents();
  }, []);
  return (
    <div>
      <div className="flex-1 p-10">
        <div className="flex justify-around gap-10">
          <div className=" w-[400px] bg-orange-400 h-[300px] text-black p-6 text-center rounded-md shadow-md font-semibold text-lg">
            <h1 className="text-5xl pt-5 text-center text-white">
              {getAllTeachers > 0 ? getAllTeachers : 0}
            </h1>
            <h1 className="text-5xl pt-5 text-center text-white">Teachers</h1>
          </div>
          <div className=" w-[400px] bg-blue-400 text-black p-6 text-center rounded-md shadow-md font-semibold text-lg">
            <h1 className="text-5xl pt-5 text-center text-white">0</h1>
            <h1 className="text-5xl pt-5 text-center text-white">Students</h1>
          </div>
          <div className=" w-[400px] bg-yellow-400 text-black p-6 text-center rounded-md shadow-md font-semibold text-lg">
            <h1 className="text-5xl pt-5 text-center text-white">0</h1>
            <h1 className="text-5xl pt-5 text-center text-white">Salary</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
