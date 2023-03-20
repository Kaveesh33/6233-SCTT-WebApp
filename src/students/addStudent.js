import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


export default function AddStudent() {

  let navgate= useNavigate()

    const[student,setStudent] = useState({
        firstName:"",
        lastName:"",
        address:"",
        degreeProgram:""

    })

    const{firstName,lastName,address,degreeProgram}=student

    const onInputChange=(e)=>{

      setStudent({...student, [e.target.name]:e.target.value})



    }

    const onSubmit=async(e)=>{
      e.preventDefault();
      await axios.post("http://localhost:8070/student",student)
      navgate=("/")

    }
    return (
    <div className='container'>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              <h2 className="text-center m-4 ">Register New Student</h2>
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
                <button type="submit" className="btn btn-outline-primary" to='/'>Register</button>
                <Link  className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
              </div>
              </div>
        </div>
    
  )
}
