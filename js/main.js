//main.js
window.addEventListener('load',()=> {
/* 고객센터 */
//클릭하면 on 생기고, 클릭하면 on 이 없어지고
//toggle()
// title="고객센터 열기" -> title="고객센터 닫기"

// const title = document.querySelector(".topMenu>dd:nth-of-type(5)")
// console.log(title)

// title.addEventListener("click", e =>{
// e.currentTarget.classList.toggle("on")
// });

const topMenuDD = document.querySelectorAll('dl.topMenu > dd');
topMenuDD[4].addEventListener('click', e => {
  e.currentTarget.classList.toggle("on");
  if(e.currentTarget.children[0].contains("on")){
     e.currentTarget.children[0].setAttribute("title","고객센터 닫기");
  }else {
     e.currentTarget.children[0].setAttribute("title","고객센터 열기");
  }
})

/* 주메뉴 */
//.header_wrap.on
//nav.gnb>ul>li>ul.on
const headerwrap = document.querySelector('.header_wrap');
const submenu = document.querySelectorAll('.gnb>ul>li>ul'); //큰 li [li,li,li,li,li]
const gnb = document.querySelectorAll(".gnb>ul>li"); //[ul,ul,ul,ul]

for(var i=0; i<gnb.length; i++){
  gnb[i].addEventListener('mouseover', e => {

  //고객센터에 on붙어 있으면 고객센터의 on을 지운다.
  if(topMenuDD[4].classList.contains('on')){
    topMenuDD[4].classList.remove("on");
  }
  //검색박스에 on붙어 있으면 검색박스의 on을 지운다.
if(srchopen.classList.contains('on')){
    srchopen.classList.remove("on");
    srchbox.classList.remove("on");
}

    headerwrap.classList.add("on");
    submenu.forEach(item => {
      item.classList.add("on")
    });
  }); //mouseover

  gnb[i].addEventListener('mouseout', e => {
    headerwrap.classList.remove("on");
    submenu.forEach(item => {
      item.classList.remove("on")
    });
  }); //mouseout

  gnb[i].children[0].addEventListener('focus', ()=> {
    headerwrap.classList.add("on");
    submenu.forEach(item => {
    item.classList.add("on");
    });
  }); //focus

  gnb[i].children[0].addEventListener('blur', () => {
    headerwrap.classList.remove("on");
    submenu.forEach(item => {
    item.classList.remove("on");
    });
  }); //blur
}

/* 검색열기닫기 */
const srchbox = document.querySelector("form.srch")
const srchopen = document.querySelector("span.srch_open")

srchopen.addEventListener('click', e =>  {
 e.preventDefault();
 e.currentTarget.classList.toggle("on");
 srchbox.classList.toggle("on");

 if(e.currentTarget.classList.contains("on")) {
  e.currentTarget.children[0].setAttribute("title","검색서식닫기")
 }else{
  e.currentTarget.children[0].setAttribute("title","검색서식열기")
 }
});

/* 로그인 이미지 */
//a.appear 안에 img 00000.png ~ 00056.png
//a.loop 안에 img 000 00 ~ 000 81.png

let appear = '';
for(let i=0; i<57; i++){
  if(i<10){
  appear += `<img src="images/appear/appear_0000${i}.png" alt="${i}" />`;
  }else{
  appear += `<img src="images/appear/appear_000${i}.png" alt="${i}" />`;
  }
}
document.querySelector("a.appear").innerHTML = appear;


let loop = '';
for(let i=0; i<57; i++){
  if(i<10){
  loop += `<img src="images/loop/loop_0000${i}.png" alt="${i}" />`;
  }else{
  loop += `<img src="images/loop/loop_000${i}.png" alt="${i}" />`;
  }
}
document.querySelector("a.loop").innerHTML = loop;


/* 로그인 애니메이션 */
//appear 0 ~ 56 이미지 각각에 animation 속성 적용
//animation: ani 2.85s linear 0s 1 ;
//animation: ani 2.85s linear 0.05s 1 ;
//animation: ani 2.85s linear 0.10s 1 ;
//animation: ani 2.85s linear 2.80s 1 ;

const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img");
for(let i=0; i<appearImgs.length; i++){
  appearImgs[i].style.animation = `ani 2.85s linear ${i*delay}s 1`;
}


//loop 0 ~ 81 이미지 각각에 animation 속성 적용
//animation: ani 4.1s linear 2.85s infinite;
//animation: ani 4.1s linear 2.90s infinite;
//animation: ani 4.1s linear 2.95s infinite;
const loopImgs = document.querySelectorAll(".loop>img");
for(let j=0; j<loopImgs.length; j++){
  loopImgs[j].style.animation = `ani 4.1s linear ${2.85+(j*delay)}s infinite`;
}




/* contetn1 - 퀵메뉴 이미지 생성 */
//for()문 이용해서 <img>를 quick01_00000.png~quick01_00019.png 생성
//<span>안에 넣기

//content1
//li에 마우스 올렸을 때 이미지에 애니메이션 적용
//마우스 뗏을 때 이미지에 애니메이션 삭제

const quickSpan = document.querySelectorAll('.content1>ul>li>a>span')
const content1Li= document.querySelectorAll('.content1 ul li');

for(let j=0; j<quickSpan.length; j++) { //span 4개 0,1,2,3
  let images='';
  for(let i=0; i<20; i++){ //각 span 안에 img 20개 생성
       if(i<10){
        images += `<img src="images/quick0${j+1}_0000${i}.png" alt="${i}" />`;
       }else{
        images += `<img src="images/quick0${j+1}_000${i}.png" alt="${i}" />`;
       }
    }
    quickSpan[j].innerHTML = images;
}


for(let j=0; j<content1Li.length; j++){
  content1Li[j].addEventListener('mouseover', e => { //li
    for(let k = 0; k<20; k++){
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[k].style.animation = `ani .3s linear ${delay * k}s 1`;
    }
  })
}

for(let j=0; j<content1Li.length; j++){
  content1Li[j].addEventListener('mouseout', e => {
    for(let k = 0; k<20; k++){
    let imgLi = e.currentTarget.children[0].children[0].children;
    imgLi[k].style.animation = `none`;
    }
  })
}


//배너
const btnnext = document.querySelector("a.next");
const btnprev = document.querySelector("a.prev");
const bnnframe = document.querySelector(".banner_frame");
const bnnsection = document.querySelectorAll(".banner_frame>section");
const bnn_rollA = document.querySelectorAll(".rolling li a")

let bnnNum = 0;
let lastNum = bnnsection.length -1;
let bnnW = document.querySelector('body>section section').offsetWidth;   // offsetWidth : 가로값을 가져온다.
window.addEventListener('resize',() => {
  bnnW = document.querySelector('body>section section').offsetWidth
});
// width 값을 가져오는 다른방법
// let bnnW = window.innerWidth 
// window.onresize = function(event){
//    bnnW = window.innerWidth
// }

//next버튼을 눌렀을 때 
//배너번호 1증가
//배너번호가 마지막 배너번호보다 크면 배너 번호가 다시 0으로
//배너프레임의 left값 변경해서 배너 움직이게
btnnext.addEventListener('click', e => {
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum = 0;
  bnnframe.style.left = `${bnnNum * -bnnW}px`;
  // bnn_rollA.forEach(item => {
  //   item.classList.remove('on');
  // });
  // bnn_rollA[bnnNum].classList.add("on")
  secwhite(bnnNum);
});

//prev 버튼 눌렀을 때
btnprev.addEventListener('click', e => {
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum = lastNum;
  bnnframe.style.left = `${bnnNum * -bnnW}px`;
  secwhite(bnnNum);
});


//오토배너 작동 - setTimeout 사용, 재귀함수 사용, 5초 마다
let autoBanner = () => {
    bnnNum++;
    if(bnnNum>lastNum) bnnNum = 0;
    bnnframe.style.left = `${bnnNum * -bnnW}px`;
    secwhite(bnnNum);
    autoBnn = setTimeout(autoBanner, 5000); //재귀함수 
}
let autoBnn = setTimeout(autoBanner, 5000); //최초 함수 호출

// 재생/멈춤 버튼
let flag = true;
const btnplay = document.querySelector('a.play');
btnplay.addEventListener('click', e=>{
  e.preventDefault();
  if(flag){//멈춰라
  clearTimeout(autoBnn);
  btnplay.classList.add('pause');
  flag = false;
  }else{//재생
    autoBnn = setTimeout(autoBanner, 5000);
    btnplay.classList.remove('pause');
    flag = true;
  }
})

/* 롤링 클릭 */
const bnnRollLists = document.querySelectorAll(".banner_roll>li>a");
for(let i=0; i<bnnRollLists.length; i++){
    bnnRollLists[i].addEventListener("click", e => {
        clearTimeout(autoBnn);
        bnnframe.style.left = `${i * -bnnW}px`;
        activation(bnnRollLists,i)
    });
}

function activation(list,index){
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}

// section에 .white가 있으면 각 요소에 .white 붙이기
const arrowA = document.querySelectorAll('.arrow > a');
const rollingA = document.querySelectorAll('.rolling a');

let secwhite = (bannerNumber) => {
    if(bnnsection[bannerNumber].classList.contains('white')) {
      arrowA.forEach(item => {
          item.classList.add('white'); 
       });
       rollingA.forEach(item => {
          item.classList.add('white');
       });
    }else{
      arrowA.forEach(item => {
        item.classList.remove('white'); 
     });
     rollingA.forEach(item => {
        item.classList.remove('white');
     });
    }
    bnn_rollA.forEach(item => {
      item.classList.remove("on");
    });
    bnn_rollA[bannerNumber].classList.add("on");
}

// 스크롤 이벤트
window.addEventListener('scroll',() => {
  let scroll = document.querySelector('html').scrollTop;

  //도넛 
  //왼쪽
  const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
  const doughnut_Left_s = document.querySelector(".doughnut_Left_s");
  const combine_Left = document.querySelector(".combine_Left");

  combine_Left.style.top = `${scroll*0.8}px`;
  doughnut_Left_s.style.top = `${400+scroll*0.4}px`;
  doughnut_Left_L.style.top = `${2200-scroll*0.8}px`;
  //가운데
  const doughnut_Center_M = document.querySelector(".doughnut_Center_M");

  doughnut_Center_M.style.top = `${2000-scroll*1}px`;

  //오른쪽  //마무리 해야함
  const doughnut_right_M = document.querySelector(".doughnut_right_M");
  const doughnut_right_s = document.querySelector(".doughnut_right_s");
  const combine_right = document.querySelector(".combine_right");

  combine_right.style.top = `${-200+scroll*0.8}px`;
  doughnut_right_M.style.top = `${-200+scroll*0.8}px`;
});

//content3
//li 하나 하나에 마우스 오버하면 li에 .on이 붙어라 마우스 아웃 하면 .on을 지워라

const all = document.querySelectorAll(".content3_inner>div>ul>li");

all.forEach(item => {
  item.addEventListener('mouseover', e => {
    e.currentTarget.classList.add('on');
  });
  item.addEventListener('mouseout', e => {
    e.currentTarget.classList.remove('on');
  });
});

// 대분류  //content3
// - 각 클래스이름에 해당되는 li만 따로 모아서 저장해놓고
const group = document.querySelectorAll(".content3_inner>ul>li>a"); //5개 
//[a,a,a,a,a]
const ent = document.querySelectorAll(".content3_inner > div > ul > li.ent");
const shop = document.querySelectorAll(".content3_inner > div > ul > li.shop");
const diner = document.querySelectorAll(".content3_inner > div > ul > li.diner");
const box = document.querySelectorAll(".content3_inner > div > ul > li.box");
// - 모든 li 화면에 안보이게 하고
for(let k=0; k<group.length; k++){
  group[k].addEventListener('click', e => { //a
      e.preventDefault();
      group.forEach(item =>{
        item.classList.remove('on');
      });
      e.currentTarget.classList.add('on');

      all.forEach(item => {
        item.style.display = "none";
      });
      let className = e.currentTarget.parentElement.getAttribute("class");
      switch(className){
        case "ent" :
          ent.forEach(item => {
              item.style.display = "block";
          });
          break;
        case "shop" :
          shop.forEach(item => {
              item.style.display = "block";
          });
          break;
        case "diner" :
            show(diner)
          break;
        case "box" :
            show(box);
            break;
        default :
            show(all);
            break;
      }
      function show(className){
        className.forEach(item => {
            item.style.display = 'block';
        })
      }
  })
}
// 대분류 li a 하나하나를 클릭했을 때
// class 속성값을 가져와서 변수에 저장
// 변수값이랑 정확하게 일치하는 케이스 찾아서
// 해당 클래스 이름에 해당되는 li만 보이게 설정한다.

//패밀리 사이트
const family_site = document.querySelector("dd.family_site")

family_site.addEventListener('click', e => {
  e.preventDefault();
  family_site.classList.toggle("on")
   });

//탑 버튼
const topbtn = document.querySelector(".top>a");

topbtn.addEventListener('click', e => {
e.preventDefault();
window.scroll({
  top:0,
  left:0,
  behavior:'smooth'
});
});

//스크롤 움직이면 스크롤 위치에 따라서 탑버튼이 움직임
window.addEventListener('scroll', () => {
  let scroll = document.querySelector('html').scrollTop
  console.log(scroll)
  if(scroll <= 0){
    topbtn.classList.remove("on","ab"); 
  }else if(scroll > 2410){
     topbtn.classList.add("on");
     topbtn.classList.add("ab");
  }else{
    topbtn.classList.remove("ab");
    topbtn.classList.add("on");

  }
});


// 햄버거 버튼 클릭
// 1. div.mob.on
// 2. div.mobBtn_close.on
// 3. body.on,div.bg.on

// 모바일 닫기 클릭
const mob = document.querySelector(".mob")
const mobBtn = document.querySelector(".mobBtn")
const mobBtnClose = document.querySelector(".mobBtn_close")
const bg = document.querySelector(".bg")
const body = document.querySelector("body")


mobBtn.addEventListener("click", e => {
  e.preventDefault();
  mob.classList.add("on");
  body.classList.add("on");
  bg.classList.add("on");
  mobBtnClose.classList.add("on");
});

mobBtnClose.addEventListener("click", e => {
  e.preventDefault();
  mob.classList.remove("on");
  body.classList.remove("on");
  bg.classList.remove("on");
  mobBtnClose.classList.remove("on");
 });


// 모바일 탑메뉴
const topMenuDL = document.querySelector(".mob_topMenu>dd:nth-of-type(5)")
const topMenuDd = document.querySelector(".mob_topMenu>dd:nth-of-type(5)>ul")

topMenuDL.addEventListener('click', e => {
  e.preventDefault();
  topMenuDd.classList.toggle("on");
  e.currentTarget.classList.toggle("on")
});


// 모바일 주메뉴
const subMenu = document.querySelectorAll(".mob .mob_gnb>ul>li")
const sub = document.querySelector(".mob .mob_gnb>ul>li>ul")

for(i=0; i<subMenu.length; i++) {
  subMenu[i].addEventListener("click", e => {
  e.preventDefault();
  e.currentTarget.children[1].classList.toggle("on")
  e.currentTarget.classList.toggle("on")
  });
}

});