function calculateImc() {
  var height = document.getElementById('height')
  var weight = document.getElementById('weight')
  var imc = weight.value / ((height.value/100) * (height.value/100));
  alert(`Seu IMC é ${imc}`);
}

function calculateIRPF() {
  var money = document.getElementById('money')
  var name = document.getElementById('name')
  if (money.value <= 1903.98) {
    alert(`${name.value} você não tem desconto de IRPF`);
  } else if (money.value <= 2826.65) {
    alert(`${name.value} você tem desconto de 7.5%, portanto o valor a ser pago é ${(money.value * 0.075).toFixed(2)}`);
  }
  else if (money.value <= 3751.05) {
    alert(`${name.value} você tem desconto de 15%, portanto o valor a ser pago é ${(money.value * 0.15).toFixed(2)}`);
  }
  else if (money.value <= 4664.68) {
    alert(`${name.value} você tem desconto de 22.5%, portanto o valor a ser pago é ${(money.value * 0.225).toFixed(2)}`);
  }
  else {
    alert(`${name.value} você tem desconto de 27.5%, portanto o valor a ser pago é ${(money.value * 0.275).toFixed(2)}`);
  }
}

function calculateINSS() {
  var money = document.getElementById('money')
  var name = document.getElementById('name')
  if (money.value <= 1100) {
    alert(`${name.value} você tem desconto de 7.5% do INSS, portanto o valor a ser pago é ${(money.value * 0.075).toFixed(2)}`);
  } else if (money.value <= 2203.48) {
    alert(`${name.value} você tem desconto de 9% do INSS, portanto o valor a ser pago é ${(money.value * 0.09).toFixed(2)}`);
  }
  else if (money.value <= 3305.22) {
    alert(`${name.value} você tem desconto de 12% do INSS, portanto o valor a ser pago é ${(money.value * 0.12).toFixed(2)}`);
  }
  else if (money.value <= 6433.57) {
    alert(`${name.value} você tem desconto de 14% do INSS, portanto o valor a ser pago é ${(money.value * 0.14).toFixed(2)}`);
  }
}