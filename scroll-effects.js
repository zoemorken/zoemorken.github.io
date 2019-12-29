// Javascript for controlling scroll animations

document.addEventListener("DOMContentLoaded", function () {
    // Toggle the is-visible class when show-on-scroll objects are within the viewport
    // const observers = new IntersectionObserver(function(entries) {
    //     entries.forEach(entry => entry.target.classList.toggle("is-visibile"));
    // });
    // const targets = document.querySelectorAll(".show-on-scroll");
    // targets.forEach(function(target) {
    //     observers.observe(target);
    // });


    // Sets up the background images for projects
    document.querySelectorAll('[data-background]').forEach(function(e) {
        let url = e.getAttribute('data-background');
        e.style.background='url('+url+') 50%/ cover';
    });

    // Methods to check for visibility of elements and apply is-visible class as needed
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0 && rect.bottom >= 0) ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
            (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
    }

    var scroll = window.requestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 30)
        };

    function loop() {
        document.querySelectorAll('.show-on-scroll').forEach(function (element) {
            if (isElementInViewport(element)) {
                element.classList.add('is-visible');
            } else {
                element.classList.remove('is-visible');
            }
        });
        scroll(loop);
    }
    loop();

});


