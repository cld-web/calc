
function calcularIMC(){

    let valorOriginal = document.getElementById("valor").value;
    let desconto = document.getElementById("desconto").value;

    let valorDesconto = desconto;
    let valorFinal = valorOriginal / valorDesconto;

    document.getElementById("resultado").textContent = "Seu IMC é " + valorFinal;
    
    if (valorFinal < 18.5) {
  console.log("Abaixo do peso");
} else if (valorFinal >= 18.5 && valorFinal < 25) {
  console.log("Peso normal");
} else if (valorFinal >= 25 && valorFinal < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}
}