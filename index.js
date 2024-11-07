let count = document.querySelector(".count");
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let input = document.querySelector(".counterInput");
let resetBtn = document.querySelector(".reset-btn");

incrementBtn.addEventListener("click", (e) => {
  let inputValue = parseInt(input.value) || 1;
  let counterText = parseInt(count.innerText) || 0;
  count.innerText = counterText + inputValue;
});

decrementBtn.addEventListener("click", (e) => {
    let inputValue = parseInt(input.value) || 1;
    let counterText = parseInt(count.innerText) || 0;
    count.innerText = counterText - inputValue;
});
  
resetBtn.addEventListener("click", (e) => {
    input.value = 0;
    count.innerText = 0;
  });