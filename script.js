const toggler = document.querySelector('#checkbox');
const monthly = Array.from(document.querySelectorAll('.monthlyPrice'));
const annual = document.querySelectorAll('.annualPrice');

function switcher() {
monthly.forEach(function(item) {
  if(item.classList.contains('hide')) {
    item.classList.remove('hide');
  } else {
    item.classList.add('hide');
  }
});
  annual.forEach(function(item) {
    if(!item.classList.contains('hide')) {
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
    }
  });
}
function handleKeyUp(e) {
  if(e.key ==='ArrowRight' && toggler.checked === false) {
    switcher();
    toggler.checked = true;
  } 
  else if (e.key ==='ArrowLeft' && toggler.checked === true) {
    switcher();
    toggler.checked = false;
  }
}
window.addEventListener('keyup', handleKeyUp);
toggler.addEventListener('change', switcher);