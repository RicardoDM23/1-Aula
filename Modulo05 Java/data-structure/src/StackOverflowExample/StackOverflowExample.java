package StackOverflowExample;

public class StackOverflowExample {
    public static void recursiveCall(){
        System.out.println("Chamando recursivamente");
        recursiveCall();
    }

    public static void main(String[] args) {
        try{
            recursiveCall();
        }catch (StackOverflowError er){
            System.out.println("StackOverflow detectedo");
        }
    }
}
