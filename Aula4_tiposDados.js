
//Dados Primitivos
//String (cadeia de caracteres)
    //Declaração
    nomesem = "RicardoSem"; // Não recomendado cria variavel global
    let nome = "RicardoLet"; // Declaração padrão
    var name = "RicardoVar"; // Forma antiga e inadequada de declarar variaveis pode ser redeclarada
    const NAME = "RicardoConst"; //Variaveis que não mudam, deve ser inicializada
    console.log(nomesem, nome, name, NAME);
//Number (numero)
    let numero = 10;
//Boolean (booleano)
    let bool = false;

//Undefined e Null (indefinido e nulo)
    let teste;
    console.log(teste); //unidefined, quando a variavel é declarada e não inicializada

    let meuNull = null;
    console.log(meuNull); //variavel sem valor, usado intencionalmente, deixar alguma informação opcional 'zerada'(exemplo)

//Verificar tipo
    console.log(typeof(numero), typeof(nome), typeof(bool)) //retorna o tipo de dado

