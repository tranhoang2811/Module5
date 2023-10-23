function getMax(a, b, c) {
  const result = document.getElementById("result");
  const intA = parseFloat(a);
  const intB = parseFloat(b);
  const intC = parseFloat(c);

  const max = Math.max(intA, intB, intC);
  result.innerText = max;
}

function getMin(a, b, c) {
  const result = document.getElementById("result");
  const intA = parseFloat(a);
  const intB = parseFloat(b);
  const intC = parseFloat(c);

  const min = Math.min(intA, intB, intC);
  result.innerText = min;
}

function sinA(a) {
  const result = document.getElementById("result");
  const intA = parseFloat(a);

  const sinAValue = Math.sin(intA);
  result.innerText = sinAValue;
}

function cosA(a) {
  const result = document.getElementById("result");
  const intA = parseFloat(a);

  const cosAValue = Math.cos(intA);
  result.innerText = cosAValue;
}

function aPowerToB(a, b) {
  const result = document.getElementById("result");
  const intA = parseFloat(a);
  const intB = parseFloat(b);

  const powValue = Math.pow(intA, intB);
  result.innerText = powValue;
}
