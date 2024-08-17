package produto;

import java.util.LinkedList;

public class Catalogo {

    public LinkedList<Produto> getCatalogo(LinkedList<Produto> lista){
        Produto prod1 = new Produto();
        prod1.addProdutoNome("Teste1Nome");
        prod1.addProdutoDescricao("Teste1Descri");
        prod1.addProdutoValor(123);
        prod1.addProdutoQTD(10);
        Produto prod2 = new Produto();
        prod2.addProdutoNome("Teste2Nome");
        prod2.addProdutoDescricao("Teste2Descri");
        prod2.addProdutoValor(23);
        prod2.addProdutoQTD(12);
        Produto prod3 = new Produto();
        prod3.addProdutoNome("Teste3Nome");
        prod3.addProdutoDescricao("Teste3Descri");
        prod3.addProdutoValor(13);
        prod3.addProdutoQTD(25);

        lista.add(prod1);
        lista.add(prod2);
        lista.add(prod3);

        return lista;
    }


}
