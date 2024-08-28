function calculateAgeNextYear(thisYear) {
    var nextYear = parseInt(thisYear) + 1;
    return nextYear;
}

function displayAgeNextYear() {
    var thisYear = prompt("What is your age this year?");
    var nextYear = calculateAgeNextYear(thisYear);
    console.log("What will your age be next year? " + nextYear);
}

function changeBackgroundColor() {
    var main = document.querySelector('main');
    main.style.backgroundColor = 'lightblue';
}

function resetBackgroundColor() {
    var main = document.querySelector('main');
    main.style.backgroundColor = 'white';
}

var changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', changeBackgroundColor);

var resetColorButton = document.getElementById('resetColorButton');
resetColorButton.addEventListener('click', resetBackgroundColor);
