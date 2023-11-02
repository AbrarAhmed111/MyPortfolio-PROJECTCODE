let typed = new Typed("#element", {
  strings: ["Front-end Development", "Responsiveness", "Web design"],
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
let git_address = document.getElementById("git_address");
let live_address = document.getElementById("live_address");

function updateSlideContent(activeSlideIndex) {
  if (activeSlideIndex === 0) {
    heading.style.color= "#ffac8c";
    heading.innerHTML = "ShopNest"; 
    paragraph.innerHTML = "A shopping <b>E-commerce</b> website made using <b>React</b> and <b>Tailwind CSS</b>. People can use filters to find products easily, add them to a shopping cart, and see more details about the products. The site works well on computers and phones.";
    git_address.href = "https://github.com/AbrarAhmed111/ShopNest-PROJECTCODE";
    live_address.href = "https://shopnestbyabrar.netlify.app/";
  } else if (activeSlideIndex === 1) {
    heading.style.color= "#2cac57";
    heading.innerHTML = "Solar Solutions Startup";
    paragraph.innerHTML = "This project is a dynamic website for a solar solutions startup. Built from scratch using <b>HTML</b> , <b>CSS</b> (Tailwind), and <b>JavaScript</b>. Discover clean energy options through a sleek and intuitive interface. See how technology is driving the future of sustainability.";
    git_address.href = "/";
    live_address.href = "/";
  } else if (activeSlideIndex === 2) {
    heading.style.color= "#7b329c";
    heading.innerHTML = "Web Applications"; 
    paragraph.innerHTML = "Proudly presenting a series of web applications I've designed and developed. From a functional <b>Todo list</b> to a versatile <b>Calculator</b>, a secure <b>Password Autogenerator</b>, an engaging <b>Music Player</b>, and an interactive <b>Quiz App</b>. These applications reflect my dedication to creating impactful digital solutions.";
    git_address.href = "https://github.com/AbrarAhmed111/Newsies-PROJECTCODE";
    live_address.href = "https://netflixclonebyabrar.netlify.app/";

  }
  else if (activeSlideIndex === 3) {
    heading.style.color= "#f97316";
    heading.innerHTML = "FlavorCrispy"; 
    paragraph.innerHTML = "FlavorCrispy, a restaurant <b>responsive</b> website I built from scratch with <b>React</b> and <b>Tailwind</b>. With FlavorCrispy, you can easily explore a world of delicious food options, filtering by type, price, and categories. It's been an amazing journey, and I can't wait for you to check it out.";
    git_address.href = "https://github.com/AbrarAhmed111/FlavorCrispy-PROJECTCODE";
    live_address.href = "https://flavorcrispybyabrar.netlify.app/";
  }
  else if (activeSlideIndex === 4) {
    heading.style.color= "#4ae290";
    heading.innerHTML = "ShapeShifters"; 
    paragraph.innerHTML = "Discover the 'ShapeShifters Gym' Website project, I crafted with <b>React</b> and <b>Tailwind CSS</b>. It offers a great design and exciting features.";
    git_address.href = "https://github.com/AbrarAhmed111/ShapeShifters-PROJECTCODE";
    live_address.href = "https://shapeshiftersbyabrar.netlify.app/";
  }
  else if (activeSlideIndex === 5) {
    heading.style.color= "#202425";
    heading.innerHTML = "My Portfolio"; 
    paragraph.innerHTML = "In this project, I developed a visually stunning <b>portfolio website</b> using front-end development skills, including CSS Grid, Flexbox, various CSS properties and JavaScript. The portfolio showcases my <b>skills</b>, <b>projects</b>, and <b>achievements</b> in a responsive and visually appealing manner.";
    git_address.href = "https://github.com/AbrarAhmed111/MyPortfolio-PROJECTCODE";
    live_address.href = "https://devwebies.netlify.app/";
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


const darkIcons = document.querySelectorAll("#dark-icon");
let isDarkMode = false;

// Loop through each dark mode toggle button
darkIcons.forEach(darkIcon => {
  darkIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  
    isDarkMode = !isDarkMode;

    darkIcons.forEach(icon => {
      if (isDarkMode) {
        icon.src = "/Resources//sun.png"; 
      } else {
        icon.src = "/Resources//moon.png"; 
      }
    });
  });
});

//                                                     DRAG TEXT ARROW

let drag = document.getElementById("right-slider")
let arrow_icon = document.getElementById("arrow-icon")

drag.addEventListener("mouseover", () =>
{
    arrow_icon.src = "/Resources//left-arrow.png"
})
drag.addEventListener("mouseout", () => {
  arrow_icon.src = "/Resources//rightarrow.png";
});





//                                                    MENU WRAP

let menu_wrap = document.getElementById("ul-menu")
const link_buttons = document.querySelectorAll("#link-button");
let menu_button =document.getElementById("menu-icon")
let menu_icon = document.getElementById("menu-icon")
let isSlideOpen = false;
const toggleMenu = () =>
{
  menu_wrap.classList.toggle("menu-wrap")
}

menu_button.addEventListener("click",() =>
{
    toggleMenu();
    isSlideOpen = !isSlideOpen;
    if (isSlideOpen)
    {
      menu_icon.src = "/Resources//cross-icon.png"
    }
    else {
      menu_icon.src = "/Resources//menu-icon.png"
    }
  })


// Loop through each dark mode toggle button
link_buttons.forEach(link_button => {
  link_button.addEventListener("click", () => {
    
    
    menu_wrap.classList.remove("menu-wrap")
    menu_icon.src = "/Resources//menu-icon.png"
    isSlideOpen = false;
  });
});


