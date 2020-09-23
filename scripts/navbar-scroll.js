/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("scroll-up");
}
  else {
    document.getElementById("navbar").classList.add("scroll-up");
  }
  prevScrollpos = currentScrollPos;
}