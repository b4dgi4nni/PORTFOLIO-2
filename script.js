// script.js
document.getElementById('contact-btn').addEventListener('click', () => {
    document.getElementById('contact-sidebar').classList.add('visible');
  });
  
  document.getElementById('close-sidebar').addEventListener('click', () => {
    document.getElementById('contact-sidebar').classList.remove('visible');
  });