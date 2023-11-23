const cardValues = [
  { value: 6, name: "6", image: "6.png" },
  { value: 7, name: "7", image: "7.jpg" },
  { value: 8, name: "8", image: "8.png" },
  { value: 9, name: "9", image: "9.png" },
  { value: 10, name: "10", image: "10.png" },
  { value: 2, name: "Валет", image: "jack.png" },
  { value: 3, name: "Дама", image: "Queen.png" },
  { value: 4, name: "Король", image: "king.png" },
  { value: 11, name: "Туз", image: "ace.png" },
];
let userScore = 0;
let computerScore = 0;
let attempts = 0;
const userName = prompt("Введіть своє ім'я:");
document.getElementById("user-name").innerText = userName || "Користувач";
function generateCards() {
  attempts++;
  const userCard = getRandomCard();
  const computerCard = getRandomCard();
  userScore += userCard.value;
  computerScore += computerCard.value;
  displayCards("user-cards", userCard);
  displayCards("computer-cards", computerCard);
  score();
  if (attempts === 3) {
    displayResult();
    endGame();
  }
}
function getRandomCard() {
  return cardValues[Math.floor(Math.random() * cardValues.length)];
}
function displayCards(containerId, card) {
  const container = document.getElementById(containerId);
  const cardHTML = `<div class="card"><img src="${card.image}" alt="${card.name}"></div>`;
  container.innerHTML += cardHTML;
}
function score() {
  document.getElementById("user-score").innerText = `Рахунок: ${userScore}`;
  document.getElementById("computer-score").innerText = `Рахунок: ${computerScore}`;
  document.getElementById("attempts").innerText = `Спроби: ${attempts}`;
}
function displayResult() {
  const resultContainer = document.getElementById("result");
  let resultMessage;

  if (userScore > computerScore) {
    resultMessage = "Ви виграли!";
  } else if (userScore < computerScore) {
    resultMessage = "Комп'ютер виграв!";
  } else {
    resultMessage = "Нічия!";
  }

  resultContainer.innerText = resultMessage;
}
function endGame() {
  const attemptsContainer = document.getElementById("attempts-container");
  attemptsContainer.innerHTML = "<p>Гра завершена. Перезавантажте сторінку.</p>";
}