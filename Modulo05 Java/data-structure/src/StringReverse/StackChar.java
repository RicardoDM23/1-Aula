package StringReverse;

class Node {
    char data;
    Node next;

    public Node(char data){
        this.data = data;
        this.next = null;
    }
}

public class StackChar {
    private Node top;

    public StackChar(){
        this.top = null;
    }

    public void push(char data){
        Node newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    public char pop(){
        if(isEmpty()){
            throw new RuntimeException("Stack is empty");
        }
        char poppedData = this.top.data;
        this.top = this.top.next;

        return poppedData;
    }

    public int peek(){
        if(isEmpty()){
            throw new RuntimeException("Stack is empty");
        }
        return this.top.data;
    }
    public boolean isEmpty(){
        return top == null;
    }
}
