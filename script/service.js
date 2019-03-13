const brand          = document.querySelector(".brand"),
      brandHide      = document.querySelector(".brandHide"),
      btnsShow       = document.getElementsByClassName("btnsShow"),
      pet            = document.querySelector(".pet"),
      petHide        = document.querySelector(".petHide"),
      service        = document.querySelector(".service"),
      serviceHide    = document.querySelector(".serviceHide"),
      mainBtnClicked = document.querySelector(".mainBtnClicked"),
      home           = document.querySelector(".home"),
      contact        = document.querySelector(".contact"),
      bone           = document.querySelector(".bone"),
      logo           = document.querySelector(".logo"),
      dog            = document.querySelector(".dog"),
      enter          = document.querySelector(".enter"),
      menuIcon       = document.querySelector(".menuIcon"),
      closeIcon      = document.querySelector(".closeIcon"),
      mainMenu       = document.querySelector(".mainMenu"),
      sideBar        = document.querySelectorAll(".sideBtn");

home.addEventListener("click", function(){
    toggleBtns(this);
    removeBtns(this);
});

brand.addEventListener("click", function(){
    toggleBtns(this);
    removeBtns(this);
});

pet.addEventListener("click", function(){
    toggleBtns(this);
    removeBtns(this);
});

// service.addEventListener("click", function(){
//     toggleBtns(this);
//     removeBtns(this);
// });

contact.addEventListener("click", function(){
    toggleBtns(this);
    removeBtns(this);
});

toggleBtns = (btn) => {
    if (btn == brand){
        brandHide.classList.toggle("btnsShow");
        petHide.classList.remove("btnsShow");
        serviceHide.classList.remove("btnsShow");
    } else if (btn == pet){
        petHide.classList.toggle("btnsShow");
        brandHide.classList.remove("btnsShow");
        serviceHide.classList.remove("btnsShow");
    } else if (btn == service){
        serviceHide.classList.toggle("btnsShow");
        petHide.classList.remove("btnsShow");
        brandHide.classList.remove("btnsShow");
    } else {
        serviceHide.classList.remove("btnsShow");
        petHide.classList.remove("btnsShow");
        brandHide.classList.remove("btnsShow");
    }
};

removeBtns = (sel) => {
    home.firstElementChild.classList.remove("mainBtnClicked");
    brand.firstElementChild.classList.remove("mainBtnClicked");
    pet.firstElementChild.classList.remove("mainBtnClicked");
    service.firstElementChild.classList.remove("mainBtnClicked");
    contact.firstElementChild.classList.remove("mainBtnClicked");
    sel.firstElementChild.classList.add("mainBtnClicked");
};

menuIcon.addEventListener("click", function(){
    this.classList.toggle("menuIconShow");
});

menuIcon.addEventListener("click", function(){
    mainMenu.classList.toggle("mainMenuShow");
    petHide.classList.remove("btnsShow");
    serviceHide.classList.remove("btnsShow");
    brandHide.classList.remove("btnsShow");
});

