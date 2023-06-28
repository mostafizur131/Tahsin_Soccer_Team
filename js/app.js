//Solution  - 1
const playersNames = [];
function selectPlayer(elem) {
  // Get player name from element and push to an array
  const name = elem.parentNode.children[0].innerText;
  playersNames.push(name);

  //Where to added element
  const ul = document.getElementById("place-child-element");
  ul.innerHTML = null;
  //How to added
  playersNames.map((player) => {
    const playerName = player;
    const li = document.createElement("li");
    li.classList.add("text-color2", "fs-3", "mb-4", "ms-4");
    li.innerHTML = `<span class="text-white"> ${playerName}</span>`;
    if (ul.children.length === 5) {
      alert("You can select only 5 players");
      return;
    } else {
      ul.appendChild(li);
    }
  });
  //Button Disabled
  elem.disabled = true;
}

// Solution 2
function selectPlayer2(button) {
  // Get the player div element
  const playerDiv = button.parentNode;

  // Get the player name
  const playerName = playerDiv.querySelector("h5").textContent;

  // Create a list item to display the selected player
  const listItem = document.createElement("li");
  listItem.classList.add("text-color2", "fs-3", "mb-4", "ms-4");
  listItem.innerHTML = `<span class="text-white"> ${playerName}</span>`;

  // Add the selected player to the list
  const placedList = document.getElementById("place-child-element");
  if (placedList.children.length === 5) {
    alert("You can select only 5 players");
    return;
  } else {
    placedList.appendChild(listItem);
  }

  button.disabled = true;
}

//Solution 3

document.getElementById("playersDiv").addEventListener("click", (event) => {
  if (event.target.classList.contains("player")) {
    const playerName = event.target.parentNode.querySelector("h5").innerText;

    // Create a list item to display the selected player
    const li = document.createElement("li");
    li.classList.add("text-color2", "fs-3", "mb-4", "ms-4");
    li.innerHTML = `<span class="text-white"> ${playerName}</span>`;

    // Add the selected player to the list
    const ul = document.getElementById("place-child-element");

    // Check if the player is already selected
    if (ul.children.length === 5) {
      alert("You can select only 5 players");
      return;
    } else {
      ul.appendChild(li);
    }
  }
  // Disable the select button
  event.target.disabled = true;
});

// Player Budget Calculation

document
  .getElementById("player-budget-calculate")
  .addEventListener("click", (e) => {
    const getPlayerBudgetStr =
      e.target.parentNode.querySelector(".fInput").value;
    const getPlayerBudget = parseFloat(getPlayerBudgetStr);
    const showPlayerBudget = document.getElementById("plyer-expenses");
    const totalPlayer = document.getElementById("place-child-element").children
      .length;

    const totalBudget = getPlayerBudget * (totalPlayer === 0 ? 1 : totalPlayer);

    showPlayerBudget.innerText = totalBudget ? totalBudget : "00";
  });

document.getElementById("total-calculate").addEventListener("click", (e) => {
  const getPlayerExpenses = document.getElementById("plyer-expenses").innerText;
  const playerExpenses = parseFloat(getPlayerExpenses);
  const getManagerBudget = document.getElementById("manager-budget");
  const managerBudget = parseFloat(getManagerBudget.value);
  const getCoachBudget = document.getElementById("coach-budget");
  const coachBudget = parseFloat(getCoachBudget.value);

  const setTotal = document.getElementById("set-total");

  const total =
    playerExpenses +
    (managerBudget ? managerBudget : 0) +
    (coachBudget ? coachBudget : 0);

  setTotal.innerText = total ? total : "00";
});
