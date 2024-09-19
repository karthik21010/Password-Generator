const input = document.querySelector('.input');
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~`|}{[]:;?><";

const chars = upperCase + lowerCase + number + symbol;
function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];   
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];   
    password += number[Math.floor(Math.random() * number.length)];   
    password += symbol[Math.floor(Math.random() * symbol.length)];   

    while(length > password.length){
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    input.value = password;
}
function copy(){
    navigator.clipboard.writeText(input.value)
}