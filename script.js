// Promises
let promises = [
  "I promise to always respect your choices and your space 💖",
  "I promise to support you in every situation 🥰",
  "I promis to always stay on your side and with you in every situations🥺💗",
  "I promise to always tell you the truth 💌",
  "I promise to be honest and transparent with you 💗",
  "I promise to make you smile and keep our time together fun 😍",
  "I promise to grow together and support both and our dreams 🌸",
  "I promise to communicate even when I’m busy and always check on you 🥺",
  "I promise to remember our special moments keeping them safe in my heart 💖",
  "I promise to always prioritize you and our happiness while respecting our individual goals 💞",
  "I promise to learn from mistakes and love you sincerely 💌"
];

let index = 0;

// Initial Popup → Show Promises
function startPromises(){
  document.getElementById("popup1").classList.remove("show");
  document.getElementById("promiseBox").classList.add("show");
  showPromise();
}

// Typing animation
function showPromise(){
  const text = promises[index];
  const promiseText = document.getElementById("promiseText");
  promiseText.innerText = "";
  let i = 0;

  const typing = setInterval(()=>{
    if(i<text.length){
      promiseText.innerHTML += text[i] === " " ? "&nbsp;" : text[i];
      i++;
    } else {
      clearInterval(typing);
    }
  },50);
}

// Next Promise
function nextPromise(){
  index++;
  if(index<promises.length){
    showPromise();
    createFloatingHearts();
  } else {
    document.getElementById("promiseBox").classList.remove("show");
    showFinalBox();
  }
}

// Final Box + Hearts
function showFinalBox(){
  const box = document.getElementById("finalBox");
  box.classList.add("show");
  createFloatingHearts();
}

// Floating hearts randomly
function createFloatingHearts(){
  for(let i=0;i<15;i++){
    setTimeout(()=>{
      let heart = document.createElement("div");
      heart.innerText = "💖";
      heart.className = "heart";
      heart.style.left = Math.random()*100 + "vw";
      heart.style.fontSize = (Math.random()*25+15)+"px";
      document.body.appendChild(heart);
      setTimeout(()=>heart.remove(),4000);
    }, i*100);
  }
}

// WhatsApp Reply Button
function sendWhatsApp(){
  let msg = document.getElementById("replyMsg").value;
  if(msg.trim()===""){ alert("Please type something!"); return;}
  window.open(`https://wa.me/919209966816?text=${encodeURIComponent(msg)}`, '_blank');
}


