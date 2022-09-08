function calcular(alt, pes) {
  const op = document.getElementById("btn");
  var alt = document.getElementById("a").value;
  var pes = document.getElementById("b").value;

  if (op.value == "Enviar") {
    if (parseInt(alt) % 1 === 0 && parseInt(pes) % 1 === 0) {
      imc = (pes / (alt * alt)).toFixed(2);
      if (imc < 20) {
        result = "Seu IMC é : " + imc + ", você está abaixo do peso";
        Enviar(result);
      } else if (imc >= 20 && imc < 25) {
        result = "Seu IMC é : " + imc + ", peso normal";
        Enviar(result);
      } else if (imc >= 25 && imc < 30) {
        result = "Seu IMC é : " + imc + ", acima  do peso";
        Enviar(result);
      } else if (imc >= 30 && imc < 34) {
        result = "Seu IMC é : " + imc + ", obeso";
        Enviar(result);
      } else {
        result = "Seu IMC é : " + imc + ", muito obeso";
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
