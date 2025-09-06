// set year

document.getElementById('year').textContent = new Date().getFullYear();

// small client-side form handler (demo only)

function handleSubmit(e){

  e.preventDefault();

  const name = document.getElementById('name').value.trim();

  const email = document.getElementById('email').value.trim();

  const phone = document.getElementById('phone').value.trim();

  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message){

    alert('Please complete the required fields.');

    return false;

  }

  const summary = `Thanks ${name}! Your message has been prepared.\n\nEmail: ${email}\nPhone: ${phone || '—'}\nMessage: ${message.substring(0,120)}${message.length>120? '...':''}`;

  alert(summary);

  e.target.reset();

  return false;

}

// fade-up animation stagger

document.addEventListener('DOMContentLoaded', ()=>{

  document.querySelectorAll('.fade-up').forEach((el,i)=>{

    el.style.animationDelay = (i*80)+'ms'

  });

});