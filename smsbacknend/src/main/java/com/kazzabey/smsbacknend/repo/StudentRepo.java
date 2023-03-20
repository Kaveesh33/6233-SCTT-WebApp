package com.kazzabey.smsbacknend.repo;

import com.kazzabey.smsbacknend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Long> {

}
