package com.example.SpringAula69.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="usuarios")

public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUsuario;
    @Column(nullable = false)
    private String login;
    @Column(nullable = false)
    private String senha;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String funcao;
}
