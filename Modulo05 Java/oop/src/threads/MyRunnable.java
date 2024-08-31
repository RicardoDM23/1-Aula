package threads;

public class MyRunnable implements Runnable{
    
    @Override
    public void run() {
        System.out.println("Thread em execução! Runnable");
    }
    
    public static void main(String[] args) {
        Thread r1 = new Thread(new MyRunnable());
        r1.start();
        
    }
}
