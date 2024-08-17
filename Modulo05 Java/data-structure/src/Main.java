import produto.Produto;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        CustomList list = new CustomList();
//        list.add(10);
//        list.add(5);
//        list.add(20);
//        list.add(30);
//        list.add(50);
//        list.add(70);
//        System.out.println(list.toString());
//        list.remove(5);
//        System.out.println(list.get(4));
//        System.out.println(list.toString());
//        try {
//            list.remove(10);
//        } catch (Exception ex){
//            System.out.println(ex);
//        }

//        SinglyLinkedList list = new SinglyLinkedList();
//        list.add(00);
//        list.add(10);
//        list.add(20);
//        list.add(50);
//        list.add(40);
//        System.out.println("ADD valores");
//        for (int i = 0; i < list.size(); i++) {
//            System.out.println("Elemento no indice "+i+": "+list.get(i));
//        }
//        System.out.println("Remover o primeiro valor e o ultimo");
//        list.remove(0);
//        list.remove(list.size()-1);
//        for (int i = 0; i < list.size(); i++) {
//            System.out.println("Elemento no indice "+i+": "+list.get(i));
//        }
//        System.out.println("Tamanho da lista: "+list.size());
//        System.out.println("Lista esta vazia? "+list.isEmpty());

        //Facilitando o SinglyLinkedList para não ter que criar uma classe para isto!
        ArrayList<Integer> list = new ArrayList<>();
//        System.out.println("Add");
//        list.add(89);
//        list.add(90);
//        list.add(92);
//        for (int i = 0; i < list.size(); i++) {
//            System.out.println("Elemento no indice "+i+": "+list.get(i));
//        }
//        System.out.println("Remover");
//        list.remove(1);
//        for (int i = 0; i < list.size(); i++) {
//            System.out.println("Elemento no indice "+i+": "+list.get(i));
//        }
//        System.out.println("Tamanho: "+list.size());

        //Exercicio 1
//        Imagine que o aplicativo precisa exibir uma lista de produtos em uma página de catálogo.
//        O ArrayList pode ser usado para armazenar esses produtos
//        pois o acesso aos detalhes do produto por índice
//        (para exibição na página) é muito rápido.
//        Produto prod = new Produto();
//        LinkedList<Produto> lList = new LinkedList<>();
//        prod.getLista(lList);
//        for (int i = 0; i < lList.size(); i++) {
//            System.out.println(lList.get(i));
//        }

        //Exercicio 2
        //Imagine um sistema de aetendimento ao cliente onde temos uma
        // lista de clientes aguardando para serem atendidos
        //Cada cliente é adicionado a lista e, em seguida, é atendido na ordem em que chegou a fila
        //Criar umas classes uma lista de clientes que é processada pela fila.
        //adicionar cliente na lista e atender cliente
    }
}