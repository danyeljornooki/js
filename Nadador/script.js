function calcular(num1) {
  const op = document.getElementById("btn");
  var num1 = document.getElementById("a").value;

  if (op.value == "Enviar") {
    var divEx = document.createElement("div");
    let ret = document.getElementById("valores");
    let parentDiv = ret.parentNode;
    parentDiv.appendChild(divEx);
    divEx.id = "resultado";
    var divR = document.getElementById("resultado");

    if (parseInt(num1) % 1 === 0) {
      if (num1 >= 5 && num1 <= 7) {
        var p = document.createElement("p");
        result = document.createTextNode(
          "Com " + num1 + " anos se classifica como infantil A"
        );
        p.append(result);
        divR.appendChild(p);
      } else if (num1 >= 8 && num1 <= 11) {
        var p = document.createElement("p");
        result = document.createTextNode(
          "Com " + num1 + " anos se classifica como infantil B"
        );
        p.append(result);
        divR.appendChild(p);
      } else if (num1 >= 12 && num1 <= 14) {
        var p = document.createElement("p");
        result = document.createTextNode(
          "Com " + num1 + " anos se classifica como juvenil A"
        );
        p.append(result);
        divR.appendChild(p);
      } else if (num1 >= 15 && num1 <= 18) {
        var p = document.createElement("p");
        result = document.createTextNode(
          "Com " + num1 + " anos se classifica como juvenil B"
        );
        p.append(result);
        divR.appendChild(p);
      } else if (num1 >= 19) {
        var p = document.createElement("p");
        result = document.createTextNode(
          "Com " + num1 + " anos se classifica como sênior"
        );
        p.append(result);
        divR.appendChild(p);
      } else {
        var p = document.createElement("p");
        result = document.createTextNode(
          "Com " + num1 + " anos você ainda é muito novo"
        );
        p.append(result);
        divR.appendChild(p);
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
