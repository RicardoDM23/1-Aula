package inheritance.exercicio;

import java.util.ArrayList;

public class Gerente extends Funcionario{
    
    String departamento;
    ArrayList<Funcionario> equipe = new ArrayList<>();
    
    public Gerente(String nome, double salario, String dataAdmissao, String departamento) {
        super(nome, salario, dataAdmissao, ("Gerente de " + departamento));
        this.departamento = departamento;
        this.equipe = equipe;
    }
    
    void adicionarFuncionario(Funcionario funcionario){
        this.equipe.add(funcionario);
        System.out.println(funcionario + " adicionado a equipe");
    }
    void removerFuncionario(Funcionario funcionario){
        this.equipe.remove(funcionario);
        System.out.println(funcionario + " foi removido da equipe");
    }
    void equipeAtual(){
        System.out.println("Equipe de "+this.nome+": ");
        for (Funcionario funcionario : equipe) {
            System.out.println("- " + funcionario.nome + " (ID: " + funcionario.id + ")");
        }
    }
    @Override
    public void exibirInformacoes() {
        System.out.println("Nome: " + nome);
        System.out.println("ID: " + id);
        System.out.println("Salário: " + salario);
        System.out.println("Data de Admissão: " + dataAdmissao);

        System.out.println("Departamento: " + departamento);
        System.out.println("Equipe: ");
        for (Funcionario funcionario : equipe) {
            System.out.println("- " + funcionario.nome + " (ID: " + funcionario.id + ")");
        }
    }
    
}
