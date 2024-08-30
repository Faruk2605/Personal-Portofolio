const bubble = document.querySelector(".bubble-up");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition < 1180 && scrollPosition > 230) {
    bubble.classList.add("active");
  } else {
    bubble.classList.remove("active");
  }
});
