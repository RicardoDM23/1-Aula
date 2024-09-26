package com.example.SpringAula69.controller;

import com.example.SpringAula69.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.SpringAula69.dto.UsuarioDTO;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UsuarioController {
    
    @Autowired
    private UsuarioService usuarioService;
    
    @GetMapping
    public List<UsuarioDTO> getAllUsuarios() {
        return usuarioService.getAllUsuarios();
    }
    @GetMapping("/{idUsuario}")
    public ResponseEntity<UsuarioDTO> getUserById(@PathVariable int idUsuario){
        UsuarioDTO usuarioDTO = usuarioService.getUserById(idUsuario);
        
        return usuarioDTO != null ? ResponseEntity.ok(usuarioDTO) : ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public UsuarioDTO createUsuario(@RequestBody UsuarioDTO usuarioDTO){
        return usuarioService.createUsuario(usuarioDTO);
    }
    
    @PutMapping("/{idUsuario}")
    public ResponseEntity<UsuarioDTO> updateUsuario(@PathVariable int idUsuario, @RequestBody UsuarioDTO usuarioDTO){
        UsuarioDTO updateUsuario = usuarioService.updateUsuario(idUsuario, usuarioDTO);
        
        return updateUsuario != null ? ResponseEntity.ok(updateUsuario) : ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{idUsuario}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable int idUsuario){
        usuarioService.deleteUsuario(idUsuario);
        
        return ResponseEntity.noContent().build();
    }
}
