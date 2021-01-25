// Animated highlight / underline effect
window.addEventListener('scroll', throttle(applyHighlight, 100));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function isVisible(element) {
	var position = element.getBoundingClientRect();
	if (position.top >= 0 && position.bottom <= window.innerHeight) {
		return true;
  }
  return false;
}

function applyHighlight() {
  let highlightElements = Array.from(document.querySelectorAll('.highlight'));
  let newlyVisible = highlightElements.filter(element => isVisible(element) &&
      !element.classList.contains('highlighted'));
  newlyVisible.forEach(el => el.classList.add('highlighted'));
}

