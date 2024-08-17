package queue;

public class SimpleQueue {
    private Node frist;
    private Node last;

    public SimpleQueue(){
        this.frist = null;
        this.last = null;
    }

    private static class Node {
        int data;
        Node next;

        public Node(int data){
            this.data = data;
            this.next = null;
        }
    }

    public void enqueue(int data){ //enfileirar
        Node newNode = new Node(data);
        if(this.last == null){
            this.frist = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode; //atualiza referencia para o ultimo ser o newNode
            this.last = newNode;
        }
    }

    public int dequeue(){
        if(this.frist ==null){
            throw new IllegalStateException("Fila vazia");
        }

        int data = this.frist.data;
        this.frist = this.frist.next;

        if(this.frist == null){
            this.last = null;
        }

        return data;
    }

    public boolean isEmpty(){
        return this.frist == null; //se for nulo retorna true
    }
}