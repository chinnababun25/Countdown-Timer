document.addEventListener("DOMContentLoaded", function() {
  const countdownElement = document.getElementById("countdown");
  const startButton = document.getElementById("startButton");
  const resetButton = document.getElementById("resetButton");

  let countdownInterval;

  function startCountdown() {
    const datetimeInput = document.getElementById("datetimeInput").value;
    const targetDate = new Date(datetimeInput).getTime();

    countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Countdown Finished!";
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }
  }

  function resetCountdown() {
    clearInterval(countdownInterval);
    countdownElement.textContent = "";
    document.getElementById("datetimeInput").value = "";
  }

  startButton.addEventListener("click", startCountdown);
  resetButton.addEventListener("click", resetCountdown);
});
