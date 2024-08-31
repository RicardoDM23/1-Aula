package streams;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);
        
        List<Integer> evenNumbers = numbers.stream()
                .filter( n -> n % 2 == 0)
                .collect(Collectors.toList());
        List<Integer> evenNumbersToList = numbers.stream()
                .filter( n -> n % 2 == 0)
                .toList();
        List<Integer> evenNumbersMult2 = numbers.stream()
                .filter( n -> n % 2 == 0)
                .map(n -> n * 2)
                .collect(Collectors.toList());
        
        System.out.println(evenNumbers);
        System.out.println(evenNumbersToList);
        System.out.println(evenNumbersMult2);
        
        int sum = numbers.stream().reduce(0, Integer::sum);
        System.out.println("Soma: " + sum);
        
        List<String> names = Arrays.asList("Sherlock", "Tony", "Bruce", "Mudock", "Aang", "Logan", "Bilbo");
        names.stream().map(String::toUpperCase).forEach(System.out::println);
    }
}
