import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function EditStudent() {



  let navigate= useNavigate();

  const {id}=useParams()

    const[student,setStudent] = useState({
        firstName:"",
        lastName:"",
        address:"",
        degreeProgram:""

    })

    const{firstName,lastName,address,degreeProgram}=student;

    const onInputChange=(e)=>{

      setStudent({...student, [e.target.name]:e.target.value})


    };

    useEffect(()=>{
        loadStudent();
    },[]  );

    const onSubmit=async(e)=>{
      e.preventDefault();
      await axios.put(`http://localhost:8070/student/${id}`,student);
      navigate=("/");

    }s

    const loadStudent =async()=>{
        
        const result=await axios.get(`http://localhost:8070/student/${id}`)
        setStudent (result.data);
      
    }
    return (
    <div className='container'>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              <h2 className="text-center m-4 ">Edit Student</h2>
              <form onSubmit={(e)=>onSubmit(e)}>
              <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                      type={"text"}
                      className="form-control"
                      placeholder="Enter the first name"
                      name="firstName"
                      value={firstName}
                      onChange={(e)=>onInputChange(e)}/>
              </div>
              <div className="mb-3">
                  <label htmlFor="lastName" className="form-label ">
                    Last Name
                  </label>
                  <input 
                      type={"text"}
                      className="form-control"
                      placeholder="Enter the last name"
                      name="lastName"
                      value={lastName}
                      onChange={(e)=>onInputChange(e)}>
                  </input>
              </div>
              <div className="mb-3">
                  <label htmlFor="address" className="form-label text-left">
                    Address
                  </label>
                  <input 
                      type={"text"}
                      className="form-control"        
                      placeholder="Enter the address"
                      name="address"
                      value={address}
                      onChange={(e)=>onInputChange(e)}>
                  </input>
              </div>
              <div className="mb-3">
                  <label htmlFor="degreeProgram" className="form-label text-left">
                    Degree Program
                  </label>
                  <input 
                      type={"text"}
                      className="form-control"
                      placeholder="Enter the degree program"
                      name="degreeProgram"
                      value={degreeProgram}
                      onChange={(e)=>onInputChange(e)}>
                  </input>
              </div>
                <button type="submit" className="btn btn-outline-primary" >Register</button>
                <Link  className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
              </div>
              </div>
        </div>
    
  )
}
