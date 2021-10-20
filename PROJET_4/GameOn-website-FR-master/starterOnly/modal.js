function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector('.close')
const modalbody = document.querySelector('.modal-body')
const submitBtn = document.querySelector('.btn-submit')
const checkboxInput = document.querySelector('.checkbox-input')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close form
close.addEventListener('click', function() {
    modalbg.style.display = "none";
});

const first = document.querySelector("#first");

const firstChecker = (value, type, errorId) => {
    let isValid = true;
    switch (type) {
        case 'input':
            isValid = value.length >= 2;
            break
        case 'input':
            let dateFormat = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
            isValid = value && value.length && dateFormat.test(value.trim(dateFormat))
            break
        case 'input':
            let mailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            isValid = value && value.length && mailFormat.test(email.value.trim(mailFormat))
            break
            // connais pas !!! ----
        case 'integer':
            const numberN = parseInt(value)
            isValid = numberN !== NaN && Number.isInteger(numberN)
            break
            // pourquoi string ? c'est une chaîne de proposition ?? ----
        case 'string':
            isValid = value && value.length
            break
        case 'boolean':
            isValid = value
            break
        default:
            break
    }
    document.getElementById(errorId).style.display = isValid ? 'none' : 'block'
    return isValid
}

document.getElementsByName("reserve")[0].addEventListener("submit", event => {
    event.preventDefault();

    const reserveForm = {
        first1: document.getElementById('first').value,
        last2: document.getElementById('last').value,
        emailregex: document.getElementById('email').value,
        birthdate1: document.getElementById('birthdate').value,
        tornamentquant: document.getElementById('quantity').value,
        conditioncheck: document.getElementById('checkbox1').checked
    }
    let isFormValid = true
    isFormValid = firstChecker(reserveForm.first1, "input", "errorTextFirst") && isFormValid;
    isFormValid = firstChecker(reserveForm.last2, "input", "errorTextLast") && isFormValid;
    isFormValid = firstChecker(reserveForm.emailregex, "input", "errorTextEmail") && isFormValid;
    isFormValid = firstChecker(reserveForm.birthdate1, "input", "errorTextBirth") && isFormValid;
    isFormValid = firstChecker(reserveForm.tornamentquant, "integer", "errorTextNombreTournoi") && isFormValid;
    isFormValid = firstChecker(reserveForm.conditioncheck, "boolean", "errorTextCondition") && isFormValid;
})