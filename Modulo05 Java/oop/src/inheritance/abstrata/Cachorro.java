package inheritance.abstrata;

public class Cachorro extends Animal{
    
    public Cachorro(String nome) {
        super(nome);
    }
    
    @Override
    public void emitirSom() {
        System.out.println(this.nome + "faz au au!");
    }
}
