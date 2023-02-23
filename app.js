
// dropdown
const input = document.getElementById('textInput');
const dropDown = document.querySelector('.dropDown');
const dropDownTwo = document.querySelector('.dropDownTwo')
const btn = document.querySelector('.twitBtn')

input.addEventListener('focus', function() {
  dropDown.style.display = 'block';
  dropDownTwo.style.display = 'block';
  btn.style.opacity = "1"
});


// Tweet Atma
const tweetSend = () => {
  const messegaInput = document.getElementById('textInput').value;
  if (messegaInput.trim() === '') { 
    return;
  }
  const div = document.createElement('div');
  div.classList.add("messegaBox");
  const newDiv = document.getElementById('mesaj');
  div.innerHTML = document.getElementById('tMessage').innerHTML;
  newDiv.appendChild(div);
  document.querySelector('.message p').innerHTML = messegaInput;
  document.getElementById('textInput').value = "";
}

const messegaInput = document.getElementById('textInput');
messegaInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    tweetSend();
  }
});


// Message Box

const messageBox = document.querySelector('.message-tab');
const messageContent = document.getElementById('message-content');

messageBox.addEventListener('click', function() {
  if (messageContent.style.display === 'none') {
    messageContent.style.display = 'block';
  } else {
    messageContent.style.display = 'none';
  }
});

// .active-link 
function changeTab(evt, tabName) {
  console.log("object");

  var links = document.getElementsByClassName("presantationA");
  for (var i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active-link", "");
  }

  evt.currentTarget.className += " active-link";

  var activeLink = document.getElementsByClassName("active-link")[0];
  var underline = activeLink.nextElementSibling;
  underline.style.width = activeLink.offsetWidth + "px";
}


// custom js

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

