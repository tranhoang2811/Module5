function focusInput() {
  document.getElementById("inputData").focus();
}

function countUpperCase(string) {
  stringArray = string.replace(/\s/g, '').split("");
  result = stringArray.filter(
    (letter) => letter === letter.toUpperCase()
  ).length;
  document.getElementById("outputData").innerHTML = result;
}

function countLowerCase(string) {
  stringArray = string.replace(/\s/g, '').split("");
  result = stringArray.filter(
    (letter) => letter === letter.toLowerCase()
  ).length;
  document.getElementById("outputData").innerHTML = result;
}

function uppercaseString(string) {
  document.getElementById("outputData").innerHTML = string.toUpperCase();
}

function lowercaseString(string) {
  document.getElementById("outputData").innerHTML = string.toLowerCase();
}

function countWords(string) {
  const words = string.trim().split(/\s+/);
  const count = words.length;
  document.getElementById("outputData").innerHTML = count;
}

function breakLineBetweenWords(string) {
  const words = string.trim().split(/\s+/);
  const result = words.join("\n");
  document.getElementById("outputData").innerHTML = result;
}

function printVowelsAndConsonants(string) {
  const vowels = string.match(/[aeiou]/gi) || "No vowels found";
  const consonants = string.match(/[bcdfghjklmnpqrstvwxyz]/gi) || "No consonants found";
  const result = vowels + "\n" + consonants;
  document.getElementById("outputData").innerHTML = result;
}



