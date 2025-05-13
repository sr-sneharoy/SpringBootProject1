package com.roy.em_project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo  extends JpaRepository<EmployeeEntity, Long> {
    // This interface will automatically provide CRUD operations for EmployeeEntity
    // No need to implement any methods here
    // Spring Data JPA will handle it for you
    
}
