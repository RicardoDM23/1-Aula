package Stack;

public class StackTest {
    public static void main(String[] args) {
        StackExample stack = new StackExample();

        stack.push(10);
        stack.push(100);
        stack.push(90);
        System.out.println("Elemento no top: " + stack.peek());
        System.out.println("Elemento removido: " + stack.pop());

    }
}
