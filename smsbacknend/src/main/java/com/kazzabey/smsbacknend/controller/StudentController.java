package com.kazzabey.smsbacknend.controller;

import com.kazzabey.smsbacknend.exeption.UserNotFoundException;
import com.kazzabey.smsbacknend.model.Student;
import com.kazzabey.smsbacknend.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentRepo studentRepo;

    @PostMapping("/student")
    Student newStudent(@RequestBody Student newStudent){
        return studentRepo.save(newStudent);
    }

    @GetMapping("/students")
    List<Student> getStudents(){
        return studentRepo.findAll();
    }

    @GetMapping("/student/{id}")
    Student getUserById(@PathVariable Long id){
        return studentRepo.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/student/{id}")
    Student update(@RequestBody Student newStudent, @PathVariable Long id){
        return studentRepo.findById(id)
                .map(student -> {
                    student.setFirstName(newStudent.getFirstName());
                    student.setLastName(newStudent.getLastName());
                    student.setAddress(newStudent.getAddress());
                    student.setDegreeProgram(newStudent.getDegreeProgram());
                    return studentRepo.save(student);
                }).orElseThrow(()->new UserNotFoundException(id));
    }
    @DeleteMapping("/student/{id}")
    String deleteStudent(@PathVariable Long id){
        if(!studentRepo.existsById(id)){
            throw new UserNotFoundException(id);
        }
        studentRepo.deleteById(id);
        return "Student with id "+id+ "has been deleted successfully"; 
    }

}
