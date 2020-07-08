const scrollTrigger = () => {
    let elements = document.getElementsByClassName('work');
    for (element of elements) {
        let pos = element.getBoundingClientRect().top;
        if (pos < window.innerHeight) {
            element.classList.add('transition');
        } else {
            null
        }
    }
}

window.addEventListener('scroll', scrollTrigger);