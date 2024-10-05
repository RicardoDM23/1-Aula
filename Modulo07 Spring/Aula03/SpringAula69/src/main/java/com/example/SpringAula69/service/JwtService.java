package com.example.SpringAula69.service;

import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
    @Value("${jwt.secret}")
    private String secretKey;
    
    public String extractUserName(String token){
         return extractClain(token, Claims::getSubject);
    }
}
