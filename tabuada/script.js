function calcular(num1) {
  const op = document.getElementById("btn");
  var num1 = document.getElementById("a").value;

  if (op.value == "Enviar") {
    if (parseInt(num1) % 1 === 0) {
      for (let mult = 0; mult <= 10; mult++) {
        result = num1 + " X " + mult + " = " + num1 * mult;
        Enviar(result);
      }
    } else {
      alert("Escreva um número válido");
    }
    op.value = "Excluir";
  } else {
    op.value = "Enviar";
    var divR = document.getElementById("resultado");
    if (divR.parentNode) {
      divR.parentNode.removeChild(divR);
    }
  }
}

function Enviar(dados) {
  var divEx = document.createElement("div");
  let ret = document.getElementById("valores");
  let parentDiv = ret.parentNode;
  parentDiv.appendChild(divEx);
  divEx.id = "resultado";
  var divR = document.getElementById("resultado");

  var p = document.createElement("p");
  result = document.createTextNode(dados);
  p.append(result);
  divR.appendChild(p);
}
