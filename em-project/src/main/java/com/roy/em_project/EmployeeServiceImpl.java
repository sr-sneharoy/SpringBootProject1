package com.roy.em_project;

import java.util.ArrayList;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepo employeeRepo;

    public EmployeeServiceImpl(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    
    @Override
    public String createEmployee(Employee emp) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(emp, employeeEntity);  // Copy properties from Employee to EmployeeEntity
        // BeanUtils is a utility class that provides methods for copying properties between beans
        employeeRepo.save(employeeEntity);
        return "Saved Successfully";
    }

    @Override
    public Employee readEmployee(Long id) {
        EmployeeEntity existEmp = employeeRepo.findById(id).orElse(null);
        Employee emp = new Employee();
        BeanUtils.copyProperties(existEmp, emp);

        return emp;
    }

    @Override
    public ArrayList<Employee> readEmployees() {
        ArrayList<EmployeeEntity> empList = (ArrayList<EmployeeEntity>) employeeRepo.findAll();
        ArrayList<Employee> employees = new ArrayList<>();
        for (EmployeeEntity employeeEntity : empList) {
            Employee employee = new Employee();
            BeanUtils.copyProperties(employeeEntity, employee);
            employees.add(employee);
        }
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        // employees.removeIf(employee -> employee.getId().equals(id));
        employeeRepo.deleteById(id);
        return true;
    }

    @Override
    public String updateEmployee(Long id, Employee emp) {
        EmployeeEntity existEmp = employeeRepo.findById(id).orElse(null);
        if (existEmp == null) {
            return "Employee not found";
        }
        // Update the existing employee's properties with the new values    
        existEmp.setName(emp.getName());
        existEmp.setEmail(emp.getEmail());
        existEmp.setPhone(emp.getPhone());
        
        employeeRepo.save(existEmp);
        return "Update Successfully";
    }




}
