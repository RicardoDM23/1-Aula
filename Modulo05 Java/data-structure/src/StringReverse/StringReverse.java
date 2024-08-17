package StringReverse;

public class StringReverse {
    public static void main(String[] args) {
        StackChar stack = new StackChar();
        String txt = "qwe asd zxc";
        int count = 0;
        System.out.println("Texto: " + txt);
        for (int i = 0; i < txt.length(); i++) {
            stack.push(txt.charAt(i));
            count++;
        }
        txt = "";
        System.out.println("Texto: " + txt);
        for (int i = 0; i < count; i++) {
            txt+=stack.pop();
        }
        System.out.println("Texto: " + txt);

    }
}
