let counter1 = 0;

const counter1Value = document.getElementById("counter1-el");
const increment1Btn = document.getElementById("increment-btn1");
const increment2Btn = document.getElementById("increment-btn2");
const increment3Btn = document.getElementById("increment-btn3");

// document.getElementById("counter1-el").textContent = counter1;
// document.getElementById("counter2-el").textContent = counter2;

// let incrementOne = document.getElementById("increment-btn1");

increment1Btn.addEventListener("click", () => {
  counter1++;
  counter1Value.textContent = counter1;
});

increment2Btn.addEventListener("click", () => {
  counter1 = counter1 + 2;
  counter1Value.textContent = counter1;
});

increment3Btn.addEventListener("click", () => {
  counter1 = counter1 + 3;
  counter1Value.textContent = counter1;
});

let counter2 = 0;

const counter2Value = document.getElementById("counter2-el");
const increment4Btn = document.getElementById("increment-btn4");
const increment5Btn = document.getElementById("increment-btn5");
const increment6Btn = document.getElementById("increment-btn6");

increment4Btn.addEventListener("click", () => {
  counter2++;
  counter2Value.textContent = counter2;
});

increment5Btn.addEventListener("click", () => {
  counter2 = counter2 + 2;
  counter2Value.textContent = counter2;
});

increment6Btn.addEventListener("click", () => {
  counter2 = counter2 + 3;
  counter2Value.textContent = counter2;
});
