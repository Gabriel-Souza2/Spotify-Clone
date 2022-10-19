let show = true;

const menuSection = document.querySelector(".menu");
const toggle = menuSection.querySelector(".toggle");

toggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show);
    show = !show;
})