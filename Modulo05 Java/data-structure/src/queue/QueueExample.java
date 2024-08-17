package queue;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<Integer>();

        queue.add(10);
        queue.add(30);
        queue.add(40);
        System.out.println("Elementos da fila: " + queue.toString());
        System.out.println("Elemento na frente da fila: " + queue.peek());
        System.out.println("Elementos da fila: " + queue.toString());
        System.out.println("Remover o primeiro elemento: " + queue.poll()); //remove o 1 elemento
        System.out.println("Elementos da fila: " + queue.toString());
    }
}
