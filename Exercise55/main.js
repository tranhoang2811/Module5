function calculateQuadraticEquation(aValue, bValue, cValue) {
  const a = parseFloat(aValue);
  const b = parseFloat(bValue);
  const c = parseFloat(cValue);

  let result;
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    result = "No real roots";
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    result = `x1=x2=${root}`;
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    result = `x1=${root1}; x2=${root2}`;
  }
  document.getElementById("result").innerText = result;
}

function clear() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("result").innerText = "";
}