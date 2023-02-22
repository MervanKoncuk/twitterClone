let myinput = document.getElementById("myinput");
let customInput = document.getElementById("custom-input");
let biSearch = document.querySelector(".bi-search");

myinput.addEventListener("focus",borderEffect)

function borderEffect(){
    customInput.style.border = "1px solid #1d9bf0";
    customInput.style.backgroundColor ="#fff";
    myinput.style.backgroundColor ="#fff";
    biSearch.style.color ="#1d9bf0";
}

document.querySelector(".hover-effect").addEventListener("click",myfunc)
function myfunc(){
    customInput.style.border = "1px solid #dfdfdf";
    customInput.style.backgroundColor ="#dfdfdf";
    myinput.style.backgroundColor ="#dfdfdf";
    biSearch.style.color ="#0f0f0f";
}