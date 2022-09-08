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
    var text = frase.value;
    var arrayF = text.split(" ");
    var branco = 0;

    for (let cont = 0; cont <= arrayF.length; cont++) {
      if (cont >= 2) {
        branco = branco + 1;
        console.log(branco);
      }
    }

    console.log(arrayF);

    var p = document.createElement("p");
    result = document.createTextNode("Essa frase tem " + branco + " espaços em branco");
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
