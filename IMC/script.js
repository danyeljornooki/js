function calcular(alt, pes) {
  const op = document.getElementById("btn");
  var alt = document.getElementById("a").value;
  var pes = document.getElementById("b").value;

  if (op.value == "Enviar") {
    var divEx = document.createElement("div");
    let ret = document.getElementById("valores");
    let parentDiv = ret.parentNode;
    parentDiv.appendChild(divEx);
    divEx.id = "resultado";
    var divR = document.getElementById("resultado");

    if (parseInt(alt) % 1 === 0 && parseInt(pes) % 1 === 0) {
      imc = conta(alt, pes);
      if (imc < 20) {
        var p = document.createElement("p");
        result = document.createTextNode("Seu IMC é : " + imc + ", você está abaixo do peso");
        p.append(result);
        divR.appendChild(p);

      } else if (imc >= 20 && imc < 25) {
        var p = document.createElement("p");
        result = document.createTextNode("Seu IMC é : " + imc + ", peso normal");
        p.append(result);
        divR.appendChild(p);

      } else if (imc >= 25 && imc < 30) {
        var p = document.createElement("p");
        result = document.createTextNode("Seu IMC é : " + imc + ", acima  do peso");
        p.append(result);
        divR.appendChild(p);
      
      } else if (imc >= 30 && imc < 34) {
        var p = document.createElement("p");
        result = document.createTextNode("Seu IMC é : " + imc + ", obeso");
        p.append(result);
        divR.appendChild(p);
      
      } else {
        var p = document.createElement("p");
        result = document.createTextNode("Seu IMC é : " + imc + ", muito obeso");
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

function conta(alt, pes) {
  return (pes / (alt * alt)).toFixed(2);
}
