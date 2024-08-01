
let salarioBruto;
let adcNoturno;
let horasExtras;
let desc;

let salarioLiquido = (salarioBruto, adcNoturno, horasExtras, desc) => {
       return salarioBruto + adcNoturno + (horasExtras*5) - desc;
}

console.log(salarioLiquido(2000,500,100,200));