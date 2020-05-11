let menuToggle = document.querySelector(".menu__hamburger"),
  navWrap = document.querySelector(".categories"),
  menuState = 0,
  menuBasket = document.getElementById("menu__basket"),
  basketWrap = document.querySelector(".basket"),
  menuSearch = document.getElementById("menu__search"),
  searchWrap = document.querySelector(".search"),
  menuHome = document.getElementById("menu__home"),
  homeWrap = document.querySelector(".home"),
  menuLiving = document.getElementById("living__room"),
  livingWrap = document.querySelector(".shop");

menuToggle.addEventListener("click", function () {
  if (menuState == 0) {
    menuState = 1;
    TweenLite.set(navWrap, { xPercent: 0 });
    TweenLite.to(navWrap, 0.5, { autoAlpha: 1 });
  } else if (menuState == 1) {
    menuState = 0;
    TweenLite.to(navWrap, 0.5, { xPercent: 100, autoAlpha: 0 });
  }
});

menuSearch.addEventListener("click", function () {
  TweenLite.set(searchWrap, { xPercent: 0 });
  TweenLite.to(searchWrap, 0.5, { autoAlpha: 1 });

  TweenLite.to(basketWrap, 0, { xPercent: -100, autoAlpha: 0 });
  TweenLite.to(homeWrap, 0, { xPercent: 0, opacity: 0.1 });
  TweenLite.to(livingWrap, 0, { xPercent: 0, autoAlpha: 0 });


});

menuBasket.addEventListener("click", function () {
  TweenLite.set(basketWrap, { xPercent: 0 });
  TweenLite.to(basketWrap, 0.5, { autoAlpha: 1 });

  TweenLite.to(searchWrap, 0, { xPercent: -100, autoAlpha: 0 });
  TweenLite.to(homeWrap, 0, { xPercent: 0, opacity: 0.1 });
  TweenLite.to(livingWrap, 0, { xPercent: 0, autoAlpha: 0 });


});

menuLiving.addEventListener("click", function () {
  TweenLite.set(livingWrap, { xPercent: 0 });
  TweenLite.to(livingWrap, 0.5, { autoAlpha: 1 });
  
  TweenLite.to(basketWrap, 0, { xPercent: -100, autoAlpha: 0 });
  TweenLite.to(searchWrap, 0, { xPercent: -100, autoAlpha: 0 });
  TweenLite.to(homeWrap, 0, { xPercent: 0, opacity: 0.1 });

});

menuHome.addEventListener("click", function () {
  TweenLite.set(homeWrap, { xPercent: 0 });
  TweenLite.to(homeWrap, 0.5, { autoAlpha: 1 });

  TweenLite.to(searchWrap, 0, { xPercent: -100, autoAlpha: 0 });
  TweenLite.to(basketWrap, 0, { xPercent: -100, autoAlpha: 0 });
  TweenLite.to(livingWrap, 0, { xPercent: 0, autoAlpha: 0 });


});
