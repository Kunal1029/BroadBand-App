/* eslint-disable no-undef */
/* DESCRIPTION: CUSTOM JS FILE */

/* NAVIGATION */
// COLLAPSE THE NAVBAR BY ADDING THE TOP-NAV-COLLAPSE CLASS
window.onscroll = () => {
    handleNavbarCollapse();
};

function handleNavbarCollapse() {
    const navbar = document.getElementById("navbar");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const isLargeScreen = window.innerWidth > 991;

    if (scrollTop > 30 && isLargeScreen) {
        navbar.classList.add("top-nav-collapse");
    } else if (scrollTop < 30 && isLargeScreen) {
        navbar.classList.remove("top-nav-collapse");
    }
}

/* NAVBAR TOGGLE ON MOBILE */
document.querySelectorAll(".nav-link:not(.dropdown-toggle)").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
});

/* DROPDOWN FUNCTIONALITY (Hover & Click) */
const dropdown = document.querySelector(".dropdown");

if (dropdown) {
    // Desktop hover effect
    dropdown.addEventListener("mouseleave", toggleDropdownVisibility);
    dropdown.addEventListener("mouseover", toggleDropdownVisibility);

    // Toggle dropdown on click
    dropdown.addEventListener("click", (e) => {
        const parentDropdown = e.target.closest(".dropdown");
        const menu = parentDropdown.querySelector(".dropdown-menu");
        const isShown = parentDropdown.classList.contains("show");

        menu.classList.toggle("show", !isShown);
        parentDropdown.classList.toggle("show", !isShown);
    });
}

function toggleDropdownVisibility(event) {
    const dropdown = event.target.closest(".dropdown");
    const menu = dropdown.querySelector(".dropdown-menu");
    const shouldShow = dropdown.matches(":hover");

    setTimeout(() => {
        menu.classList.toggle("show", shouldShow);
        dropdown.classList.toggle("show", shouldShow);
        dropdown.setAttribute("aria-expanded", shouldShow);
    }, event.type === "mouseleave" ? 300 : 0);
}

/* CARD SLIDER - SWIPER */
new Swiper(".card-slider", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 70,
    breakpoints: {
        767: { slidesPerView: 1 },
        991: { slidesPerView: 2, spaceBetween: 40 },
    },
});

/* AOS ANIMATION ON SCROLL */
AOS.init({
    duration: 1000,
    easing: "ease",
    once: true,
});
