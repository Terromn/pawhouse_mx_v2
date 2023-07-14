function setSquareHeight() {
  const equalizeList = document.querySelectorAll(".h-equalize");

  equalizeList.forEach((equalize) => {
    const divWidth = equalize.clientWidth;
    equalize.style.height = `${divWidth}px`;
  });
}

const headerElement = document.querySelector(".navigation-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    headerElement.classList.add("navigation-bar-scrolled");
  } else {
    headerElement.classList.remove("navigation-bar-scrolled");
  }
});

window.addEventListener("DOMContentLoaded", setSquareHeight);
window.addEventListener("resize", setSquareHeight);

window.addEventListener("scroll", () => {
  const scrollableContainer = document.getElementById("scrollable-container");
  const scrollAmount = window.scrollY;
  scrollableContainer.scrollLeft = scrollAmount;
});

function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const svgElement = document.getElementById("hamIco");

  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
    svgElement.classList.add("active");
  } else {
    mobileMenu.style.display = "none";
    svgElement.classList.remove("active");
  }
}

document
  .querySelectorAll("#mobileMenu a, #mobileMenu button")
  .forEach((element) => {
    element.addEventListener("click", () => {
      const mobileMenu = document.getElementById("mobileMenu");
      const svgElement = document.getElementById("hamIco");

      mobileMenu.style.display = "none";
      svgElement.classList.remove("active");
    });
  });
