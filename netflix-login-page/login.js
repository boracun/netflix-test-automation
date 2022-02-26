
function validate(){
    var e_mail= document.getElementById("email").value;
    var passw = document.getElementById("password").value;
    if(e_mail =="metehan"){
        if( passw == "886"){
            alert("Sign in successful!");
            localStorage.setItem("loginError", "false");
            return true;
        }
    }
    else{
        localStorage.setItem("loginError", "true");
        return false;
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
}
