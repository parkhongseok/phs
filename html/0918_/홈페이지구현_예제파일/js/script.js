window.addEventListener('scroll',F)

function F(){
  const scroll = window.scrollY;
  const worksTop = document.querySelector('#works').getBoundingClientRect().top + scroll
  const member = document.querySelector('.member')
  if (scroll > worksTop){
    member.classList.add('on');
  }else{
    member.classList.remove('on');
  }
}

//스크류바는 너무 셔
const btn = document.querySelector('.top')
window.addEventListener('scroll', G)

function G(){
  const scroll = window.scrollY;
  if(scroll > 20){
    btn.style.display = 'block';
  }else{
    btn.style.display='none';
  }
}


btn.addEventListener('click', H)
function H(e){
  e.preventDefault()
  window.scrollTo({
    behavior:'smooth',
    left:0,
    top:0
  })
}