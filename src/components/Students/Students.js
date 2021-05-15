import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function Students() {
    const [students, setStudents] = useState([]);

    async function getStudents(){
        
        const studentRes = await axios.get("https://dtaylor6306-firstmern.herokuapp.com/student/");
        setStudents(studentRes.data);
    }

    useEffect(()=>{
        getStudents();
    }, []);

   return (
   <div className = "router-app" > 
       <StudentForm getStudents = {getStudents}/>
       <StudentList students = {students} />
   </div>
   )
};
export default Students;