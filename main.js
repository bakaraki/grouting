const generatorBtn = document.getElementById('generator-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers-container');

generatorBtn.addEventListener('click', () => {
  lottoNumbersContainer.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  for (const number of sortedNumbers) {
    const circle = document.createElement('div');
    circle.classList.add('lotto-number');
    circle.textContent = number;

    if (number <= 10) {
      circle.style.backgroundColor = '#f44336';
    } else if (number <= 20) {
      circle.style.backgroundColor = '#ff9800';
    } else if (number <= 30) {
      circle.style.backgroundColor = '#ffeb3b';
    } else if (number <= 40) {
      circle.style.backgroundColor = '#4caf50';
    } else {
      circle.style.backgroundColor = '#2196f3';
    }

    lottoNumbersContainer.appendChild(circle);
  }
});
