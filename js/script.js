function calcularImc() {

    // Entrada 
    let peso = document.getElementById("peso").valueAsNumber;
    let altura = document.getElementById("altura").valueAsNumber;
    let resultado = document.getElementById("resultado");
    let categoria = document.getElementById("categoria");

    // Processamento

    let imc = peso / (altura * altura);

    // Saida

    resultado.textContent = "Seu IMC é de: " + imc.toFixed(2)

    if (imc >= 5 && imc < 18.5) {
        categoria.textContent = "Categoria: Abaixo do Peso"
    } else if (imc >= 18.5 && imc <= 24.99) {
        categoria.textContent = "Categoria: Peso Normal"
    }  else if (imc >= 25 && imc <= 29.99) {
        categoria.textContent = "Categoria: Sobrepeso"
    }  else if (imc >= 30 && imc <= 39.99) {
        categoria.textContent = "Categoria: Obesidade"
    }  else if (imc >= 40) {
        categoria.textContent = "Categoria: Obesidade Grave"
    } else {
        categoria.textContent = "Erro: Por favor insira os dados corretamente"
    }

}