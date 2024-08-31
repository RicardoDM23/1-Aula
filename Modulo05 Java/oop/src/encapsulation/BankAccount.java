package encapsulation;

public class BankAccount {
    private String accountNumber;
    private double balance;
    
    public BankAccount(String accountNumber, double inicialBalance){
        this.accountNumber = accountNumber;
        this.balance = inicialBalance;
    }
    
    public String getAccountNumber() {
        return accountNumber;
    }
    public double getBalance() {
        return balance;
    }
//    public void setBalance(double balance) {
//        this.balance = balance;
//    }
//    public void setAccountNumber(String accountNumber) {
//        this.accountNumber = accountNumber;
//    }
    
    public void deposit(double amount){
        if(amount > 0){
            this.balance += amount;
        } else {
            throw new IllegalArgumentException("O valor do deposito deve ser positivo!");
        }
    }
    public void withdraw(double amount){
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
        } else if(amount > this.balance) {
            throw new IllegalArgumentException("A conta não possui o valor...");
        } else {
            throw new IllegalArgumentException("O valor de saque deve ser positivo!");
        }
    }
}
