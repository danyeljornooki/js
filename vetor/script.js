function calcular() {
  const op = document.getElementById("btn");

  if (op.value == "Enviar") {
    let vetorA = [5, 6, 7, 10, 13, 15, 18, 20];
    let vetorB = [];

    for (let cont = 0; cont < vetorA.length; cont++) {
      var mult = vetorA[cont] * 2;
      vetorB[cont] = mult;
    }
    result = "A array original: " + vetorA;
    Enviar(result);
    result = "A array ficou: " + vetorB;
    Enviar(result);
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
