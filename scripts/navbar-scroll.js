let mainNavLinks = [];
let sections = [];

(function() {
  if (document.readyState !== 'loading') {
      init();
  }
  else {
      document.addEventListener('DOMContentLoaded', init);
  }
  function init()  {
    mainNavLinks = document.querySelectorAll(".section-nav .toc-entry a");
    sections = document.querySelectorAll(".linked-section");
  }
}());


let prevScrollpos = window.pageYOffset;
let cooldown = false;

window.addEventListener("scroll", function () {
  /* Throttle processing */
  if (!cooldown) {
    cooldown = true;
    setTimeout(() => {cooldown = false; processScroll()}, 200);
  }
});

function processScroll()  {
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("scroll-up");
  } else {
    document.getElementById("navbar").classList.add("scroll-up");
  }
  prevScrollpos = currentScrollPos;

  /* Highlight the visible link based on scroll position */
  let currentSection;
  sections.forEach(section => {
    let rect = section.getBoundingClientRect();
    let menuHeight = document.querySelector('.navbar').offsetHeight;
    if (!currentSection && (
        (rect.top >= menuHeight && rect.top < window.innerHeight) ||
        (rect.bottom >= menuHeight && rect.bottom < window.innerHeight) ||
        (rect.top < menuHeight && rect.bottom > window.innerHeight))) {
      currentSection = section;
    }
  });
  sections.forEach(section => {
    let link = section.querySelector("a.anchorjs-link");
    if (link) {
      let anchor = link.href.substring(link.href.lastIndexOf('#'));
      let navLink = document.querySelector(".toc-entry a[href='" + anchor + "']");
      if (navLink) {
        if (section === currentSection) {
          navLink.classList.add("current");
        }
        else {
          navLink.classList.remove("current");
        }
      }
    }
  });
}

/* Remember what page we're on for throttling effects */
if (!window.location.pathname.endsWith('index.html') &&
    window.location.pathname !== '/') {
  sessionStorage.setItem('last-page', window.location.pathname);
}
