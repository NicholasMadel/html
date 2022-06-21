// let nome = "Pedrão 123 @@" //String Literal (junção de várias letras, símbolos, caracter)
// let idade = 25 //number literal (real, inteiro....)
// let estaAprovado = true //tipo boolean (usado para construir regras)
// let Sobrenome //Valor padrão; undefined

// let pessoa ={
//     nome: 'Nicholas',
//     idade: 24,
//     estaAprovado: true,
//     sobreNome: 'Madel'
// };

// pessoa.nome
// pessoa.idade

// let animal= {
//     raca,
//     especie: "cachorro",
//     qtdPatas: 4,
//     vertebrado: true
// }

// animal.raca = "PitBull"
// animal.especie = "Coelho"

// let numero = 8

// let parOuImpar = numero %2 == 0 ? 'par' : 'impar' 
// console.log(parOuImpar)

// alert("oi")


// let numero = prompt("Digite um número")
// let numeroPouN = numero >= 0 ? 'positivo' : 'negativo'
// alert(numeroPouN)

// while (true) {
//     let op = prompt("1 - Cadastre seu nome 2 - Sair")
//     if (op == 1) {
//         nome = prompt("Digite seu nome: ")
//     } else if (op == 2) {
//         break;
//     }
// }

// let teste = ["Nicholas",23,true]

// for (let i = 0; i < array.length; i++) {
  
//     console.log(teste[i])
    
// }

//3. Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
//Salário: maior que zero;
//Sexo: 'f' ou 'm';
//Estado Civil: 's', 'c', 'v', 'd';

    // let nome = ""
    // let idade = 0
    // let salario = 0
    // let sexo = ""
    // let estadoCivil = ""

    // do{
    //     nome = prompt  ("Digite seu nome (Nome precisa ter mais de 3 caracteres: ")
    // }while(nome.length < 3);
    // do{
    //     idade = prompt ("Digite sua idade: ")
    // }while(idade >= 150 || idade <= 0);
    // do{
    //     salario = prompt  ("Digite sua renda: ")
    // }while(salario < 0);
    // do{
    //     sexo = prompt ("Digite seu sexo: ")
    // }while(sexo != 'f' && sexo != 'm' )
    // do{
    //     estadoCivil = prompt("Digite seu estado civil: ")
    // }while (estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "v" && estadoCivil != "d")

    // 10. Faça um Programa que pergunte em que turno você estuda.
    // Peça para digitar M-matutino ou V-Vespertino ou N-Noturno.
    // Imprima a mensagem "Bom dia!", "Boa Tarde!" ou "Boa noite!"

    let turno = ""
    

  let op =  prompt ("Digite o turno que você trabalha com apenas a inicial")

    if (op == 'M') { 
        alert ("Matutino")
    } else if (op == 'V') { 
        alert ("Vespertino")
    }else if (op == 'N'){
        alert ("Noturno")
    }
    console.log("Boa noite!")


