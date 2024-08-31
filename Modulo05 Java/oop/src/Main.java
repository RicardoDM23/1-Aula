import abstraction.ContaBanco;
import abstraction.Livro;
import abstraction.Pessoa;

public class Main {
    public static void main(String[] args) {
        
//        Pessoa autorP = new Pessoa("Joao", 33);
//        Livro livro1 = new Livro("primeiro livro","qweasdqweasd", autorP, 123);
//        System.out.println(livro1.getTitulo() + " Autor: " + livro1.getAutor().getNome());
        
        ContaBanco contaUm = new ContaBanco("Joao");
        ContaBanco contaDois = new ContaBanco("Pedro");
        System.out.println("Contas criadas");
        System.out.println("        Saldo ContaUm "+ contaUm.saldo());
        System.out.println("        Saldo ContaDois "+ contaDois.saldo());
        
        System.out.println("Deposito de 1000 na ContaUm");
        contaUm.depositar(1000);
        System.out.println("        Saldo ContaUm "+ contaUm.saldo());
        System.out.println("        Saldo ContaDois "+ contaDois.saldo());
        
        System.out.println("Transferencia de ContaUm para ContaDois");
        contaUm.trasacao(contaUm, contaDois, 425);
        System.out.println("        Saldo ContaUm "+ contaUm.saldo());
        System.out.println("        Saldo ContaDois "+ contaDois.saldo());
        
        System.out.println("Saque de 200 da ContaDois");
        contaDois.sacar(200);
        System.out.println("        Saldo ContaUm "+ contaUm.saldo());
        System.out.println("        Saldo ContaDois "+ contaDois.saldo());
        
        System.out.println("Saque de 500 da ContaDois");
        contaDois.sacar(500);
        System.out.println("        Saldo ContaUm "+ contaUm.saldo());
        System.out.println("        Saldo ContaDois "+ contaDois.saldo());
        
        System.out.println("Historico da contaUm:");
        System.out.println(contaUm.extratoDeTransacoes());
        System.out.println("Historico da contaDois:");
        System.out.println(contaDois.extratoDeTransacoes());
    }
}
