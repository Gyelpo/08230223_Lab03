// ===== Lab 03 + Enhanced Portfolio Script =====

// --- Time-based greeting ---
const greeting = document.getElementById('greeting');
const h = new Date().getHours();
greeting.textContent =
  h < 12 ? '🌅 Good Morning!' :
  h < 18 ? '🌞 Good Afternoon!' : '🌙 Good Evening!';

// --- Section navigation via icons ---
const icons = document.querySelectorAll('.icon-item');
const sections = document.querySelectorAll('.section');
icons.forEach(icon=>{
  icon.addEventListener('click',()=>{
    sections.forEach(sec=>sec.classList.add('hidden'));
    const target=document.getElementById(icon.dataset.target);
    target.classList.remove('hidden');
    setTimeout(()=>target.classList.add('show'),10);
    window.scrollTo({top:target.offsetTop-60,behavior:'smooth'});
  });
});

// --- Contact form event handling ---
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  alert(`Thank you ${name}! Your message has been recorded.`);
  e.target.reset();
});

// --- Dark / Light mode toggle ---
const toggle=document.getElementById('modeToggle');
const body=document.body;
if(localStorage.getItem('theme')==='dark') body.classList.add('dark-mode');

toggle.addEventListener('click',()=>{
  body.classList.toggle('dark-mode');
  const icon=toggle.querySelector('i');
  if(body.classList.contains('dark-mode')){
    icon.classList.replace('fa-moon','fa-sun');
    localStorage.setItem('theme','dark');
  }else{
    icon.classList.replace('fa-sun','fa-moon');
    localStorage.setItem('theme','light');
  }
});

// --- Fade-in animation when section appears ---
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add('show');
  });
},{threshold:.2});
document.querySelectorAll('.fade-section').forEach(el=>observer.observe(el));
