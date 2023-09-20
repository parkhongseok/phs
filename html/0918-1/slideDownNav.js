//li요소들을 navItems변수에 할당
const navItems = document.querySelectorAll(".gnb > li");

//navItems변수에 할당한 li요소들을 순환하면서 mouseover 이벤트 발생
navItems.forEach(item => item.addEventListener("mouseover",() => {
  
  //이벤트가 발생한 li요소의 자식인 .sub요소를 선택
  const sub = item.querySelector('.sub');

  //sub의 maxHeight값을 sub요소안의 콘텐츠의 높이로 적용
  sub.style.maxHeight = sub.scrollHeight + "px"
}))

//navItems변수에 할당한 li요소들을 순환하면서 mouseout 이벤트 발생
navItems.forEach(item => item.addEventListener("mouseout",() => {
  
  //이벤트가 발생한 li요소의 자식인 .sub요소를 선택
  const sub = item.querySelector('.sub');

  //sub의 maxHeight값을 0으로 변경
  sub.style.maxHeight = "0px"
}))