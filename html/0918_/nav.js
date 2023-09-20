const navItems = document.querySelectorAll(".gnb > li");

const G = function(){
  const sub = item.querySelector('.sub');
  sub.style.maxHeight = sub.scrollHeight + "px"
}

const F = function(item){
  item.addEventListener("mouseover",G)
}

navItems.forEach(F)
