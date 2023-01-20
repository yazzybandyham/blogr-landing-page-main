const menuBtn = document.querySelector('.nav-toggle-burger');
let menuOpen = false;

// Toggles menu burger
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});