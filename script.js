// 1. Dark / Light mode (remembers your choice)
const root=document.documentElement,toggle=document.getElementById('theme-toggle');
try{const saved=localStorage.getItem('theme');if(saved)root.dataset.theme=saved;}catch(e){}
function label(){toggle.textContent=root.dataset.theme==='dark'?'Light mode':'Dark mode';}
label();
toggle.addEventListener('click',()=>{
  root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
  try{localStorage.setItem('theme',root.dataset.theme);}catch(e){}
  label();
});
// 2. Back-to-top button
const topBtn=document.getElementById('top-btn');
window.addEventListener('scroll',()=>{topBtn.style.display=window.scrollY>300?'block':'none';});
topBtn.addEventListener('click',()=>window.scrollTo({top:0}));
// 3. Welcome message based on the time of day (Home page)
const greet=document.getElementById('greeting');
if(greet){const h=new Date().getHours();
  greet.textContent=(h<12?'Good morning':h<18?'Good afternoon':'Good evening')+'! Welcome to my portfolio.';}
// 4. Show / Hide information (About page)
const moreBtn=document.getElementById('more-btn'),more=document.getElementById('more-info');
if(moreBtn){moreBtn.addEventListener('click',()=>{
  const open=more.classList.toggle('show');
  moreBtn.textContent=open?'Hide fun facts':'Show fun facts';
  moreBtn.setAttribute('aria-expanded',open);
});}
