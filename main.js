// Declaração de variável "var" "let" "const"

// "Var" - Variável de escopo global, ou seja, funciona em qualquer parte do programa independente do lugar de declaração!

if(true){
    var a = 10
}

console.log(a) // Nota-se que o "console.log" está fora das chaves e mesmo assim retornará um resultado.


// "Let" - Funciona apenas no bloco em que foi declarado!

if(true){
    let a = 20
    console.log(a); // Agora com o uso do "let" o "console.log" só funcionará caso ele esteja dentro das chaves!
}

// "Const" - Característica similar ao "let" onde o "console.log" só funciona dentro do escopo, mas em particularidade uma constante não pode ser reatribuida, mas pode ser modificada no caso de ser um objeto!

if(true){
    const a = 30;
    console.log(a);
}

if(true){
    const a = {nome: "victor"}; // Declaração da variável "a" que recebe um objeto com valor.
    a.nome = "lucas" // Modificação do valor do objeto

    const b = {sobrenome: "silva"}; // Declaração da variável "a" que recebe um objeto com valor.
    b.sobrenome = "santos"; // Modificação do valor do objeto

    console.log(a, b);  
}

