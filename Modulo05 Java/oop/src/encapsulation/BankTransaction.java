package encapsulation;

public class BankTransaction implements Transaction{
    private final BankAccount account;
    private final double amount;
    private final TransactionType type;
    
    
    
    
    public BankTransaction(BankAccount account, double amount, TransactionType type){
        this.account = account;
        this.amount = amount;
        this.type = type;
    }
    
    
    @Override
    public void execute() {
        switch (type){
            case DEPOSIT -> this.account.deposit(amount);
            case WITHDRAWAL -> this.account.withdraw(amount);
        }
    }
    @Override
    public String getDetails() {
        return String.format("Transação do time %s com valor %.2f na conta %s", this.type, this.amount, this.account.getAccountNumber());
    }
}
