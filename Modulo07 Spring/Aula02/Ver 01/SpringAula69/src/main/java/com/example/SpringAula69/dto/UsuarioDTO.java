package com.example.SpringAula69.dto;

import lombok.Data;

@Data
public class UsuarioDTO {
    
    private int idUsuario;
    private String login;
    private String email;
    private String funcao;
}
