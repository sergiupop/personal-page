const scrollToTopLinkContainer = document.getElementById("scroll-to-top");
const homeSection = document.getElementById("home-section");
const homeSectionHeight = homeSection.clientHeight;

window.onscroll = () => {
  if (document.body.scrollTop >= homeSectionHeight || document.documentElement.scrollTop >= homeSectionHeight)
    scrollToTopLinkContainer.style.display = "flex";
  else
    scrollToTopLinkContainer.style.display = "none";
}

const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}