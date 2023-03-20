import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';




    
export default function Home() {

    const [students,setStudents] = useState([""]);

    const {id}=useParams()
    
    useEffect(()=>{
      console.log("Kazz_Abey");
        loadStudents();
        
    },[]);

    const loadStudents=async()=>{
        const result=await axios.get("http://localhost:8070/students");
        setStudents(result.data);
    };

    const deleteStudent=async (id)=>{
      await axios.delete(`http://localhost:8070/student/${id}`)
      loadStudents()
    }
    
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table table-success table-striped border shadow">
        <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Address</th>
      <th scope="col">Degree</th>
    </tr>
  </thead>

  <tbody>
  {
    students.map((student, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.address}</td>
      <td>{student.degreeProgram}</td>
      <td>
        <button className="btn btn-primary mx-2">View</button>
        <Link className="btn btn-outline-primary mx-2" 
        to={`/editstudent/${student.id}`}
        >Edit</Link>
        <button className="btn btn-danger mx-2"
        onClick={()=> deleteStudent(student.id)}
        >Remove</button>
      </td>

    </tr>
  ))}
</tbody>

</table>
        </div>
        </div>
  )
}
