function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Ariel",
    idade: 26,
}

const pessoa2 = {
    nome: "Gabriela",
    idade: 15
}

const animal = {
    nome: "Pinga",
    idade: 5,
    raça: "Dragão",
}

console.log(calculaIdade.call(pessoa1,10));
console.log(calculaIdade.apply(animal,[5]));