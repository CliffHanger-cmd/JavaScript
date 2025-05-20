const quizData = [
  {
    question: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyperlinking Text Model Language'],
    answer: 0
  },
  {
    question: 'Which array method adds a new element to the end?',
    options: ['shift()', 'pop()', 'push()', 'unshift()'],
    answer: 2
  },
  {
    question: 'What is the time complexity of binary search on a sorted array of n elements?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
    answer: 1
  }
];

const form = document.getElementById('quiz-form');

// Render questions
quizData.forEach((item, index) => {
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');
  questionDiv.innerHTML = `
    <h3>Q${index+1}. ${item.question}</h3>
    <div class="options">
      ${item.options.map((opt, i) => `
        <label>
          <input type="radio" name="q${index}" value="${i}" /> ${opt}
        </label>`).join('')}
    </div>
  `;
  form.appendChild(questionDiv);
});

// Handle submission
document.getElementById('submit-btn').addEventListener('click', () => {
  const formData = new FormData(form);
  let score = 0;
  quizData.forEach((item, index) => {
    const userAns = parseInt(formData.get(`q${index}`), 10);
    if (userAns === item.answer) score++;
  });
  // Display score
  document.getElementById('score').textContent = score;
  document.getElementById('total').textContent = quizData.length;
  document.getElementById('score-container').style.display = 'block';
  // Optionally disable further changes
  document.querySelectorAll('input').forEach(inp => inp.disabled = true);
  document.getElementById('submit-btn').disabled = true;
});