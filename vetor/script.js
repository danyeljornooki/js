function calcular() {
  const op = document.getElementById("btn");

  if (op.value == "Enviar") {
    var divEx = document.createElement("div");
    let ret = document.getElementById("valores");
    let parentDiv = ret.parentNode;
    parentDiv.appendChild(divEx);
    divEx.id = "resultado";
    var divR = document.getElementById("resultado");

    let vetorA = [5, 6, 7, 10, 13, 15, 18, 20];
    let vetorB = [];

    for (let cont = 0; cont < vetorA.length; cont++) {
      var mult = vetorA[cont] * 2;
      vetorB[cont] = mult;
    }
    var p = document.createElement("p");
    result = document.createTextNode("A array ficou: " + vetorB);
    p.append(result);
    divR.appendChild(p);
    op.value = "Excluir";
  } else {
    op.value = "Enviar";
    var divR = document.getElementById("resultado");

    if (divR.parentNode) {
      divR.parentNode.removeChild(divR);
    }
  }
}
