const items = document.querySelectorAll('.item');

function changeState() {
    this.classList.toggle('open');
}

items.forEach(i => i.addEventListener('click', changeState));