function calcular(num1, num2) {
  var num1 = document.getElementById("a").value;
  var num2 = document.getElementById("b").value;
  var p;
  var result = contas(num1, num2);
  if (num1 % 1 === 0 && num2 % 1 === 0) {
    p = document.createElement("p");
    if (result == undefined) {
      console.log(result);
    } else {
      Enviar(result);
    }
  } else {
    alert("Escreva um número inteiro");
  }
}

function contas(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  var soma = num1 + num2;
  var sub = num1 - num2;
  var mult = num1 * num2;
  var div = num1 / num2.toFixed(2);

  if (num1 % 1 === 0 && num2 % 1 === 0) {
    return (result = "Soma = " + soma +
      " | Subtração = " + sub +
      " | Multiplicação = " +mult +
      " | Divisão = " +div);
  } else {
    return (result = alert("Escreva um número válido"));
  }
}

function Enviar(dados) {
  var divR = document.getElementById("resultado");
  var p = document.createElement("p");
  result = document.createTextNode(dados);
  p.append(result);
  divR.appendChild(p);
}
