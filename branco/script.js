function calcular(frase) {
  const op = document.getElementById("btn");
  var frase = document.getElementById("a");

  if (op.value == "Enviar") {
    var divEx = document.createElement("div");
    let ret = document.getElementById("valores");
    let parentDiv = ret.parentNode;
    parentDiv.appendChild(divEx);
    divEx.id = "resultado";
    var divR = document.getElementById("resultado");

    let pal = frase;

    console.log("" + pal.lenght);

    var p = document.createElement("p");
    result = document.createTextNode("A array ficou: ");
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
