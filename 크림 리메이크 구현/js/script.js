const arrow = document.querySelector(".header-min");
const header = document.querySelector("header");
const bottomHeader = document.querySelector(".bottom-header");
const navHeader = document.querySelector(".header__nav");
const main = document.querySelector("main")

function headerMin() {
    let currentIndex = 0; 
    let delay = 0;

    arrow.addEventListener("click", () => {
        if (currentIndex === 0) {
            header.style.height = "50px";
            main.style.paddingTop = "50px";
            arrow.style.rotate = "180deg"
            arrow.style.opacity = ".5"
            bottomHeader.style.opacity = ".5"
            navHeader.style.opacity = ".5"
            
            currentIndex = 1; 
        } else if (currentIndex === 1) {
            header.style.height = "146px";
            main.style.paddingTop = "146px";
            arrow.style.rotate = "0deg"
            arrow.style.opacity = "1"
            bottomHeader.style.opacity = "1"
            navHeader.style.opacity = "1"

            currentIndex = 0; 
        }   
    });
}

headerMin(); 
