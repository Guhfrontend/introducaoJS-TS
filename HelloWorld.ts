

let mensagem: String = "Hello World";



function multiplicarPorCinco(valor: number): number{
    return valor * 5;
}


let resultado: number = multiplicarPorCinco(5);

console.log(resultado);

console.clear();

interface IPessoa{
    nome: String;
    idade: number;
}

let p1 = { 
    nome: "Maria",
    idade : "Simões",
    profissao: "Dev"
}

let p2: IPessoa = {
    nome: "Gustavo",
    idade: 23
}