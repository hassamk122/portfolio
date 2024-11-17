const generate= document.getElementById("generate");
const displaypassword = document.getElementById("passcode");



function generatePassword(){
    const passwordLength = 12;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumber = true;
    const includeSymbols = true;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";


    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumber ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";


    for (let i = 0; i < passwordLength; i++) {
        const randomindex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomindex];
    }

    return password;
}

const after = document.getElementById("after");
generate.onclick = function(){
    const password = generatePassword();
    after.textContent ="";
    displaypassword.value = password;
}

const copyButton = document.getElementById("copy");

copyButton.onclick =function(){
    const passwordText = displaypassword.value;
    if(passwordText != ""){
        navigator.clipboard.writeText(passwordText);
        after.textContent ="Copied!";
    }
    else{
        alert("Please generate a password first.");
    }
}