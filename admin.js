let status = "close";
let light = document.querySelector(".light")
let Input_password = document.querySelector("#input-password");
let Password_label = document.querySelector(".password-label");
let icon = document.querySelector(".icon");
icon.addEventListener(("click"),()=>{
    if(Status == "close"){       
        light.style.display = "unset"
        Input_password.type = "text"
        Input_password.style.color = "black"
        if(Input_password.value.length == 0)Password_label.style.color = "black"
        Status = "open"
    }else{
        light.style.display = "none"
        Password_label.style.color = "white";
        Input_password.type = "password"
        Input_password.style.color = "white"
        Status = "close"
    }
})
 document.getElementById('loginForm').a
if(username === 'admin' && password == 'library123'){
    window.location.href = "index.html";
}else{
    errorMessage.style.color = 'red';
}


