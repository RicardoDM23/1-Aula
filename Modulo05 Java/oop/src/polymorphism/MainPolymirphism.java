package polymorphism;

public class MainPolymirphism {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Dog myDog = new Dog();
        Cat myCat = new Cat();
        
        myAnimal.makeSounds();
        myDog.makeSounds();
        myCat.makeSounds();
        
        MathOperations soma = new MathOperations();
        
        System.out.println(soma.add(2,3));
        System.out.println(soma.add(1,2,3));
    }
}
