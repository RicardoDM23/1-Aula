package streams;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class Exercicio {

//    Peguem um parágrafo de texto e usem streams para contar
//    o número de palavras únicas, ignorarem maiúsculas,
//    miniúsculas e removam pontuações.
    
    
    public static void main(String[] args) {
        String txt = "Peguem um parágrafo de texto e usem streams para contar o número de palavras únicas, ignorarem maiúsculas, miniúsculas e removam pontuações.";
        List<String> palavras = Arrays.asList(txt.toLowerCase().split(" ")).stream()
                .map(palavra -> palavra.chars()
                        .filter(c -> Character.isLetterOrDigit(c))
                        .mapToObj(c -> String.valueOf((char) c))
                        .collect(Collectors.joining()))
                .collect(Collectors.toList());
        
        System.out.println(palavras);

    }
}
