const images = document.querySelectorAll(".section-1-images img");
let i = 1;

setInterval(() => {
  i++;
  const image = document.querySelector(".section-1-images img.nextImage");
  if (image) {
    image.classList.remove("nextImage");
  }
  if (i > images.length) {
    images[0].classList.add("nextImage");
    i = 1;
  }
  images[i - 1].classList.add("nextImage");
}, 4000);

// navbar toggle
document.querySelector('.menu').addEventListener('click',(()=>{
  document.querySelectorAll('.target').forEach((item)=>{
    item.classList.toggle('change')
  })
}))
