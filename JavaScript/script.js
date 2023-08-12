let typed = new Typed("#element", {
  strings: ["Front-end Development", "Back-end Development", "Web design"],
  typeSpeed: 40,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
});
//                                                PROJECTS SLIDER

const swiper = new Swiper(".swiper", { 
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
},

  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let heading = document.getElementById("headingg");
let paragraph = document.getElementById("paragraphh");

function updateSlideContent(activeSlideIndex) {
  if (activeSlideIndex === 0) {
    heading.style.color = "#2874f0";
    heading.innerHTML = "E-commerce Website";
    paragraph.innerHTML = "The project involves creating a clone of <b>Flipkart</b> using front-end development skills, including <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. Users can browse products, add them to the cart, and complete purchases through a visually appealing and <b>user-friendly</b> interface.";
  } else if (activeSlideIndex === 1) {
    heading.style.color= "#2cac57";
    heading.innerHTML = "Solar Solutions Startup";
    paragraph.innerHTML = "This project is a dynamic website for a solar solutions startup. Built from scratch using <b>HTML</b> , <b>CSS</b> (Tailwind), and <b>JavaScript</b>. Discover clean energy options through a sleek and intuitive interface. See how technology is driving the future of sustainability.";
  } else if (activeSlideIndex === 2) {
    heading.style.color= "#7b329c";
    heading.innerHTML = "Web Applications"; 
    paragraph.innerHTML = "Proudly presenting a series of web applications I've designed and developed. From a functional <b>Todo list</b> to a versatile <b>Calculator</b>, a secure <b>Password Autogenerator</b>, an engaging <b>Music Player</b>, and an interactive <b>Quiz App</b>. These applications reflect my dedication to creating impactful digital solutions.";
  }
  else if (activeSlideIndex === 3) {
    heading.style.color= "#202425";
    heading.innerHTML = "My Portfolio"; 
    paragraph.innerHTML = "In this project, I developed a visually stunning <b>portfolio website</b> using front-end development skills, including CSS Grid, Flexbox, various CSS properties and JavaScript. The portfolio showcases my <b>skills</b>, <b>projects</b>, and <b>achievements</b> in a responsive and visually appealing manner.";
  }
}


swiper.on("slideChange", () => {
  let activeSlideIndex = swiper.realIndex;  //realindex for loop
  updateSlideContent(activeSlideIndex);
});
updateSlideContent(0);


let contactButton = document.getElementById("submit-button")
contactButton.addEventListener("click",(e) =>
{
  e.preventDefault() 
})

//                                                       DARK THEME

const darkIcon = document.getElementById("dark-icon");
let isDarkMode = false;

darkIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    darkIcon.src = "css and images/sun.png"; 
  } else {
    darkIcon.src = "css and images/moon.png"; 
  }
});

//  DRAG TEXT ARROW

let drag = document.getElementById("right-slider")
let arrow_icon = document.getElementById("arrow-icon")

drag.addEventListener("mouseover", () =>
{
    arrow_icon.src = "css and images/left-arrow.png"
})
drag.addEventListener("mouseout", () => {
  arrow_icon.src = "css and images/rightarrow.png";
});







