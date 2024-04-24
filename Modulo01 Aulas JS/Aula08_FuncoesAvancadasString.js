/*
* Funçoes avançadas: String
*       String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em objetos.
*       Possuindo propriedades e métodos
* Ricardo D. Muenchen 20/04/24
*/
//        0123456
let nome='Ricardo Muenchen / Ricardo Muenchen '
console.log(nome);
console.log(nome.indexOf('a')); // retorna a posição no caracter na sua primeira ocorrencia É CASESENSITIVE
console.log(nome.replace('Ricardo Muenchen', 'Ricardo Degregori'))//substitui a primeira sentença que encontrar pela segunda
console.log(nome.substr('7', '5')) // apartir do index 7, pega as prox valores
console.log(nome.toLocaleUpperCase()) // transforma toda a sentença em letra maiuscula
console.log(nome + '-')
console.log(nome.trim()+ '-')//remove espaço no inicio e final da sentença