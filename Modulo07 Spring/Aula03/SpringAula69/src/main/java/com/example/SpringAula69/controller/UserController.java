package com.example.SpringAula69.controller;

import com.example.SpringAula69.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.SpringAula69.dto.UserDTO;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public List<UserDTO> getAllUser() {
        
        return userService.getAllUsers();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable int id){
        UserDTO userDTO = userService.getUserById(id);
        
        return userDTO != null ? ResponseEntity.ok(userDTO) : ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDTO){
        return userService.createUser(userDTO);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable int id, @RequestBody UserDTO userDTO){
        UserDTO updateUser = userService.updateUser(id, userDTO);
        
        return updateUser != null ? ResponseEntity.ok(updateUser) : ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") int id){
        userService.deleteUser(id);
        
        return ResponseEntity.noContent().build();
    }
}
