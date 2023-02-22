
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

// active-link için
function changeTab(evt, tabName) {
  console.log("object");
  // tüm bağlantıları "active-link" sınıfından kaldır
  var links = document.getElementsByClassName("presantationA");
  for (var i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active-link", "");
  }

  // tıklanan bağlantıya "active-link" sınıfını ekle
  evt.currentTarget.className += " active-link";

  // "active-link" sınıfına sahip bağlantının alt çizgisini genişlet
  var activeLink = document.getElementsByClassName("active-link")[0];
  var underline = activeLink.nextElementSibling;
  underline.style.width = activeLink.offsetWidth + "px";
}

