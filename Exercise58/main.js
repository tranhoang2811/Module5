const todayInput = document.getElementById("today");
const firstNameInput = document.getElementById("firstName");
const physicianInput = document.getElementById("physician");
const physicianOtherInput = document.getElementById("specifyPhysician");
const activityInput = document.getElementById("activity");
const pulseInput = document.getElementById("pulse");
const grimaceInput = document.getElementById("grimace");
const appearanceInput = document.getElementById("appearance");
const respirationInput = document.getElementById("respiration");
const totalInput = document.getElementById("total");

const today = new Date();
const year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}

function onPhysicianSelected(event) {
  if (event.target.value === "other") {
    alert("Please specify physician name");
    physicianOtherInput.focus();
  }
}

function validateInput(event) {
  const input = event.target;
  if (input.value < 0 || input.value > 2) {
    alert("Please enter a value between 0 and 2");
    input.focus();
  }
  calculateTotal();
}

function calculateTotal() {
  const activityValue = parseInt(activityInput.value || '0');
  const pulseValue = parseInt(pulseInput.value || '0');
  const grimaceValue = parseInt(grimaceInput.value || '0');
  const appearanceValue = parseInt(appearanceInput.value || '0');
  const respirationValue = parseInt(respirationInput.value || '0');
  const totalValue =
    activityValue +
    pulseValue +
    grimaceValue +
    appearanceValue +
    respirationValue;
  totalInput.value = totalValue.toString();
}

todayInput.value = `${year}-${month}-${day}`;
firstNameInput.focus();
physicianInput.addEventListener("change", onPhysicianSelected);
activityInput.addEventListener("input", validateInput);
pulseInput.addEventListener("input", validateInput);
grimaceInput.addEventListener("input", validateInput);
appearanceInput.addEventListener("input", validateInput);
respirationInput.addEventListener("input", validateInput);
