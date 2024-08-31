package abstraction;

public class Livro {
    private String titulo;
    private String resumo;
    private Pessoa autor;
    private int numPaginas;
    
    public Livro(String titulo, String resumo, Pessoa autor, int numPaginas){
        this.titulo = titulo;
        this.resumo = resumo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo){
        this.titulo = titulo;
    }
    public String getResumo() {
        return resumo;
    }
    public void setResumo(String resumo){
        this.resumo = resumo;
    }
    public Pessoa getAutor() {
        return autor;
    }
    public void setAutor(Pessoa autor) {
        this.autor = autor;
    }
    public int getNumPaginas(){
        return numPaginas;
    }
    public void setNumPaginas(int num){
        this.numPaginas = num;
    }
}
