let next = document.querySelector('span.next');
let previous = document.querySelector('span.previous');
let imgSlider = document.querySelector('img.img-slider');
let product = document.querySelector('.product-name');
let imgArr = ['../imgs/slider-one.jpg', '../imgs/slider-two.jpg', '../imgs/slider-three.jpg'];
let productArr = ['Big Market', 'Clothes Shop', 'Shoes Shop'];
let counter = 0;


next.onclick = () => {
    counter++;
    if (counter > imgArr.length - 1) {
        counter = 0;
    }
    imgSlider.src = imgArr[counter];
    product.innerHTML = productArr[counter];
}


previous.onclick = () => {
    counter--;
    if (counter < 0) {
        counter = imgArr.length - 1;
    }

    imgSlider.src = imgArr[counter];
    product.innerHTML = productArr[counter];
}