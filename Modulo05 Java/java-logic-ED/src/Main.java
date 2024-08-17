import java.util.Locale;
import java.util.Scanner;
import util.Utilitarios;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

//        System.out.printf("Hellow World!");
//        System.out.printf("Hellow World!");
//        System.out.println("Hellow World!");
//        //ln pula uma linha
//        System.out.println("Hellow World!");

//        byte byteVar = 127;
//        System.out.println("Byte: " + byteVar);
//        short shortVar = 32000;
//        System.out.println("Short: " + shortVar);
//        int intVar = 2147483647;
//        System.out.println("Int: " + intVar);
//        long longVar = 9000000000000000000L;
//        System.out.println("Long: " + longVar);
//        float floatVar = 3.1415F;
//        System.out.println("Float: " + floatVar);
//        double doubleVar = 3.14159265359;
//        System.out.println("Double: " + doubleVar);
//        boolean booleanVar = true;
//        System.out.println("Boolean: " + booleanVar);
//        char charVar = 'A';
//        System.out.println("Char: " + charVar);
//        String name = "Ricardo";
//        System.out.println("String: " + name);

//        Locale.setDefault(Locale.US);
        //troca para o padrão americano no exemplo a baixo de 3,14 para 3.14
//        System.out.printf("%.2f\n", floatVar);

//        int a;
//        int b;
//        int c;
//        double area;
//        a = 5;
//        b = 7;
//        c = 3;
        // força o cast
//        area = (double)(a+b)/2*c;
//        System.out.println(area);

        Scanner sc = new Scanner(System.in);

//        String nome = sc.next();
//        System.out.println("Seu nome é: " + nome);
//        int idade = sc.nextInt();
//        System.out.println("Sua idade é: " + idade);
//        double ano = sc.nextDouble();
//        System.out.println("O ano é: " + ano);
//        char caracter = sc.next().charAt(0); // o valor muda qual vai ser o caracter "pego"
//        System.out.println("O caracter é: " + caracter);

        //Ex1 Conversão de celsius para Fahrenheit
//        float c = sc.nextFloat();
//        float result = (c * 1.8F) + 32;
//        System.out.println("O valor "+c+" em celsius é equivalente a "+result+" em Fahrenheit");

//        int idade = 19;
//        if(idade >= 18 ){
//            System.out.println("é maior de idade");
//        } else {
//            System.out.println("é menor de idade");
//        }

        //Ex1 Par ou impar
//        System.out.println("informe um valor valor");
//        double valor = sc.nextDouble();
//        if((valor%2)==0){
//            System.out.println(valor+" é par");
//        }else{
//            System.out.println(valor+" é impar");
//        }

        //de para de dias com switch case
//        System.out.printf("Informe o dia da semana: ");
//        int dia = sc.nextInt();
//        switch (dia){
//            case 1:
//                System.out.println("Domingo!");
//                break;
//            case 2:
//                System.out.println("Segunda-feira!");
//                break;
//            case 3:
//                System.out.println("Terça-feira!");
//                break;
//            case 4:
//                System.out.println("Quarta-feira!");
//                break;
//            case 5:
//                System.out.println("Quinta-feira!");
//                break;
//            case 6:
//                System.out.println("Sexta-feira!");
//                break;
//            case 7:
//                System.out.println("Sabado!");
//                break;
//            default:
//                System.out.println("Dia invalido");
//                break;
//        }

        //Ex3 Verifique se o ano é bisexto
//        System.out.printf("Informe o ano: ");
//        int ano = sc.nextInt();
//        if((ano%400==0)||(ano%4==0 && ano%100!=0)){
//            System.out.println(ano + " é bisexto");
//        } else {
//            System.out.println(ano + " não é bisexto");
//        }

        //Ex4 Calculadora simples
//        System.out.printf("Informe a operação: ");
//        char ope = sc.next().charAt(0);
//        System.out.printf("Informe o valor A: ");
//        double a = sc.nextDouble();
//        System.out.printf("Informe o valor B: ");
//        double b = sc.nextDouble();
//        if(ope=='+'){
//            System.out.println("Resultado: "+ (a+b));
//        } else if (ope=='-') {
//            System.out.println("Resultado: "+ (a-b));
//        } else if (ope=='/') {
//            System.out.println("Resultado: "+ (a/b));
//        } else if (ope=='*') {
//            System.out.println("Resultado: "+ (a*b));
//        } else {
//            System.out.println("Operação invalida");
//        }

        //Ex5 simulem um login basico que permita apenas 3 tentativas antes de bloquear

//        for (int i = 0; i <= 2; i++) {
//            System.out.printf("Usuario: ");
//            String usuario = sc.next();
//            System.out.printf("Senha: ");
//            String senha = sc.next();
//            if((usuario.equals("admin"))&&(senha.equals("admin"))){
//                System.out.println("Sucesso");
//                break;
//            }else{
//                System.out.println("Usuario ou senha incorretos, tentativa: "+(i+1)+"/3");
//                if (i>=2){
//                    System.out.println("Limite de tentativas atingido");
//                }
//            }

//        for (int i = 0; i < 10; i++) {
//            System.out.println("Valor do i é " + i);
//        }
//        int i = 9;
//        while (i < 10) {
//            System.out.println("valor de i é " + i);
//            i++;
//        }
//        do{
//            System.out.println("valor de i é " + i);
//            i++;
//        }while(i<10);

//        String texto = "Java é melhor que aquela linguagem";
//        System.out.println(texto);
//        int comprimento = texto.length();
//        System.out.println(comprimento);
//        String minuscula = texto.toLowerCase();
//        System.out.println(minuscula);
//        String maiuscula = texto.toUpperCase();
//        System.out.println(maiuscula);

//        boolean contem = texto.contains("Java"); //case sensitive
//        System.out.println(contem);

//        String substituto = texto.replace("Java","Python");
//        System.out.println(substituto);
//
//        String substring = texto.substring(0, 10);
//        System.out.println(substring);

//        double num = 50.30;
//        System.out.println(num);
//        double arredondado = Math.round(num); //para o valor mais prox
//        System.out.println(arredondado);
//        double arredondadoPraCima = Math.ceil(num);
//        System.out.println(arredondadoPraCima);
//        double arredondadoPraBaixo = Math.floor(num);
//        System.out.println(arredondadoPraBaixo);
//        double quadrada = Math.sqrt(num);
//        System.out.println(quadrada);
//        double absoluto = Math.abs(num);
//        System.out.println(absoluto);

//        double aleatorio = Math.random();
//        System.out.println(aleatorio);

//        //ex6 - fatorial de um numero
//        System.out.printf("Fatorial!");
//        System.out.printf("Informe o numero: ");
//        double fat = sc.nextDouble();
//        double rest = fat;
//        while (fat > 1){
//            rest = rest *(fat-1);
//            fat--;
//            System.out.println(rest);
//        }
//
//        //ex7 - fibonnaci
//        System.out.printf("Quantidade da sequencia: ");
//        int seq = sc.nextInt();
//        int atual = 0;
//        int ant = 0;
//        for (int i = 1; i <= seq; i++) {
//            if (i == 1) {
//                atual = 1;
//                ant = 0;
//            } else {
//                atual += ant;
//                ant = atual - ant;
//            }
//            System.out.println(atual);
//        }

        //Array
        //forma 1 um array de inteiro para 5 elementos
//        int[] vetorUm = new int[5];
//        vetorUm[0] = 10;
//        vetorUm[1] = 20;
//        vetorUm[2] = 30;
//        vetorUm[3] = 40;
//        vetorUm[4] = 50;
//        vetorUm[4] = 100;
//
//        System.out.println("Elementos do array 'vetor': ");
//        for (int i = 0; i < vetorUm.length; i++) {
//            System.out.println("Posição "+i+" Elemento: "+vetorUm[i]);
//
//        }
//
//        System.out.println("Soma de elementos");
//        int sun = 0;
//        for (int i = 0; i < vetorUm.length; i++) {
//            sun += vetorUm[i];
//        }
//        System.out.println("Soma Total: " + sun);

//        System.out.println("Maior elemento");
//        int max = 0;
//        for (int i = 0; i < vetorUm.length; i++) {
//            if(max < vetorUm[i]){
//                max=vetorUm[i];
//            }
//        }
//        System.out.println("Maior valor: "+max);

        //inverter
//        int j = vetorUm.length- 1;
//        for (int i = 0 ; i <= j; i++) {
//            int aux = vetorUm[i];
//            vetorUm[i] = vetorUm[j];
//            vetorUm[j] = aux;
//            j--;
//        }
//        System.out.println("Elementos do array 'vetor inverso': ");
//        for (int i = 0; i < vetorUm.length; i++) {
//            System.out.println("Posição "+i+" Elemento: "+vetorUm[i]);
//        }

        //Adicionar elementos a um array

//        System.out.print("Informe o elemento a ser adicionado:");
//        int addElemento = sc.nextInt();

//        int[] arrayAuxAdd = new int[vetorUm.length+1];
//        for (int i = 0; i < vetorUm.length; i++) {
//            arrayAuxAdd[i] = vetorUm[i];
//        }
//        arrayAuxAdd[arrayAuxAdd.length-1]=addElemento;
//        vetorUm = arrayAuxAdd;
//
//        System.out.println("Elementos do array 'vetor resultado': ");
//        for (int i = 0; i < vetorUm.length; i++) {
//            System.out.println("Posição "+i+" Elemento: "+vetorUm[i]);
//        }
//
//        //Excluir elementos de um array
//        System.out.print("Informe o elemento a ser excluido:");
//        int delElemento = sc.nextInt();
//        int[] novoArrayDel = new int[vetorUm.length - 1];
//        int jdel=0;
//        for (int i = 0; i < vetorUm.length; i++) {
//            if(vetorUm[i]!=delElemento){
//                novoArrayDel[jdel] = vetorUm[i];
//                jdel++;
//            }
//        }
//        vetorUm = novoArrayDel;
//        System.out.println("Elementos do array 'vetor resultado': ");
//        for (int i = 0; i < vetorUm.length; i++) {
//            System.out.println("Posição "+i+" Elemento: "+vetorUm[i]);
//        }
//
//        //Pesquisar elementos de um array
//        System.out.print("Informe o elemento a ser Pesquisado:");
//        int findElemento = sc.nextInt();
//        boolean existe = false;
//        for (int i = 0; i < vetorUm.length; i++) {
//            if(vetorUm[i]==findElemento){
//                System.out.println("Elemento encontrado: "+vetorUm[i]+" Index: "+ i);
//                existe = true;
//            }
//        }
//        if(!existe){
//            System.out.println("Elemento não encontrado!");
//        }

        //Matriz
//        int[][] matriz = {
//                {1,2,5},
//                {4,5,6},
//                {10,8,9}
//        };
//        for (int[] row : matriz) {
//            for (int value : row){
//                System.out.println(value + "");
//                //soma +=  value
//            }
//            System.out.println();
//        }

        //somar a diagonal principal de uma matriz
//        int somaDPrincipal = 0;
//        for (int i = 0; i < matriz.length; i++) {
//            for (int j = 0; j < matriz[i].length; j++) {
//                if(i==j){
//                    somaDPrincipal += matriz[i][j];
//                }
//            }
//        }
//        System.out.println("Soma da diagonal principal: "+ somaDPrincipal);
//
//        //somar a diagonal secundaria de uma matriz
//        //A diagonal secundária de uma matriz N x N é composta pelos elementos cujos índices somados dão N -1
//        int somaDSecundaria = 0;
//        int ordemMat = matriz.length;
//        for (int i = 0; i < ordemMat ; i++) {
//            somaDSecundaria += matriz[i][ordemMat - 1 - i];
//        }
//
//        System.out.println("Soma da diagonal secundaria: " + somaDSecundaria);
//        //Rotacionar uma matriz 90G
//        int n = matriz.length;
//        int[][] matrizRotacionada = new int[n][n];
//        // Transpor a matriz
//        for (int i = 0; i < n; i++) {
//            for (int j = 0; j < n; j++) {
//                matrizRotacionada[j][i] = matriz[i][j];
//            }
//        }
//        for (int i = 0; i < n; i++) {
//            for (int j = 0; j < n / 2; j++) {
//                int aux = matrizRotacionada[i][j];
//                matrizRotacionada[i][j] = matrizRotacionada[i][n - 1 - j];
//                matrizRotacionada[i][n - 1 - j] = aux;
//            }
//        }
//        for (int[] row : matrizRotacionada) {
//            for (int value : row){
//                System.out.println(value + "");
//                //soma +=  value
//            }
//            System.out.println();
//        }

        //Algoritimo para buscar um elemento em uma matriz
//        System.out.printf(  "1,2,5\n" +
//                            "4,5,6\n" +
//                            "10,8,9\n");
//        System.out.printf("Informe o valor buscado: ");
//        int findElementMatriz = sc.nextInt();
//        boolean existe = false;
//        for (int i = 0; i < matriz.length; i++) {
//            for (int j = 0; j < matriz[i].length; j++) {
//                if(findElementMatriz==matriz[i][j]){
//                    System.out.println("Valor encontrado em: ["+i+"]["+j+"]" );
//                    existe=true;
//                }
//            }
//        }
//        if(!existe){
//            System.out.println("Valor não encontrado");
//        }
//        System.out.println("Informe o i: ");
//        int indexI = sc.nextInt();
//        System.out.println("Informe o j: ");
//        int indexJ = sc.nextInt();
//
//        if(indexI < matriz.length){
//            if(indexJ < matriz[0].length){
//                System.out.println("Valor encontrado: "+ matriz[indexI][indexJ] );
//            }else{
//                System.out.println("Valor não encontrado");
//            }
//        }else{
//            System.out.println("Valor não encontrado");
//        }


        /*
        * [modificador] tipoRetorno nomeDoMetodo ([parametros]){
        *       bloco de codigo!
        * }
         */

        Geometria geo = new Geometria();
        double areaRetangulo = geo.calcularAreaRetangulo(5.0, 3.0);
        System.out.println(areaRetangulo);
        System.out.println(geo.multiplicar(5,3)); //funciona mas não é a melhor forma de usar
        System.out.println(Geometria.multiplicar(10,10));

        ContaBancaria contaBancaria = new ContaBancaria();
        contaBancaria.depositar(1000);
        System.out.println(contaBancaria.consultaSaldo());

        Utilitarios.print("Olá, mundo!");
    }
}