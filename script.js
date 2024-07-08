const images = document.querySelectorAll(".image-item");

let i = 1;

images.forEach((image) => {
    image.style.background = `url(./assets/${i}.jpg) center / cover no-repeat`;
    i++;
})