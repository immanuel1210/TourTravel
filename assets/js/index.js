const menuIcon = document.querySelector('.menu-toggle');
const menuActive = document.querySelector('ul');
const serviceCard = document.querySelector('.service-card');
// const reviewCard = document.querySelector('.review-slider');
// var widthScreen = window.innerWidth; 
// Variabel maka hanya akan mengambil lebar layar sekali saja diawal

var swiper = new Swiper(".destination-cards", {
  effect: "none",
  grabCursor: true,
  centeredSlides: false,
  spaceBetween: 4,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".bx-chevron-right-circle",
    prevEl: ".bx-chevron-left-circle",
},
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function navMenu(){
    menuIcon.classList.toggle('bxs-grid-alt');
    menuIcon.classList.toggle('bx-x');
    menuActive.classList.toggle('active');   
}

function mouseOn(element){
        if(window.innerWidth < 1000){
          // Mengikuti lebar layar secara langsung
          element.style.backgroundColor = "#FFA451";
          element.style.marginTop = "0";
        }else{
          element.style.height = "300px";
          element.style.backgroundColor = "#FFA451";;
        }
}
function mouseOut(element){
      if(window.innerWidth < 1000){
        element.style.backgroundColor = "#1F4590";
        element.style.marginTop = "0";
      }else{
        element.style.backgroundColor = "#1F4590";
        element.style.height = "220px";
      }
}
menuIcon.addEventListener('click',navMenu);


      
      
      
      