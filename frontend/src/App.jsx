import React from "react";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students";
import StudentList from "./components/StudentList";
import UpdateStudent from "./pages/UpdateStudent";
import SideNavbar from "./components/SideNav";
import TeacherDisplay from "./components/TeacherDisplay";
import Teachers from "./pages/Teachers";
import UpdateTeacher from "./pages/UpdateTeacher";
import AddDocument from "./Document/AddDocument";
function App() {
  return (
    <div>
      <SideNavbar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Student" element={<Students />} />
          <Route path="/teachers" element={<TeacherDisplay />} />
          <Route path="/StudentList" element={<StudentList />} />
          <Route path="/UpdateStudent/:id" element={<UpdateStudent />} />
          <Route path="/Teacher" element={<Teachers />} />
          <Route path="/updateTeacher/:id" element={<UpdateTeacher />} />
          <Route path="/AddDocument" element={<AddDocument />} />
        </Routes>
      </SideNavbar>
    </div>
  );
}

export default App;
