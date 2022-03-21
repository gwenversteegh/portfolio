var sidebar = document.querySelectorAll('section');

// De positie van een element kan gelezen worden ten opzichte van een viewport
export function sectionInViewport(element) {
    "use strict";
    var rect = element.getBoundingClientRect();
    return (
        rect.top < 0
    );
}

export function sectionInViewportBack(element) {
    "use strict";
    var rect = element.getBoundingClientRect();
    return (
        rect.top > 0
    );
}

document.addEventListener('scroll', function () {
    //wanneer het element buiten je scherm komt wordt hij vastgezet

    "use strict";
    if (sectionInViewport(sidebar[1])) {
        sidebar[1].classList.add('fixed');
    }

    //wanneer de eerste section de nul raakt word het weer losgehaald
    if (sectionInViewportBack(sidebar[0])) {
        if (sidebar[1].classList.contains('fixed')) {
            sidebar[1].classList.remove('fixed');
        }
    }
});