const generatorBtn = document.getElementById('generator-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers-container');

function generateLottoSet() {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

function getRangeClass(number) {
  if (number <= 10) return 'n-1';
  if (number <= 20) return 'n-2';
  if (number <= 30) return 'n-3';
  if (number <= 40) return 'n-4';
  return 'n-5';
}

async function displaySets() {
  lottoNumbersContainer.innerHTML = '';
  
  for (let i = 0; i < 5; i++) {
    const numbers = generateLottoSet();
    const row = document.createElement('div');
    row.classList.add('lotto-row');
    row.style.animationDelay = `${i * 0.1}s`;

    numbers.forEach((num) => {
      const circle = document.createElement('div');
      circle.classList.add('lotto-number', getRangeClass(num));
      circle.textContent = num;
      row.appendChild(circle);
    });

    lottoNumbersContainer.appendChild(row);
    // Optional: add a small delay if we want them to "pop" in one by one
    // await new Promise(resolve => setTimeout(resolve, 100));
  }
}

generatorBtn.addEventListener('click', displaySets);
