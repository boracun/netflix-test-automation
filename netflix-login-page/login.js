
function onRefresh() {
    sessionStorage.setItem("emailFocus", "false");
    sessionStorage.setItem("emailErrorOpen", "false");
    sessionStorage.setItem("passFocus", "false");
    sessionStorage.setItem("passErrorOpen", "false");
}

function validate(){
    var e_mail= document.getElementById("email").value;
    var passw = document.getElementById("password").value;
    if ((e_mail.length <= 50 && e_mail.length >= 5) && (passw.length <= 60 && passw.length >= 4)) {
        if(e_mail =="metehan"){
            if( passw == "8866"){
                alert("Sign in successful!");
                sessionStorage.setItem("loginError", "false");
            }
        }
        else{
            sessionStorage.setItem("loginError", "true");
        }
        location.reload();
    }
    else {
        showEmailError();
        showPassError();
    }
    return false;
}

function showEmailError() {
        if (true) {
            if (document.getElementById("email").value.length < 5 || document.getElementById("email").value.length > 50) {
                if (document.getElementsByClassName("emailError").length === 0) {
                    let loginErrorDiv = document.getElementById("email-error-div");
                    let insertedElement = document.createElement('div');
                    insertedElement.className = "emailError";
                    if (document.getElementById("email").value.length === 0) {
                        insertedElement.innerHTML = 'Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.';
                    }
                    else {
                        insertedElement.innerHTML = 'Lütfen geçerli bir e‑posta adresi girin.';
                    }
                    loginErrorDiv.appendChild(insertedElement);
                }
                else {
                    let insertedElement = document.getElementsByClassName("emailError")[0];
                    if (document.getElementById("email").value.length === 0) {
                        insertedElement.innerHTML = 'Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.';
                    }
                    else {
                        insertedElement.innerHTML = 'Lütfen geçerli bir e‑posta adresi girin.';
                    }
                }
            }
            else {
                let el = document.getElementsByClassName("emailError");
                el[0].remove();
            }
        }
    
}

function showPassError() {
    if (true) {
        if (document.getElementById("password").value.length < 4 || document.getElementById("password").value.length > 60) {
            if (document.getElementsByClassName("passError").length === 0) {
                let loginErrorDiv = document.getElementById("pass-error-div");
                let insertedElement = document.createElement('div');
                insertedElement.className = "passError";
                insertedElement.innerHTML = 'Parolanız 4 ila 60 karakter olmalıdır.';
                loginErrorDiv.appendChild(insertedElement);
            }
        }
        else {
            let el = document.getElementsByClassName("passError");
            el[0].remove();
        }
    }
}



function myFunction(x){
   
}

function showLoginError() {
    if (sessionStorage.getItem("loginError") == "true") {
        let loginErrorDiv = document.getElementById("login-error-div");
        let insertedElement = document.createElement('div');
        insertedElement.className = "loginError";
        insertedElement.innerHTML = 'Bu e‑posta adresi ile bağlantılı bir hesap bulamadık. Lütfen yeniden deneyin ya da yeni bir hesap oluşturun.';
        loginErrorDiv.appendChild(insertedElement);
    }
}

function bodyClick(event) {
    console.log(event);
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
                        insertedElement.innerHTML = 'Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.';
                    }
                    else {
                        insertedElement.innerHTML = 'Lütfen geçerli bir e‑posta adresi girin.';
                    }
                    loginErrorDiv.appendChild(insertedElement);
                }
                else {
                    let insertedElement = document.getElementsByClassName("emailError")[0];
                    if (document.getElementById("email").value.length === 0) {
                        insertedElement.innerHTML = 'Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.';
                    }
                    else {
                        insertedElement.innerHTML = 'Lütfen geçerli bir e‑posta adresi girin.';
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
                        insertedElement.innerHTML = 'Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.';
                    }
                    else {
                        insertedElement.innerHTML = 'Lütfen geçerli bir telefon numarası girin.';
                    }
                    loginErrorDiv.appendChild(insertedElement);
                }
                else { //Detaileed kısım
                    let insertedElement = document.getElementsByClassName("emailError")[0];
                    if (document.getElementById("email").value.length === 0) {
                        insertedElement.innerHTML = 'Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.';
                    }
                    else {
                        insertedElement.innerHTML = 'Lütfen geçerli bir telefon numarası girin.';
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
                        insertedElement.innerHTML = 'Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.';
                    }
                    else {
                        insertedElement.innerHTML = 'Lütfen geçerli bir e‑posta adresi girin.';
                    }
                }
                else {
                    if (document.getElementById("email").value.length === 0) {
                        insertedElement.innerHTML = 'Lütfen geçerli bir telefon numarası veya e‑posta adresi girin.';
                    }
                    else {
                        insertedElement.innerHTML = 'Lütfen geçerli bir telefon numarası girin.';
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
                insertedElement.innerHTML = 'Parolanız 4 ila 60 karakter olmalıdır.';
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
                insertedElement.innerHTML = 'Parolanız 4 ila 60 karakter olmalıdır.';
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
