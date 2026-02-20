const body=document.body;
const stars=document.getElementById('stars');
const particles=document.getElementById('particles');
const penguin=document.getElementById('penguin');
const danceBtn=document.getElementById('danceBtn');

/* create stars */
for(let i=0;i<70;i++){
 let star=document.createElement('div');
 star.classList.add('star');
 star.style.top=Math.random()*100+'%';
 star.style.left=Math.random()*100+'%';
 star.style.animationDuration=(Math.random()*2+1)+'s';
 stars.appendChild(star);
}

/* particles */
for(let i=0;i<40;i++){
 let p=document.createElement('div');
 p.style.position='absolute';
 p.style.width='6px';
 p.style.height='6px';
 p.style.background='rgba(255,255,255,.5)';
 p.style.borderRadius='50%';
 p.style.top=Math.random()*100+'%';
 p.style.left=Math.random()*100+'%';
 p.style.animation='twinkle 3s infinite alternate';
 particles.appendChild(p);
}

/* theme modes */
document.querySelectorAll('[data-mode]').forEach(btn=>{
 btn.addEventListener('click',()=>{
  const mode=btn.dataset.mode;
  localStorage.setItem('mode',mode);
  applyMode(mode);
 });
});

function applyMode(mode){
 if(mode==='day'){
  body.style.background='linear-gradient(to bottom,#87CEFA,#FFF6B7)';
  stars.style.opacity=0;
 }
 if(mode==='sunset'){
  body.style.background='linear-gradient(to bottom,#ff9966,#ff5e62)';
  stars.style.opacity=0;
 }
 if(mode==='night'){
  body.style.background='linear-gradient(to bottom,#0f2027,#203a43,#2c5364)';
  stars.style.opacity=1;
 }
 if(mode==='forest'){
  body.style.background='linear-gradient(to bottom,#2e8b57,#98fb98)';
  stars.style.opacity=0;
 }
 if(mode==='ocean'){
  body.style.background='linear-gradient(to bottom,#1e3c72,#2a5298)';
  stars.style.opacity=0;
 }
}

applyMode(localStorage.getItem('mode')||'day');

/* penguin eyes follow mouse */
document.addEventListener('mousemove',(e)=>{
 document.querySelectorAll('.eye::after');
});

/* dance */
danceBtn.addEventListener('click',()=>{
 gsap.to(penguin,{rotation:20,duration:.2,yoyo:true,repeat:5});
});

/* ball jump */
document.getElementById('ball').addEventListener('click',()=>{
 gsap.to('#ball',{y:-200,duration:.4,yoyo:true,repeat:1});
});
