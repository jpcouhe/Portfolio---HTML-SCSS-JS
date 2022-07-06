// ------------Menu Responsive--------------

const liste = document.querySelector(".liste");
const presentation = document.querySelector(".presentation");
const btnResponsive = document.querySelector(".menu_responsive");

btnResponsive.addEventListener("click", () => {
    liste.classList.toggle("show");
    console.log(presentation);
    presentation.classList.toggle("show");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 650) {
        presentation.classList.remove("show");
        liste.classList.remove("show");
    }
});

// -------------------------------------------

// ---------------Scroll Top------------------

const btnScrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", (e) => {
 
    if (window.scrollY < "100") {
        btnScrollTop.classList.remove("show");
    } else {
        btnScrollTop.classList.add("show");
    }
});

btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
