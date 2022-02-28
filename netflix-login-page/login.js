
function validate(){
    var e_mail= document.getElementById("email").value;
    var passw = document.getElementById("password").value;
    if ((e_mail.length <= 50 && e_mail.length >= 5) && (passw.length <= 60 && passw.length >= 4)) {
        if(e_mail =="metehan"){
            if( passw == "8866"){
                alert("Sign in successful!");
                localStorage.setItem("loginError", "false");
                return true;
            }
        }
        else{
            localStorage.setItem("loginError", "true");
            return false;
        }
    }
    return false;

}



function myFunction(x){
   
}

function showLoginError() {
    if (localStorage.getItem("loginError") == "true") {
        console.log("a");
        let loginErrorDiv = document.getElementById("login-error-div");
        let insertedElement = document.createElement('div');
        insertedElement.className = "loginError";
        insertedElement.innerHTML = 'Bu e‑posta adresi ile bağlantılı bir hesap bulamadık. Lütfen yeniden deneyin ya da yeni bir hesap oluşturun.';
        loginErrorDiv.appendChild(insertedElement);
    }
}

function onRefresh() {
    localStorage.setItem("loginError", "false");
    localStorage.setItem("emailFocus", "false");
    localStorage.setItem("emailErrorOpen", "false");
    localStorage.setItem("passFocus", "false");
    localStorage.setItem("passErrorOpen", "false");
}

function bodyClick(event) {
    console.log(event);
}


function emailFieldChange() {
    if (localStorage.getItem("emailErrorOpen") == "true") {
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
    if (localStorage.getItem("emailFocus") == "true") {
        if (document.getElementById("email").value.length < 5 || document.getElementById("email").value.length > 50) {
            localStorage.setItem("emailErrorOpen", "true");
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
    if (localStorage.getItem("passErrorOpen") == "true") {
        
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
    if (localStorage.getItem("passFocus") == "true") {
        if (document.getElementById("password").value.length < 4 || document.getElementById("password").value.length > 60) {
            localStorage.setItem("passErrorOpen", "true");
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
    localStorage.setItem("emailFocus", "true");
}

function passFocused(){
    localStorage.setItem("passFocus", "true");
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

function handleCountryList() {
    var selectField = document.getElementById("select-field");
    var selectText = document.getElementById("select-text");
    var options = document.querySelectorAll(".options");
    var list = document.getElementById("list");

    selectField.addEventListener("click", () => {
        list.classList.toggle("hide");
    });

    options.forEach(option => option.addEventListener("click", () => {
        selectedText = option.getElementsByTagName("p").item(0).innerHTML;
        selectText.innerHTML = selectedText.substring(selectedText.indexOf("+"));
        list.classList.toggle("hide");
    }));
}

handleCountryList();