package threads;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CuncurrencyExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        
        Runnable taks1 = () -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Taks 1 - number: " + i);
                try{
                    Thread.sleep(1000);
                } catch (InterruptedException ex){
                    ex.printStackTrace();
                }
            }
        };
        Runnable taks2 = () -> {
            for (char c = 'A'; c <= 'E'; c++) {
                System.out.println("Taks 2 - Letter: " + c);
                try{
                    Thread.sleep(1000);
                } catch (InterruptedException ex){
                    ex.printStackTrace();
                }
            }
        };
        
        executor.submit(taks1);
        executor.submit(taks2);
        
        executor.shutdown();
    }
}
