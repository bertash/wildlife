// const container = document.querySelector(".slider_items"),
//   leftArrow = document.querySelector(".left_arrow"),
//   rightArrow = document.querySelector(".right_arrow");

// let sliderItem = document.querySelectorAll(".slider_item");

// let index = 1;

// const firstSlide = sliderItem[0].cloneNode(true);
// const lastSlide = sliderItem[sliderItem.length - 1].cloneNode(true);

// firstSlide.id = "first-slide";
// lastSlide.id = "last-slide";

// container.append(firstSlide);
// container.prepend(lastSlide);

// const slideWidth = sliderItem[index].clientWidth;

// // const slideWidth = 404;

// container.style.transform = `translateX(${-slideWidth * index}px)`;

// console.log(sliderItem);

// const startSlide = () => {
//   setInterval(() => {
//     index++;
//     container.style.transform = `translateX(${-slideWidth * index}px)`;
//     container.style.transition = `.7s`;
//   }, 1000);
// };

// container.addEventListener("transitionend", () => {
//   sliderItem = document.querySelectorAll(".slider_item");
//   console.log(sliderItem);
//   if (sliderItem[index].id == firstSlide.id) {
//     container.style.transition = "none";
//     index = 1;
//     container.style.transform = `translateX(${-slideWidth * index}px)`;
//   }
// });

// startSlide();
