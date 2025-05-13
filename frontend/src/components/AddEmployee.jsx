import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import EmployeeService from "../service/EmployeeService";
// import { useEffect } from "react";
const AddEmployee = () => {
    const [ employee, setEmployee ] = useState({
    id: '',
    name: '',
    phone: '',
    email: '',
  });

    const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };


  const saveEmployee = (e) => {
    e.preventDefault();
    if (employee.name === '' || employee.phone === '' || employee.email === '') {
      alert("Please fill all the fields");  
      return;
    }
    EmployeeService.saveEmployee(employee)
    .then((response) => {
      console.log(response.data);
      alert("Employee added successfully");
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
      alert("Error adding employee");
    });
  };


  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: '',
      name: '',
      phone: '',
      email: '',
    });
    }

    const navigate = useNavigate()
  return (
    <div className="text-black flex flex-col w-[400px] bg-green-200 px-8 pt-4 pb-6 rounded-lg mx-auto gap-4 my-5">
      <h1 className="font-semibold text-2xl">Add Employee</h1>
      <input
        onChange={(e) => handleChange(e)}
        value={employee.name}
        className="rounded outline-none hover:bg-green-300 focus:bg-green-400 px-4 py-2"
        name="name"
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={employee.email}
        className="rounded outline-none hover:bg-green-300 focus:bg-green-400 px-4 py-2"
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={employee.phone}
        className="rounded outline-none hover:bg-green-300 focus:bg-green-400 px-4 py-2"
        name="phone"
        type="tel"
        placeholder="Contact Number"
      />
      <div className="flex w-full gap-6 justify-center">
        <button 
        onClick={saveEmployee}
        className="cursor-pointer px-4 py-2 bg-green-600 rounded-lg font-semibold text-white">
          Save
        </button>
        <button
        onClick={reset}
          className="cursor-pointer px-4 py-2 bg-blue-600 rounded-lg font-semibold text-white"
        >
          Clear
        </button>
        <button
          onClick={() => navigate('/')}

          className="cursor-pointer px-4 py-2 bg-red-600 rounded-lg font-semibold text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default AddEmployee