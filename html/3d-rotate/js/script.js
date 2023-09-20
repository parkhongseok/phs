//버튼과 section,nav요소를 선택
const btnMenu = document.querySelector(".btnMenu")
const section = document.querySelector("section")
const nav = document.querySelector("nav");

//메뉴 버튼에 클릭이벤트 발생시
btnMenu.addEventListener("click",() => {
  //버튼과 section과 nav에 on클래스를 추가
  btnMenu.classList.add("on")
  section.classList.add("on")
  nav.classList.add("on")
})

//내비메뉴에 클릭이벤트 발생시
const navList = document.querySelectorAll("#gnb > li")
//forEach((요소,인덱스),function)
navList.forEach((item,index) => item.addEventListener("click",() => {
  //버튼과 section과 nav에 on클래스를 제거
  btnMenu.classList.remove("on")
  section.classList.remove("on")
  nav.classList.remove("on")
  //box요소들을 선택
  const boxs = document.querySelectorAll('section > div');
  //모든 box요소에 on클래스를 제거
  boxs.forEach(box => box.classList.remove("on"))
  //클릭한 메뉴의 순번과 같은 순번의 box에 on클래스를 추가
  boxs[index].classList.add("on")
}))