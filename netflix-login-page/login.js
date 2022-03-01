var registeredUsers = {
    "bora@gmail.com": "verifyingallday",
    "cagri@ug.bilkent.edu.tr": "999888",
    "vural.d.a@hotmail.com": "159753",
    "metehan@yahoo.com": "321321",
    "+9005554448956": "coolphone",
    "+12025550118": "usgreatagain",
    "+930776589657": "afghanphone",
    "+33934315771": "ngolokante",
    "+4930662358542": "marcoreus",
    "+9940552989772": "haydaraliyev",
    "+559556202774": "alexdesouza10",
    "+74012089072": "putinpls",
    "+40257288908": "gheorghehagi",
    "+34171515185": "torres",
}

function onRefresh() {
    sessionStorage.setItem("emailFocus", "false");
    sessionStorage.setItem("emailErrorOpen", "false");
    sessionStorage.setItem("passFocus", "false");
    sessionStorage.setItem("passErrorOpen", "false");
}

function validate(){
    var e_mail= document.getElementById("email").value;
    var passw = document.getElementById("password").value;

    let isEmail = checkIsEmail(e_mail);
    if(!isEmail) {
        let countryCode = document.getElementById("select-text").innerHTML;
        e_mail = countryCode + e_mail;
    }

    console.log(e_mail);

    if ((e_mail.length <= 50 && e_mail.length >= 5) && (passw.length <= 60 && passw.length >= 4)) {
        if (registeredUsers[e_mail] === undefined) {
            if (isEmail) {
                sessionStorage.setItem("loginError", "true");
                sessionStorage.setItem("bothError", "true");
                sessionStorage.setItem("emailError", "false");
                sessionStorage.setItem("numberError", "false");
            }
            else {
                sessionStorage.setItem("loginError", "true");
                sessionStorage.setItem("numberError", "true");
                sessionStorage.setItem("bothError", "false");
                sessionStorage.setItem("emailError", "false");
            }
        }
        else {
            if(registeredUsers[e_mail] === passw){
                window.open("welcome.html");
                alert("Sign in successful!");
                sessionStorage.setItem("loginError", "false");
            }
            else {
                sessionStorage.setItem("loginError", "true");
                sessionStorage.setItem("emailError", "true");
                sessionStorage.setItem("bothError", "false");
                sessionStorage.setItem("numberError", "false");
            }
        }
        location.reload();
    }
    else {
        try {
            showEmailError();
        }
        catch(err) {

        }
        try {
            showPassError();
        }
        catch(err) {

        }
    }
    return false;
}

function showEmailError() {
    if (document.getElementById("email").value.length < 5 || document.getElementById("email").value.length > 50) {
        sessionStorage.setItem("emailErrorOpen", "true");
        if (document.getElementsByClassName("emailError").length === 0) {
            let loginErrorDiv = document.getElementById("email-error-div");
            let insertedElement = document.createElement('div');
            insertedElement.className = "emailError";
            if (document.getElementById("email").value.length === 0) {
                insertedElement.innerHTML = 'Please enter a valid phone number or Please enter a valid email.';
            }
            else {
                insertedElement.innerHTML = 'Please enter a valid email.';
            }
            loginErrorDiv.appendChild(insertedElement);
        }
        else {
            let insertedElement = document.getElementsByClassName("emailError")[0];
            if (document.getElementById("email").value.length === 0) {
                insertedElement.innerHTML = 'Please enter a valid phone number or Please enter a valid email.';
            }
            else {
                insertedElement.innerHTML = 'Please enter a valid email.';
            }
        }
    }
    else {
        let el = document.getElementsByClassName("emailError");
        el[0].remove();
    }
}

function showPassError() {
    if (document.getElementById("password").value.length < 4 || document.getElementById("password").value.length > 60) {
        sessionStorage.setItem("passErrorOpen", "true");
        if (document.getElementsByClassName("passError").length === 0) {
            let loginErrorDiv = document.getElementById("pass-error-div");
            let insertedElement = document.createElement('div');
            insertedElement.className = "passError";
            insertedElement.innerHTML = 'Your password must contain between 4 and 60 characters.';
            loginErrorDiv.appendChild(insertedElement);
        }
    }
    else {
        let el = document.getElementsByClassName("passError");
        el[0].remove();
    }
}



function myFunction(x){
   
}

function showLoginError() {
    if (sessionStorage.getItem("loginError") == "true") {
        let loginErrorDiv = document.getElementById("login-error-div");
        let insertedElement = document.createElement('div');
        insertedElement.className = "loginError";

        if (sessionStorage.getItem("bothError") == "true") {
            insertedElement.innerHTML = 'Sorry, we cannot find an account with this email address. Please try again or create a new account.';
        }
        else if (sessionStorage.getItem("emailError") == "true") {
            insertedElement.innerHTML = 'Incorrect password. Please try again or you can reset your password.';
        }
        else if (sessionStorage.getItem("numberError") == "true") {
            insertedElement.innerHTML = 'Sorry, we cannot find an account with this email address. Please try again or create a new account.';
        }
        loginErrorDiv.appendChild(insertedElement);
    }
}

function bodyClick(event) {
}


function emailFieldChange() {
    if (sessionStorage.getItem("emailErrorOpen") == "true") {
        if (checkIsEmail(document.getElementById("email").value)) {
            if (document.getElementById("email").value.length < 5 || document.getElementById("email").value.length > 50) {
                if (document.getElementsByClassName("emailError").length === 0) {
                    let loginErrorDiv = document.getElementById("email-error-div");
                    let insertedElement = document.createElement('div');
                    insertedElement.className = "emailError";
                    if (document.getElementById("email").value.length === 0) {
                        insertedElement.innerHTML = 'Please enter a valid phone number or Please enter a valid email.';
                    }
                    else {
                        insertedElement.innerHTML = 'Please enter a valid email.';
                    }
                    loginErrorDiv.appendChild(insertedElement);
                }
                else {
                    let insertedElement = document.getElementsByClassName("emailError")[0];
                    if (document.getElementById("email").value.length === 0) {
                        insertedElement.innerHTML = 'Please enter a valid phone number or Please enter a valid email.';
                    }
                    else {
                        insertedElement.innerHTML = 'Please enter a valid email.';
                    }
                }
            }
            else {
                let el = document.getElementsByClassName("emailError");
                el[0].remove();
            }
        }
        else {
            if (document.getElementById("email").value.length < 5 || document.getElementById("email").value.length > 50) {
                if (document.getElementsByClassName("emailError").length === 0) {
                    let loginErrorDiv = document.getElementById("email-error-div");
                    let insertedElement = document.createElement('div');
                    insertedElement.className = "emailError";
                    if (document.getElementById("email").value.length === 0) {
                        insertedElement.innerHTML = 'Please enter a valid phone number or Please enter a valid email.';
                    }
                    else {
                        insertedElement.innerHTML = 'Please enter a valid phone number.';
                    }
                    loginErrorDiv.appendChild(insertedElement);
                }
                else { //Detaileed kısım
                    let insertedElement = document.getElementsByClassName("emailError")[0];
                    if (document.getElementById("email").value.length === 0) {
                        insertedElement.innerHTML = 'Please enter a valid phone number or Please enter a valid email.';
                    }
                    else {
                        insertedElement.innerHTML = 'Please enter a valid phone number.';
                    }
                }
            }
            else {
                let el = document.getElementsByClassName("emailError");
                el[0].remove();
            }
        }
    }
}

function emailUnfocused(){
    if (sessionStorage.getItem("emailFocus") == "true") {
        if (document.getElementById("email").value.length < 5 || document.getElementById("email").value.length > 50) {
            sessionStorage.setItem("emailErrorOpen", "true");
            if (document.getElementsByClassName("emailError").length === 0) {
                let loginErrorDiv = document.getElementById("email-error-div");
                let insertedElement = document.createElement('div');
                insertedElement.className = "emailError";
                if (checkIsEmail(document.getElementById("email").value)) {
                    if (document.getElementById("email").value.length === 0) {
                        insertedElement.innerHTML = 'Please enter a valid phone number or Please enter a valid email.';
                    }
                    else {
                        insertedElement.innerHTML = 'Please enter a valid email.';
                    }
                }
                else {
                    if (document.getElementById("email").value.length === 0) {
                        insertedElement.innerHTML = 'Please enter a valid phone number or Please enter a valid email.';
                    }
                    else {
                        insertedElement.innerHTML = 'Please enter a valid phone number.';
                    }
                }
                loginErrorDiv.appendChild(insertedElement);
            }
        }
    }
}

function passFieldChange() {
    if (sessionStorage.getItem("passErrorOpen") == "true") {
        
        if (document.getElementById("password").value.length < 4 || document.getElementById("password").value.length > 60) {
            if (document.getElementsByClassName("passError").length === 0) {
                let loginErrorDiv = document.getElementById("pass-error-div");
                let insertedElement = document.createElement('div');
                insertedElement.className = "passError";
                insertedElement.innerHTML = 'Your password must contain between 4 and 60 characters.';
                loginErrorDiv.appendChild(insertedElement);
            }
        }
        else {
            let el = document.getElementsByClassName("passError");
            el[0].remove();
        }
    }
}

function passUnfocused(){
    if (sessionStorage.getItem("passFocus") == "true") {
        if (document.getElementById("password").value.length < 4 || document.getElementById("password").value.length > 60) {
            sessionStorage.setItem("passErrorOpen", "true");
            if (document.getElementsByClassName("passError").length === 0) {
                let loginErrorDiv = document.getElementById("pass-error-div");
                let insertedElement = document.createElement('div');
                insertedElement.className = "passError";
                insertedElement.innerHTML = 'Your password must contain between 4 and 60 characters.';
                loginErrorDiv.appendChild(insertedElement);
            }
        }
    }
}

function emailFocused(){
    sessionStorage.setItem("emailFocus", "true");
}

function passFocused(){
    sessionStorage.setItem("passFocus", "true");
}

function checkIsEmail(input) {
    return !isNumber(input);
}

function isNumber(searchValue) {
    var found = searchValue.search(/^(\d*\.?\d*)$/);
    //Change to ^(\d*\.?\d+)$ if you don't want the number to end with a . such as 2.
    //Currently validates .2, 0.2, 2.0 and 2.
    if(found > -1) {
        return true;
    }
    else {
        return false;
    }
}
