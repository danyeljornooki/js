let numeroPensado;
let cont = 0;

function numero() {
  numeroPensado = Math.round(Math.random() * 100);
}

function calcular() {
  const op = document.getElementById("btn");
  var num = document.getElementById("bA").value;

  if (op.value == "tentar" && cont < 10) {
    var numA = [num];
    if (num == numeroPensado) {
      Enviar("Acertouu! o número era: " + numeroPensado);
      op.value = "Recomeçar";
    } else {
      Enviar("Errouuu!");
      cont++;
      if (num > numeroPensado) {
        Enviar("O número " + num + " é maior");
      } else {
        Enviar("O número " + num + " é menor");
      }
    }

    if (cont == 10) {
      op.value = "Recomeçar";
      Enviar("Acabou suas chances, você perdeu");
    }

    console.log(cont);
    console.log(num);
    console.log(numeroPensado);
  } else {
    op.value = "tentar";
    var divR = document.getElementById("resultado");

    if (divR.parentNode) {
      divR.parentNode.removeChild(divR);
      numeroPensado = Math.round(Math.random() * 10);
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
