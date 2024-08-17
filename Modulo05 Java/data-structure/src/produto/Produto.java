package produto;

import java.util.LinkedList;

public class Produto {
    private String produtoNome;
    private String produtoDescricao;
    private double produtoValor;
    private int produtoQTD;

    public void addProdutoNome(String nome){
        this.produtoNome = nome;
    }
    public void addProdutoDescricao(String descricao){
        this.produtoDescricao = descricao;
    }
    public void addProdutoValor(double valor){
        this.produtoValor = valor;
    }
    public void addProdutoQTD(int qtd){
        this.produtoQTD += qtd;
    }
    public LinkedList<Produto> getLista(LinkedList<Produto> lista){
        Catalogo cat = new Catalogo();
        return cat.getCatalogo(lista);
    }
    @Override
    public String toString() {
        return "Nome: " + this.produtoNome + ", Descricao: " + this.produtoDescricao + ", Valor: $"+ produtoValor+", Quantidade: "+produtoQTD;
    }
}
