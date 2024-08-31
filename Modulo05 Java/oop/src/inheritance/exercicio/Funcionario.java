package inheritance.exercicio;

import java.util.ArrayList;

public class Funcionario {
    
    String nome;
    int id;
    private static int contadorId = 1;
    double salario;
    String dataAdmissao;
    String cargo;
    static  ArrayList<Funcionario> listaFuncionarios  = new ArrayList<>();
    
    public Funcionario(String nome, double salario, String dataAdmissao, String cargo) {
        this.nome = nome;
        this.id = contadorId++;
        this.salario = salario;
        this.dataAdmissao = dataAdmissao;
        this.cargo = cargo;
        listaFuncionarios.add(this);
    }
    public void aumentarSalario(double percentual) {
        this.salario += this.salario * (percentual / 100);
    }
    public double calcularFolhaPagamento() {
        return this.salario;
    }
    public void exibirInformacoes() {
        System.out.println("Nome: " + nome);
        System.out.println("ID: " + id);
        System.out.println("Cargo:" + cargo);
        System.out.println("Salário: " + salario);
        System.out.println("Data de Admissão: " + dataAdmissao);
    }
    public static ArrayList<Funcionario> getListaFuncionarios() {
        return listaFuncionarios;
    }
}
