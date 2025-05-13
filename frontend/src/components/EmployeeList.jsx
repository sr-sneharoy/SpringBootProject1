import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';

const EmployeeList = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getAllEmployees();
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const deleteEmployee = async (e, id) => {
    e.preventDefault();
    try {
      await EmployeeService.deleteEmployee(id);
      setEmployee(employee.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }

    // EmployeeService.deleteEmployee(id)
    // .then(() => {
    //   if(employee)
    //   setEmployee((prevElement) => {
    //     return prevElement.filter((emp) => emp.id !== id);
    //   });
    // });
  }

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/updateEmployee/${id}`);
  }

  const navigate = useNavigate();
  return (
    <div>
      <div className="min-w-[600px] m-4 p-4 rounded bg-slate-700">
        <div>
          <button 
          onClick={() => navigate("/addEmployee")}
          className="bg-blue-800 text-white rounded font-semibold py-2 px-10 cursor-pointer">
            Add Employee
          </button>
        </div>
        <div>
          <table className="shadow">
            <thead className="bg-slate-800 text-white">
              <th className="px-4 py-2 uppercase tracking-wide">Name</th>
              <th className="px-4 py-2 uppercase tracking-wide">Phone</th>
              <th className="px-4 py-2 uppercase tracking-wide">Email</th>
              <th className="px-4 py-2 uppercase tracking-wide">Action</th>
            </thead>
            {!loading && (
              <tbody className="text-white font-semibold bg-slate-500">
              {employee.map((employee) => ( 
              <tr key={employee.id} className="hover:bg-slate-300 hover:text-black">
                <td className="text-left px-4 py-2 whitespace-nowrap">{employee.name}</td>
                <td className="text-left px-4 py-2 whitespace-nowrap">
                  {employee.phone}
                </td>
                <td className="text-left px-4 py-2 whitespace-nowrap">
                  {employee.email}
                </td>
                <td className="text-left px-4 py-2 whitespace-nowrap flex gap-2">
                  <a
                  onClick={(e) => editEmployee(e, employee.id)}
                   className="hover:text-blue-700" href="/">
                    Edit
                  </a>
                  <a 
                  onClick={(e) => deleteEmployee(e, employee.id)}
                  className="hover:text-red-700" href="/">
                    Delete
                  </a>
                </td>
              </tr>
              ))}
            </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;