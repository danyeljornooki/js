function calcular(frase) {
  const op = document.getElementById("btn");
  var frase = document.getElementById("bA");

  if (op.value == "Enviar") {
    var text = frase.value;
    var arrayF = text.split(" ");
    var branco = 0;

    for (let cont = 0; cont <= arrayF.length; cont++) {
      if (cont >= 2) {
        branco = branco + 1;
        console.log(branco);
      }
    }

    Enviar(branco)
    console.log(arrayF);
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
  result = document.createTextNode("Essa frase tem " + dados + " espaços em branco");
  p.append(result);
  divR.appendChild(p);
}