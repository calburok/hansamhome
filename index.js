const header = document.querySelector("header");
const logo = document.querySelector(".nav__logo");
const gnb = document.querySelector(".gnb__wrab");
const nav__button = document.querySelector(".nav__button");
const swiper__ani = document.querySelector(".swiper");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("add__opacity");

    swiper__ani.classList.add("scale__small");
  } else {
    header.classList.remove("add__opacity");

    swiper__ani.classList.remove("scale__small");
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  disableOnInteraction: false,
  speed: 1000,
  // direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 3000, //3초마다 자동전환
    disableOnInteraction: false,
  },
  speed: 800,
});

//지셉
gsap.registerPlugin(ScrollTrigger);

const TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".swiper",
    start: "bottom top",
    markers: true,
    speed: 1000,
  },
});

TL.fromTo(
  ".food__text__top",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration:  0.25,
  }
);

TL.fromTo(
  ".food__text__mid1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration:  0.25,
  }
);
TL.fromTo(
  ".food__text__mid2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration:  0.25,
  }
);
TL.fromTo(
  ".foot__text__bottom1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration:  0.25,
  }
);
TL.fromTo(
  ".foot__text__bottom2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration:  0.25,
  }
);

TL.fromTo(
  ".img__carrot",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration:  0.25,
  }
);

TL.fromTo(
  ".img__leaf",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration:  0.25,
  }
);

TL.fromTo(
  ".img__egg",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration:  0.25,
  }
);

const TL1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".swiper",
    start: "bottom top",
    markers: true,
    speed: 1,
    repeat: -1,
  },
});

TL1.to(".star1", { rotate: "720deg", duration: 30 }, 0);
TL1.to(".star2", { rotate: "-720deg", duration: 30 }, 0);
TL1.to(".star3", { rotate: "-720deg", duration: 30 }, 0);

TL1.to(".star4", { rotate: "-720deg", duration: 30 }, 0);

TL1.to(".star6", { rotate: "720deg", duration: 30 }, 0);

const TL2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".swiper",
    start: "bottom top",
    markers: true,
    speed: 1,
  },
});

TL2.to(".star4", {
  y: 20,
  x: 5,
  duration: 1,
  repeat: -1,
  yoyo: true,
});
TL2.to(".star4", {
  y: -20,
  x: -5,
  duration: 2,
  repeat: -1,
  yoyo: true,
});

TL2.to(
  ".star5",
  {
    y: 20,
    x: -10,
    duration: 1,
    repeat: -1,
    yoyo: true,
  },
  0
);
TL2.to(".star5", {
  y: -20,
  x: 10,
  duration: 2,
  repeat: -1,
  yoyo: true,
});


// 핀 스크롤
const TL3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".service",
    start: "top top",
    end: "150% top",
    pin: true,
    scrub: true,
    markers: true,
  },
});
 


TL3.to(".service__wrap", {
  duration: 200.5,
ease: "slow(0.7,0.7,false)",
  x: -800,
});

const TL4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".spring",
    start: "30% bottom",
    end: "10% top",
    scrub: 1,
    markers: true,
  },
});

TL4.to(".spring__bigcard", {
  scale: 1,
  duration: 1,
  yoyo: true,
});


const TL3__1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".service",
    start: "10% 60%",
    end: "150% top",
    markers: true,
  },
});

TL3__1.fromTo([".text__wrap", ".card__green", ".card__pink", ".card__yellow"], 
  { opacity: 0, x: 1000 }, 
  { opacity: 1, duration: 0.8, x: 0, stagger: 0.25 ,} // 0.5초 간격으로 시작
);



// 호버 애니메이션

const peoplebox = document.querySelector(".peoplebox");
const peopleline = document.querySelector(".peopleline");
const peopleline2 = document.querySelector(".peopleline2");
const cardTop = document.querySelector(".cardTop ");
const person = document.querySelector(".person");
const person1 = document.querySelector(".person1");

const TL5 = gsap.timeline({
  scrub: true,
});

cardTop.addEventListener("mouseover", () => {
  TL5.to(".person", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person1", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person2", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person3", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person4", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person5", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person6", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person7", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person8", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person9", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person10", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person11", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person12", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person13", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person14", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person15", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person16", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person17", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person18", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person19", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person20", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person21", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person22", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person23", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person24", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person25", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person26", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person27", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person28", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person29", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person30", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person31", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person32", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person33", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person34", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person35", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person36", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person37", {
    opacity: 1,
    duration:  0.25,
  });
  TL5.to(".person38", {
    opacity: 1,
    duration:  0.25,
  });
});

const TL6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".confident",
    start: "50% 50%",
    markers: true,
  },
});

TL6.fromTo(
  ".confident__card",
  {
    x: 2000,
  },
  {
    x: 0,
    duration: 2,
    stagger: 0.1,
    ease: "elastic.out(1,0.7)",
  }
);

//페이지네이션

const TL7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sequenceCard1",
    start: "top 10%",
    end: "120% top",
    pin: true,
    scrub: true,
    markers: true,
  },
});
TL7.to(".sequenceCard1", { scale: 1,duration:100});
TL7.to(".sequenceCard1", { scale: 0,   });

const TL8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sequenceCard2",
    start: "top 10%",
    end: "120% top",
    pin: true,
    scrub: true,
    markers: true,
  },
});
TL8.to(".sequenceCard2", { scale: 1, });
TL8.to(".sequenceCard1", { scale: 0 ,});
const TL9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sequenceCard3",
    start: "top 12%",
    end: "9% 9% ",
    pin: true,
    scrub: true,
    markers: true,
  },
});


// 슬라이드 도어

const TL10 = gsap.timeline({
scrollTrigger: {
  trigger: ".card__door",
  start: "top 80%",
  markers: true,
}
})

TL10.fromTo(".left__doorcard", { opacity : 0, x : -100} ,{opacity: 1, x: 0, duration:0.7},0)
TL10.fromTo(".right__doorcard", { opacity : 0, x : 100} ,{opacity: 1, x: 0, duration:0.7},0)

//멀티스와이퍼


