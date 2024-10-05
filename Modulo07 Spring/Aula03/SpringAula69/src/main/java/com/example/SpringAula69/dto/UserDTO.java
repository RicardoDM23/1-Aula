package com.example.SpringAula69.dto;

import lombok.Data;

@Data
public class UserDTO {
    
    private int id;
    private String username;
    private String email;
    private String role;
    private String password;
}
