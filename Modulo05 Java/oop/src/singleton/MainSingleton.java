package singleton;

public class MainSingleton {
    public static void main(String[] args) {
        ConfigurationManager configManager = ConfigurationManager.getInstance();
        
        String dbUser = configManager.getProperties("db.user");
        System.out.println("Usuario do banco de dados " + dbUser);
    }
}
