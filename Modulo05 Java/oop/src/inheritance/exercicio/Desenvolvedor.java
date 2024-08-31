package inheritance.exercicio;

import java.util.ArrayList;

public class Desenvolvedor extends Funcionario{
    
    String nivel;
    ArrayList<String> linguagens;
    ArrayList<String> projetos;
    
    public Desenvolvedor(String nome, double salario, String dataAdmissao, String nivel) {
        super(nome, salario, dataAdmissao, ("Desenvolvedor "+nivel));
        this.nivel = nivel;
        this.linguagens = linguagens;
        this.projetos = projetos;
    }
    
    void adicionarLinguagem(String linguagem){
        this.linguagens.add(linguagem);
        System.out.println(linguagem + " Adicionada!");
    }
    void removerLinguagem(String linguagem){
        this.linguagens.remove(linguagem);
        System.out.println(linguagem + " Removida.");
    }
    void exibirLinguagens() {
        System.out.println("Linguagens conhecidas:");
        for (String linguagem : linguagens) {
            System.out.println("- " + linguagem);
        }
    }
    void adicionarProjeto(String projeto){
        this.projetos.add(projeto);
        System.out.println("Projeto " + projeto + " Adicionado!");
    }
    void removerrProjeto(String projeto){
        this.projetos.remove(projeto);
        System.out.println("Projeto " + projeto + " Removido!");
    }
    void exibirProjetos() {
        System.out.println("Projetos em andamento:");
        for (String projeto : projetos) {
            System.out.println("- " + projeto);
        }
    }
    
    @Override
    public void exibirInformacoes() {
        System.out.println("Nome: " + nome);
        System.out.println("ID: " + id);
        System.out.println("Salário: " + salario);
        System.out.println("Data de Admissão: " + dataAdmissao);
        
        System.out.println("Nível: " + nivel);
        exibirLinguagens();
        exibirProjetos();
    }
    
}
