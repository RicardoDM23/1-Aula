package encapsulation;

public class MainEncap {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("1234", 1000);
        
        BankTransaction depositTransaction = new BankTransaction(account, 15000, TransactionType.DEPOSIT);
        depositTransaction.execute();
        
        System.out.println(depositTransaction.getDetails());
    }
}
