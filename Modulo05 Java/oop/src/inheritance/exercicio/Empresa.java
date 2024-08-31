package inheritance.exercicio;
import java.util.ArrayList;

public class Empresa {
    
    public static void main(String[] args) {
        Gerente gerente = new Gerente("Alice", 8000, "2022-01-10", "TI");
        Desenvolvedor dev1 = new Desenvolvedor("Bob", 5000, "2023-02-15", "Pleno");
        Desenvolvedor dev2 = new Desenvolvedor("Carol", 5500, "2023-03-10", "Sênior");
        Desenvolvedor dev3 = new Desenvolvedor("Dave", 4500, "2023-04-05", "Júnior");
        
        gerente.adicionarFuncionario(dev1);
        gerente.adicionarFuncionario(dev2);
        gerente.adicionarFuncionario(dev3);
        gerente.equipeAtual();
        
        ArrayList<Funcionario> funcionarios = Funcionario.getListaFuncionarios();
        
        System.out.println("Lista de Funcionários:");
        for (Funcionario func : funcionarios) {
            System.out.println("- " + func.nome + " (ID: " + func.id + ")"+ " (Cargo: " + func.cargo + ")");
        }
        
        calcularFolhaDePagamento(funcionarios);
    }
    
    public static void calcularFolhaDePagamento(ArrayList<Funcionario> funcionarios) {
        System.out.println("\nFolha de Pagamento:");
        for (Funcionario func : funcionarios) {
            double folha = func.calcularFolhaPagamento();
            System.out.println("- " + func.nome + " (Cargo: " + func.cargo + "): R$ " + folha);
        }
    }
}


//funcionario
// gerente // desenvolvedor
// Empresa calcula folha de pagamento dos funcionarios recebe array list de funcionario