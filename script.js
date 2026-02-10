const openTime = new Date("2026-02-10 09:00:00").getTime(); // فتح الصبح

function check(){
  let p = document.getElementById("pass").value;
  if(p !== "2025/3/15"){ alert("الباسورد غلط 🙂"); return; }

  document.getElementById("page1").classList.add("hidden");
  document.getElementById("countdownPage").classList.remove("hidden");
  startCountdown();
  createHearts();
}

function startCountdown(){
  let x = setInterval(()=>{
    let now = new Date().getTime();
    let diff = openTime - now;
    if(diff <=0){
      clearInterval(x);
      document.getElementById("countdownPage").classList.add("hidden");
      document.getElementById("page2").classList.remove("hidden");
      document.getElementById("song").play();
      return;
    }
    let d=Math.floor(diff/(1000*60*60*24));
    let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    let m=Math.floor((diff%(1000*60*60))/(1000*60));
    let s=Math.floor((diff%(1000*60))/1000);
    document.getElementById("timer").innerHTML=`<span class="time-box">${d}</span> يوم <span class="time-box">${h}</span> ساعة <span class="time-box">${m}</span> دقيقة <span class="time-box">${s}</span> ثانية`;
  },1000);
}

function createHearts(){
  const heartsDiv = document.getElementById("hearts");
  for(let i=0;i<15;i++){
    let heart=document.createElement('div');
    heart.className='heart';
    heart.style.left=Math.random()*90+'%';
    heart.style.animationDuration=(3+Math.random()*4)+'s';
    heart.style.opacity=Math.random();
    heartsDiv.appendChild(heart);
  }
}

function showMsg(){
  let popup=document.getElementById("popup");
  popup.classList.remove("hidden");
  setTimeout(()=>popup.classList.add("hidden"),3000);
}