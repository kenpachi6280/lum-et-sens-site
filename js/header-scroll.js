let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const isScrollingDown = scrollTop > lastScrollTop;
  const isScrolledEnough = scrollTop > 100;
  const isMobile = window.innerWidth < 750;

  if (isScrollingDown && isScrolledEnough) {
    if (isMobile) {
      header.style.top = "-250px";
    } else {
      header.style.top = "-100px";
    }
  } else {
    header.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
