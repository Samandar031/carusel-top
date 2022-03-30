// let imgs = document.getElementById("imgs");
// let left = document.getElementById("left");
// let right = document.getElementById("right");

// let img = document.querySelectorAll("img");

// let inx = 0;

// function changeImage() {
//   if (inx > img.length - 1) {
//     inx = 0;
//   } else if (inx < 0) {
//     inx = img.length - 1;
//   }
//   imgs.style.transform = `translateX(${-inx * 500}px)`;
// }

// right.addEventListener("click", function chang() {
//   inx++;
//   changeImage();
// });

// left.addEventListener("click", function chang() {
//   inx--;
//   resetIn();
//   changeImage();
// });

// let int = setInterval(run, 2000);

// function run() {
//   inx++;
//   changeImage();
// }

// function resetIn() {
//   clearInterval(int);

//   int = setInterval(run, 2000);
// }

let tepa = document.querySelector(".tepa");
let past = document.querySelector(".pas");

let img1 = document.querySelector(".one-box");
let img2 = document.querySelector(".two-box");

let imgOne = document.getElementById("one");
let imgTwo = document.getElementById("two");

let a = 0;
let b = 0;

function ball() {
  if (a >= 3) {
    a = 0;
  } else if (a < 0) {
    a = 0;
  }
  imgOne.style.transform = `translateY(${a * 100}vh)`;
  imgTwo.style.transform = `translateY(${-a * 100}vh)`;
}

tepa.addEventListener("click", function () {
  a++;

  ball();
});

past.addEventListener("click", function () {
  a--;

  ball();
});

// past.addEventListener("click", function () {
//   a--;

//   ball();
// });
