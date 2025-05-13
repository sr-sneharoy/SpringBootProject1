import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';
const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ employee, setEmployee ] = useState({
    id: id,
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {

    const fetchData = async () => {
      try {

        const response = await EmployeeService.getEmployeeById(employee.id)
        setEmployee(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }

    if(id) fetchData();
  }
  ,[id]);

    const updateEmployee = async (e) => {
      e.preventDefault();
      try {
        await EmployeeService.updateEmployee(employee, id);
        navigate('/');
      } catch (err) {
        console.error("Error updating employee:", err);
      }
    }

  return (
    <div className="flex flex-col w-[400px] bg-green-300 px-8 pt-4 pb-6 rounded-lg mx-auto gap-4 my-5">
      <h1 className="font-semibold text-2xl">Update Employee</h1>
      <input
        onChange={(e) => handleChange(e)}
        value={employee.name}
        className="rounded outline-none px-4 py-2"
        name="name"
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={employee.email}
        className="rounded outline-none px-4 py-2"
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={employee.phone}
        className="rounded outline-none px-4 py-2"
        name="phone"
        type="tel"
        placeholder="Contact Number"
      />
      <div className="flex w-full gap-6 justify-center">
        <button 
        onClick={updateEmployee}
        className="px-4 py-2 bg-green-600 rounded-lg font-semibold text-white">
          Update
        </button>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-red-600 rounded-lg font-semibold text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateEmployee;