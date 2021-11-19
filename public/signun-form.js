"use strict";

const inputs = document.querySelectorAll('input')
inputs.forEach(element => {     
    element.onkeyup = () => {
        element.classList.remove('invalid');
    }
});


document.getElementById('cancel-button').onclick = function(event) {
    window.location.href = "./index.html";
};

document.getElementById('submit-button').onclick = function(event) {
    
    let isValid = true;
    inputs.forEach(element => {
        if (element.name === 'fname' || element.name === 'lname') {
            isValid = validateName(element);
        } else if (element.name === 'email') {
            isValid = validateEmail(element);
        } else if (element.name === 'password' || element.name === 're-enterpassword') {
            isValid = validatePassword();
        }
    });
};

function validateName(element) {
    if(element.value.length == 0) {
        element.classList.add('invalid');
    } else {
        element.classList.remove('invalid');
    }
    return !element.classList.contains('invalid');
}

function validateEmail(element) {
    console.log("validateEmail");
    const email = element.value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
        element.classList.remove('invalid');
    } else {
        element.classList.add('invalid');
    }
    return !element.classList.contains('invalid');
}

function validatePassword() {
    console.log("validatePassword");
    const password = document.getElementsByName("password")[0];
    const rePassword = document.getElementsByName("re-enterpassword")[0];

    if(password.value.length == 0 || rePassword.value.length == 0) {
        password.classList.add('invalid');
        rePassword.classList.add('invalid');
        return false;
    }

    if (password.value === rePassword.value) {
        password.classList.remove('invalid');
        rePassword.classList.remove('invalid');
    } else {
        password.classList.add('invalid');
        rePassword.classList.add('invalid');
    }
    return !password.classList.contains('invalid');
}