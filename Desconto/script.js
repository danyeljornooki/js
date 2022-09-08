function calcular(num1, num2) {
  var divR = document.getElementById("resultado");
  var num1 = document.getElementById("a").value;
  var num2 = document.getElementById("b").value;
  var p;
  var result = contas(num1, num2);
  if (num1 != "" && num2 != "") {
    p = document.createElement("p");
    p.append(result);
    divR.appendChild(p);
  } else {
    console.log('vazio');
  }
}

function contas(num1, num2) {
total = num1 -((num1 * num2) / 100).toFixed(1);
  return (result = "O novo valor é: R$" + total);
}
