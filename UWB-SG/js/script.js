const pulseButton = document.getElementById('myPulsingButton');
const firstMain = document.querySelector('main');
const firstHeader = document.querySelector('header');

function pulsingClick(){
  let scrollValue = firstMain.getBoundingClientRect().top - firstHeader.getBoundingClientRect().height;
  scrollTo({top: scrollValue, behavior:'smooth'});
  // alert(scrollValue);
}

pulseButton.addEventListener('click', pulsingClick);

