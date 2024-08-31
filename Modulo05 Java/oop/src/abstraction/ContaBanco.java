package abstraction;

import java.util.ArrayList;

public class ContaBanco {
    private int numConta;
    private String titular;
    private double saldo;
    private ArrayList<String> historico;
    private static int contadorDeContas = 1000;
    
    
    public ContaBanco(String titular) {
        this.numConta = ++contadorDeContas;
        this.titular = titular;
        this.saldo = 0.0;
        this.historico = new ArrayList<>();
    }
    
    //metodos
    public void depositar(double valor){
        if (valor > 0){
            this.saldo += valor;
        } else {
            System.out.println("Valor invalido!");
        }
    }
    public void sacar(double valor){
        if(valor > 0 && this.saldo > valor){
            this.saldo -= valor;
            this.historico.add("Saque de R$"+valor+ " da Conta: "+this.numConta);
        }else if (this.saldo < valor){
            System.out.println("Valor informado é maior que o saldo da conta!");
        }
    }
    public double saldo(){
        return getSaldo();
    }
    public ArrayList extratoDeTransacoes(){
        return this.historico;
    }
    private void adicionarAoHistorico(String transacao) {
        this.historico.add(transacao);
    }
    public void trasacao(ContaBanco contaOrigem, ContaBanco contaDestino, double valor){
        if(valor > 0 && contaOrigem.getSaldo() > valor){
            this.saldo -= valor;
            contaDestino.depositar(valor);
            String transacao = "Transferencia de R$" +valor+ " para a conta: "+contaDestino.getNumConta();
            this.historico.add(transacao);
            contaDestino.adicionarAoHistorico("Recebimento de R$"+valor+" da conta: "+contaOrigem.getNumConta());
        }else{
            System.out.println("Saldo insuficiente!");
        }
    
    }
    public int getNumConta() {
        return numConta;
    }
    public String getTitular() {
        return titular;
    }
    public void setTitular(String titular) {
        this.titular = titular;
    }
    private double getSaldo() {
        return saldo;
    }

}
