class Pessoa {

    constructor(nome, peso, altura) {

        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    calcularImc() {        

        const imc = (this.peso / (this.altura * this.altura)).toFixed(2);

        if (imc < 18.5) {
            console.log (`
            Nome: ${this.nome}
            Peso: ${this.peso}
            Altura: ${this.altura}

            Seu IMC é ${imc}, de acordo com a tabela IMC você está : MUITO MAGRO
            `);
        } else if (imc >= 18.5 && imc < 25) {
            console.log (`
            Nome: ${this.nome}
            Peso: ${this.peso}
            Altura: ${this.altura}

            Seu IMC é ${imc}, de acordo com a tabela IMC você está : COM PESO NORMAL
            `);
        } else if (imc >= 25 && imc < 30) {
            console.log (`
            Nome: ${this.nome}
            Peso: ${this.peso}
            Altura: ${this.altura}

            Seu IMC é ${imc}, de acordo com a tabela IMC você está : COM SOBREPESO
            `);
        } else if (imc >= 30 && imc < 35) {
            console.log (`
            Nome: ${this.nome}
            Peso: ${this.peso}
            Altura: ${this.altura}

            Seu IMC é ${imc}, de acordo com a tabela IMC você está : COM OBESIDADE GRAU 1
            `);
        } else if (imc >= 35 && imc < 40) {
            console.log (`
            Nome: ${this.nome}
            Peso: ${this.peso}
            Altura: ${this.altura}

            Seu IMC é ${imc}, de acordo com a tabela IMC você está : COM OBESIDADE GRAU 2
            `);
        } else if (imc > 40) {
            console.log (`
            Nome: ${this.nome}
            Peso: ${this.peso}
            Altura: ${this.altura}

            Seu IMC é ${imc}, de acordo com a tabela IMC você está : COM OBESIDADE GRAU 3
            `);
        } else {
            console.log ('Valor Inválido !')
        }

    }

}

console.log(new Pessoa('Leandro', 62, 1.64).calcularImc())