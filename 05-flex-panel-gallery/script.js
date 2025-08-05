const panels = document.querySelectorAll('.panel');


function toggleOpen() {
    panels.forEach(panel => {
        if (panel !== this){
            panel.classList.remove('open');
            panel.classList.remove('open-active')
        }
    })
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        if (this.classList.contains('open'))
            this.classList.toggle('open-active');
        else
            this.classList.remove('open-active')
    }
}
panels.forEach(panels => panels.addEventListener('click', toggleOpen));
panels.forEach(panels => panels.addEventListener('transitionend', toggleActive));
