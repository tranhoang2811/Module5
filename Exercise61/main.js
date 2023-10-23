function applyColor() {
    const backgroundRed = document.getElementById("backgroundRed").value;
    const backgroundGreen = document.getElementById("backgroundGreen").value;
    const backgroundBlue = document.getElementById("backgroundBlue").value;

    const textRed = document.getElementById("textRed").value;
    const textGreen = document.getElementById("textGreen").value;
    const textBlue = document.getElementById("textBlue").value;

    if (!validateHexColor(backgroundRed, backgroundGreen, backgroundBlue)) {
        alert("Invalid background color");
        return;
    }

    if (!validateHexColor(textRed, textGreen, textBlue)) {
        alert("Invalid text color");
        return;
    }

    const backgroundColor = "#" + backgroundRed + backgroundGreen + backgroundBlue;
    const textColor = "#" + textRed + textGreen + textBlue;

    document.getElementById("title").style.backgroundColor = backgroundColor;
    document.getElementById("title").style.color = textColor;

    document.getElementById("content").style.backgroundColor = backgroundColor;
    document.getElementById("content").style.color = textColor;
}

function reloadColor() {
    document.getElementById("title").style.backgroundColor = 'white';
    document.getElementById("title").style.color = 'black';

    document.getElementById("content").style.backgroundColor = 'white';
    document.getElementById("content").style.color = 'black';
}

function validateHexColor(red, green, blue) {
    if (red.length != 2 || green.length != 2 || blue.length != 2) {
        return false;
    }
    const regex = /^[0-9A-Fa-f]+$/;
    if (!regex.test(red) || !regex.test(green) || !regex.test(blue)) {
        return false;
    }
    return true;
}