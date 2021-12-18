let ul = document.querySelector('div.links ul');
let bar = document.querySelector('div.links span.burger-menu');


bar.addEventListener('click', () => {
    if (ul.style.display == 'flex') {
        ul.style.display = 'none';
        bar.style.color = '#000000';
    } else {
        bar.style.color = '#d3995f';
        ul.style.display = 'flex';

    }
})