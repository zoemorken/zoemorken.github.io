// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/

document.addEventListener('DOMContentLoaded', function(event) {
    let coded = "6xb7AQE@vh72hQ.Q2h";
    let key = "pm3IkMdPoF8lYLjzU5vxDnAa2Wb4SfGRC6rcu0KEVqNeOstXyTg971hwHJZiBQ";
    let shift = coded.length;
    let link = "";
    for (i = 0; i < coded.length; i++) {
        if (key.indexOf(coded.charAt(i)) == -1) {
            ltr = coded.charAt(i)
            link += (ltr)
        }
        else {
            ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
            link += (key.charAt(ltr))
        }
    }
    let el = document.querySelector('#mailto');
    if (el) {
        let newEl = document.createElement('a');
        newEl.setAttribute('href', 'mailto:' + link);
        newEl.appendChild(document.createTextNode(link));
        el.parentNode.replaceChild(newEl, el);
    }
});