package com.example.SpringAula69.service;

import com.example.SpringAula69.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.SpringAula69.dto.UsuarioDTO;
import com.example.SpringAula69.model.Usuario;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UsuarioService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    public List<UsuarioDTO> getAllUsuarios(){
        return usuarioRepository
                .findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public UsuarioDTO getUserById(int idUsuario){
        Optional<Usuario> usuario = usuarioRepository.findById(idUsuario);
        return usuario.map(this::convertToDTO).orElse(null);
    }
    
    public UsuarioDTO createUsuario(UsuarioDTO usuarioDTO){
        Usuario usuario = new Usuario();
        
        usuario.setLogin(usuarioDTO.getLogin());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setFuncao(usuarioDTO.getFuncao());
        usuarioRepository.save(usuario);
        
        return convertToDTO(usuario);
    }
    
    public UsuarioDTO updateUsuario(int idUsuario, UsuarioDTO usuarioDTO){
        Optional<Usuario> usuarioOptional = usuarioRepository.findById(idUsuario);
        
        if(usuarioOptional.isPresent()){
            Usuario usuario = usuarioOptional.get();
            
            usuario.setLogin(usuarioDTO.getLogin());
            usuario.setEmail(usuarioDTO.getEmail());
            usuario.setFuncao(usuarioDTO.getFuncao());
            
            usuarioRepository.save(usuario);
            
            return convertToDTO(usuario);
        }
        
        return null;
    }
    
    public void deleteUsuario(int idUsuario){
        usuarioRepository.deleteById(idUsuario);
    }
    
    private UsuarioDTO convertToDTO(Usuario usuario){
        UsuarioDTO usuarioDTO = new UsuarioDTO();
        
        usuarioDTO.setIdUsuario(usuario.getIdUsuario());
        usuarioDTO.setLogin(usuario.getLogin());
        usuarioDTO.setEmail(usuario.getEmail());
        usuarioDTO.setFuncao(usuario.getFuncao());
        
        return usuarioDTO;
    }
}