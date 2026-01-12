let userScore = 0;
let pcScore = 0;

function play(userChoice) {
  const choices = ["tosh", "qaychi", "qogoz"];
  const pcChoice = choices[Math.floor(Math.random() * 3)];

  let resultMessage = "";

  if (userChoice === pcChoice) {
    resultMessage = `Durang bir xil ${userChoice} tanladila`;
  } else if (
    (userChoice === "tosh" && pcChoice === "qaychi") ||
    (userChoice === "qaychi" && pcChoice === "qogoz") ||
    (userChoice === "qogoz" && pcChoice === "tosh")
  ) {
    resultMessage = `Siz yuttiz (${userChoice} vs ${pcChoice})`;
    userScore++;
  } else {
    resultMessage = `Siz yutqazdiz (${userChoice} vs ${pcChoice})`;
    pcScore++;
  }

  // Natijalarni ekranda yangilash
  document.getElementById("result").innerText = resultMessage;
  document.getElementById("user-score").innerText = userScore;
  document.getElementById("pc-score").innerText = pcScore;
}
