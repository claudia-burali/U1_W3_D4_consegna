const numbersGen = function () {
  const tableNumbers = document.getElementById("tabellone") 
  for (let i = 1; i <= 90; i++) {
      const numberDiv = document.createElement("div");
      numberDiv.className = "number"
      numberDiv.innerText = i 
      tableNumbers.appendChild(numberDiv);
    }
  };
  
numbersGen()

const button = document.getElementById("random");
button.addEventListener("click", event => {
  const numbers = function (min, max) {
    for (let i=min; i<=max; i++) {

    }
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
console.log(numbers(1, 90))})

button.addEventListener("click", event => {
    if (!event.numberDiv.classList.contains("estratto")) {
    event.numberDiv.classList.add("estratto");} 
});

