package com.example.SpringAula69.repository;

import com.example.SpringAula69.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    
    //public Usuario findByEmail(String email);

}
