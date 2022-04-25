const pwE = document.getElementById('pw');
const copyE = document.getElementById('copy');
const lengthE = document.getElementById('length');
const upperE = document.getElementById('upper');
const lowerE = document.getElementById('lower');
const numberE = document.getElementById('number');
const symbolE = document.getElementById('symbol');
const generateE = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=";

function getLowercase(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}
function getUppercase(){
    return upperLetters[Math.floor(Math.random()*lowerLetters.length)];
}
function getNumbers(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}
function getSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePassword(){
    let password = '';
    let len = lengthE.value;
    if(len>25) len = 25;
    const ch = [];
    if(upperE.checked){
        ch.push(getUppercase());
    }
    if(lowerE.checked){
        ch.push(getLowercase());
    }
    if(numberE.checked){
        ch.push(getNumbers());
    }
    if(symbolE.checked){
        ch.push(getSymbol());
    }
    for (let i = 0; i < ch.length; i++) {
        const element = ch[i];
        password+=element;
    }
    for (let i = 0; i < len -ch.length; i++) {
        const element =  generateEle();
        password+=element; 
    }
    pwE.innerHTML = password;
}
function generateEle(){
    const chr = [];
    if(upperE.checked){
        chr.push(getUppercase());
    }
    if(lowerE.checked){
        chr.push(getLowercase());
    }
    if(numberE.checked){
        chr.push(getNumbers());
    }
    if(symbolE.checked){
        chr.push(getSymbol());
    }
    if(chr.length ===0) return '';
    return chr[Math.floor(Math.random() * chr.length)];
}
function copytext(){
    let textt = pwE.innerHTML;
    navigator.clipboard.writeText(textt);
    alert("text copied!")
}
generateE.addEventListener('click',generatePassword);
copyE.addEventListener('click',copytext);