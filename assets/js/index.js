const menuIcon = document.querySelector('.menu-toggle');
const menuActive = document.querySelector('ul');
const serviceCard = document.querySelector('.service-card');

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// const serviceCard = document.querySelectorAll('.service-card');
// const sliderContainer = document.querySelector('.card-carousel');
// const sliderContent = document.querySelector('.destination-card');
// const prevButton = document.querySelector('#prev-btn');
// const nextButton = document.querySelector('#next-btn');
// const itemWidth = sliderContainer.clientWidth; // Width of each slider item

// let currentIndex = 0;

// Function to move the slider to a specific index
// function moveToIndex(index) {
//   if (index < 0 || index >= sliderContent.children.length) return;
//   currentIndex = index;
//   const translateX = -currentIndex * itemWidth;
//   sliderContent.style.transform = `translateX(${translateX}px)`;
// }

// Event listeners for previous and next buttons
// prevButton.addEventListener('click', () => {
//   moveToIndex(currentIndex - 1);
// });

// nextButton.addEventListener('click', () => {
//   moveToIndex(currentIndex + 1);
// });


// const carousel = document.getElementsByClassName('card-carousel');
// firstImage = document.querySelectorAll('.destination-card')[0];
// arrowIcons = document.querySelectorAll('.destination-button i');

// firstImageWidth = firstImage.clientWidth + 10;

// firstImageWidth = firstImage.clientWidth + 14;
// arrowIcons.forEach(icon => {
//         icon.addEventListener('click',() => {
//                 carousel.scrollLeft += icon.id == "left" ? -firstImageWidth : firstImageWidth;
//         })        
// });
function navMenu(){
    menuIcon.classList.toggle('bxs-grid-alt');
    menuIcon.classList.toggle('bx-x');
    menuActive.classList.toggle('active');   
}

// function MouseOn(event) {
//     event.target.style.backgroundColor = "#FFA451";
//     event.target.style.height = "300px";
//     event.target.style.marginTop = "70px";
// }

// function MouseOut(event) {
//     event.target.style.backgroundColor = "#1F4590";
//     event.target.style.height = "220px";
//     event.target.style.marginTop = "150px";
// }
// for (let i = 0; i < serviceCard.length; i++) {
//     serviceCard[i].addEventListener('mouseover', MouseOn);
//     serviceCard[i].addEventListener('mouseout', MouseOut);
// }
function mouseOn(element){
        element.style.backgroundColor = "#FFA451";
        element.style.height = "300px";
        element.style.marginTop = "70px";
}
function mouseOut(element){
        element.style.backgroundColor = "#1F4590";
        element.style.height = "220px";
        element.style.marginTop = "150px";
}
menuIcon.addEventListener('click',navMenu);
// serviceCard.addEventListener('mouseover',mouseOn);
// serviceCard.addEventListener('mouseout',mouseOut);


      
      
      
      