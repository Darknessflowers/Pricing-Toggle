const plan = document.querySelector('.switch');
const monthly = Array.from(document.querySelectorAll('.monthlyPrice'));
const annual = document.querySelectorAll('.annualPrice');
const price = document.querySelectorAll('.price');


function switcher() {
  console.log('switching plan');
//when button is clicked remove 'hide from monthly and add to annual
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

plan.addEventListener('click', switcher);