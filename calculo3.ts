interface IVeiculos{
    nome: String,
    marca: String,
    ano: String
}


let veiculo1 : IVeiculos = {
    nome : "Avião",
    marca: "Boing",
    ano: "2024"
}

console.log(`O primeiro veículo é um ${veiculo1.nome}\nA marca do veículo é ${veiculo1.marca}\nO ano do veículo é ${veiculo1.ano}`);
