
const email = document.querySelector(".input-email");
const inputBox = document.querySelector(".input-box");
const button = document.querySelector(".btn-notify");
const warning = document.createElement("span");


function ValidateForm(event) {
    const emailValue = email.value.trim(); //trim() removes blank characters from the start of the string //
    
    if (emailValue === '') {
              
        email.parentElement.insertBefore(warning, inputBox.children[1]); //show error 
        warning.className = ("error"); // adding error class       
        email.className = ("input-email red-border") //adding error class
        warning.textContent = "Whoops! It looks like you forgot to add your email" //add error message      

        if (window.innerWidth >= 768) {
            warning.className = ("error desktop-error")
        }
        
    } else if (!emailTest(emailValue)) {        
        email.parentElement.insertBefore(warning, inputBox.children[1]); //show error 
        warning.className = ("error"); // add error class
        email.className = ("input-email red-border") //adding error class
        warning.textContent = "Please provide a valid email address";
        email.placeholder = "example@email/com"
        
        if (window.innerWidth >= 768) {
            warning.className = ("error desktop-error")
        }

    } else {
        email.className = ("input-email green-border");
        inputBox.removeChild(warning);
    }
        
    event.preventDefault(); 
    }
        
function emailTest (email) {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
}


