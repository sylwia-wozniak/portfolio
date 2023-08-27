document.addEventListener('DOMContentLoaded', () => {
  const playground = document.getElementById('playground');
  const scoreDisplay = document.querySelector('.score');
  const timerDisplay = document.querySelector('.timer');
  const ball = document.querySelector('.ball');
  const startButton = document.querySelector('.start');
  const finalScoreDisplay = document.querySelector('.final-score');
  const header = document.querySelector('.header');
  const defaultOptions = {
    timer: 20,
    score: 0,
  };

  let actualTimer = defaultOptions.timer;
  let actualScore = defaultOptions.score;
  let timer;

  function setPlaygroundDimensions() {
    playground.style.width = window.innerWidth + 'px';
    playground.style.height = window.innerHeight + 'px';
  }

  function setupStartButton() {
    startButton.addEventListener('click', () => {
      header.style.display = 'none';
      playground.style.display = 'contents';
      timerDisplay.innerHTML = defaultOptions.timer;
      scoreDisplay.innerHTML = defaultOptions.score;
      startTimer();
    });
  }

  function startTimer() {
    timer = setInterval(() => {
      actualTimer--;
      timerDisplay.innerHTML = actualTimer;
      if (actualTimer < 1) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }

  function incrementScore() {
    actualScore++;
    scoreDisplay.innerHTML = actualScore;
    return actualScore;
  }

  function moveBall() {
    const y = window.innerHeight - 50;
    const x = window.innerWidth - 50;
    const ny = Math.floor(Math.random() * y);
    const nx = Math.floor(Math.random() * x);
    ball.style.left = nx + 'px';
    ball.style.top = ny + 'px';
  }

  function setupBallClick() {
    ball.addEventListener('click', () => {
      incrementScore();
      moveBall();
    });
  }

  function endGame() {
    playground.style.display = 'none';
    finalScoreDisplay.style.display = 'block';
    finalScoreDisplay.innerHTML = actualScore >= 15 ? `Winner!<br>${actualScore}<br>` : `Game Over<br>${actualScore}<p>`;
  }

  function resetGame() {
    actualScore = defaultOptions.score;
    actualTimer = defaultOptions.timer;
    scoreDisplay.innerHTML = actualScore;
    timerDisplay.innerHTML = actualTimer;
  }

  function setupFinalScoreClick() {
    finalScoreDisplay.addEventListener('click', () => {
      finalScoreDisplay.style.display = 'none';
      playground.style.display = 'contents';
      resetGame();
      startTimer();
    });
  }

  function initializeGame() {
    setPlaygroundDimensions();
    setupStartButton();
    setupBallClick();
    setupFinalScoreClick();
  }

  initializeGame();
});
