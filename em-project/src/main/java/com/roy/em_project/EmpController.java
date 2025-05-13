package com.roy.em_project;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
public class EmpController { 

    // Dependency Injection
    @Autowired
    EmployeeService employeeService;
    public EmpController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


    @GetMapping("employees")
    public ArrayList<Employee> getAllEmployees() {
        return employeeService.readEmployees();
    }

    @GetMapping("employees/{id}")
    public Employee getEmployeeByID(@PathVariable Long id) {
        return employeeService.readEmployee(id);
    }
    
    @PostMapping("employees")
    public String createEmployee(@RequestBody Employee emp) {
        // employees.add(emp);
        return employeeService.createEmployee(emp);
        // return "Saved Successfully";
    }

    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        if(employeeService.deleteEmployee(id))return "Deleted Successfully";
        return "Not Found";  
    }

    @PutMapping("employees/{id}")
    public String putMethodName(@PathVariable Long id, @RequestBody Employee emp) {
        return employeeService.updateEmployee(id, emp);
    }
    
    
}




// {
//   "id":"5",
//   "name": "kjjj",
//   "email": "roy@gmail.com",
//   "phone": "44421245313"
// }