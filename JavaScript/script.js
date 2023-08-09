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
    heading.innerHTML = "Flipkart Clone";
    paragraph.innerHTML = "The project involves creating a clone of <b>Flipkart</b> using front-end development skills, including <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. Users can browse products, add them to the cart, and complete purchases through a visually appealing and <b>user-friendly</b> interface.";
  } else if (activeSlideIndex === 1) {
    heading.innerHTML = "Google Web Page Clone";
    paragraph.innerHTML = "Using front-end development skills, I created a clone of the <b>Google web page</b>. The project includes replicating the <b>layout</b>, <b>styling</b>, and <b>functionality </b> of the Google search interface, allowing users to perform searches and experience a <b>similar user interface</b> as the original Google website.";
  } else if (activeSlideIndex === 2) {
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