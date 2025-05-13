package com.roy.em_project;

import java.util.ArrayList;


public interface EmployeeService {
    public String createEmployee(Employee emp);
    public ArrayList<Employee> readEmployees();
    public Employee readEmployee(Long id);
    public boolean deleteEmployee(Long id);
    public String updateEmployee(Long id, Employee emp);
} 