/*const tableGen = function () { 
  const tableNumbers = document.getElementById("tabellone") 
  const table = document.createElement("table")
  const tr0 = document.createElement("tr")
  const th = document.createElement("th")
  th.innerText = "TABELLONE"
  tr0.appendChild(th)
  table.appendChild(tr0)
  tableGen.appendChild(table)
  }*/
const numbers = []
const num = function () {
  for (let i = 1; i < 91; i++) {numbers.push(i)}
}
num()
console.log(numbers)
const numbersGen = numbers => {
  const tableNumbers = document.getElementById("tabellone") 
  for (let i = 0; i < numbers; i++) {
      const numberDiv = document.createElement("div");
      numberDiv.className = "number"
      numberDiv.appendChild(tableNumbers);
    }
  };


const button = document.getElementById("random");
button.addEventListener("click", event => {
  const numbers = function (min, max) {
    for (let i=min; i<=max; i++) {

    }
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
console.log(numbers(1, 90))})
button.addEventListener("click", event => {
    if (!event.currentTarget.classList.contains("estratto")) {
    event.currentTarget.classList.add("estratto");} 
});
/*const button = document.getElementById("add-task-btn");
const input = document.getElementById("task-input");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  // ottenere il valore dall'input dopo il click sul bottone:
  const taskText = input.value;

  // todo: evitare che si crei il <li> quando non c'è testo nell'input
  if (taskText.length > 0) {
    // creare un nuovo elemento lista
    const newLi = document.createElement("li");
    // applicargli la classe
    newLi.classList.add("task");
    // applicargli il testo
    newLi.innerText = taskText;
    newLi.style = "display: flex; justify-content: space-between; align-items: center";
    console.log(newLi);

    

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" height="14"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.addEventListener("click", event => {
      event.currentTarget.closest(".task").remove();
    });

    newLi.appendChild(deleteBtn);
    list.appendChild(newLi);
  }
});*/
