package encapsulationII;

public class MainEncapII {
    public static void main(String[] args) {
        Shape circle = new Circle(5);
        System.out.println("Area C: " + circle.area());
        
        Shape rectangle = new Rectangle(4, 5);
        System.out.println("Area R: " + rectangle.area());
        
        Point point = new Point(3, 5);
        Point anotherPoint = new Point(5, 8);
        System.out.println("Ponto " + point + " Outro ponto " + anotherPoint);
        System.out.println("Ponto x " + point.x());
        System.out.println("Xs são iguais? " + point.equals(anotherPoint));
    }
}
