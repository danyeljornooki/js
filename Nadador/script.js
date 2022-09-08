function calcular(num1) {
  const op = document.getElementById("btn");
  var num1 = document.getElementById("a").value;

  if (op.value == "Enviar") {
    if (parseInt(num1) % 1 === 0) {
      if (num1 >= 5 && num1 <= 7) {
        result = "Com " + num1 + " anos se classifica como infantil A";
        Enviar(result);
      } else if (num1 >= 8 && num1 <= 11) {
        result = "Com " + num1 + " anos se classifica como infantil B";
        Enviar(result);
      } else if (num1 >= 12 && num1 <= 14) {
        result = "Com " + num1 + " anos se classifica como juvenil A";
        Enviar(result);
      } else if (num1 >= 15 && num1 <= 18) {
        result = "Com " + num1 + " anos se classifica como juvenil B";
        Enviar(result);
      } else if (num1 >= 19) {
        result = "Com " + num1 + " anos se classifica como sênior";
        Enviar(result);
      } else {
        result = "Com " + num1 + " anos você ainda é muito novo";
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
