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
  },
  {
    question: 'What does CSS stand for?',
    options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
    answer: 1
  },
  {
    question: 'Which JavaScript keyword is used to declare a variable?',
    options: ['var', 'let', 'const', 'All of the above'],
    answer: 3
  },
  {
    question: 'What is the correct way to write an array in JavaScript?',
    options: ['{1, 2, 3}', '[1, 2, 3]', '(1, 2, 3)', '<1, 2, 3>'],
    answer: 1
  },
  {
    question: 'Which CSS property controls the text size?',
    options: ['font-size', 'text-style', 'text-size', 'font-style'],
    answer: 0
  },
  {
    question: 'How do you call a function in JavaScript named "myFunction"?',
    options: ['call myFunction()', 'myFunction()', 'call function myFunction()', 'myFunction(call)'],
    answer: 1
  },
  {
    question: 'Which method is used to remove the last element of an array in JavaScript?',
    options: ['pop()', 'shift()', 'splice()', 'remove()'],
    answer: 0
  },
  {
    question: 'Which of the following is not a valid data type in JavaScript?',
    options: ['Boolean', 'Undefined', 'Float', 'Symbol'],
    answer: 2
  },
  {
    question: 'What does the "===" operator do in JavaScript?',
    options: ['Assigns a value', 'Compares value and type', 'Compares only value', 'Converts types before comparison'],
    answer: 1
  },
  {
    question: 'Which algorithm is best for finding the shortest path in a graph?',
    options: ['Dijkstra’s Algorithm', 'Binary Search', 'Merge Sort', 'DFS'],
    answer: 0
  },
  {
    question: 'What does "NaN" mean in JavaScript?',
    options: ['No Action Needed', 'Not a Number', 'Newly Assigned Name', 'Number and Null'],
    answer: 1
  },
  {
    question: 'Which CSS property sets the background color of an element?',
    options: ['color', 'background-color', 'bg-color', 'bg'],
    answer: 1
  },
  {
    question: 'What is the output of "typeof null" in JavaScript?',
    options: ['null', 'undefined', 'object', 'string'],
    answer: 2
  },
  {
    question: 'Which data structure uses the LIFO principle?',
    options: ['Queue', 'Stack', 'Linked List', 'Tree'],
    answer: 1
  },
  {
    question: 'What is the output of "typeof null" in JavaScript?',
    options: ['null', 'undefined', 'object', 'string'],
    answer: 2
  },
  {
    question: 'Which function is used to parse a string to int in JavaScript?',
    options: ['parseInt()', 'parse()', 'int()', 'stringToInt()'],
    answer: 0
  },
  {
    question: 'Which of the following is a primitive data type in JavaScript?',
    options: ['Array', 'Object', 'Boolean', 'Function'],
    answer: 2
  },
  {
    question: 'What is the default position value in CSS?',
    options: ['static', 'relative', 'absolute', 'fixed'],
    answer: 0
  },
  {
    question: 'What is the result of 5 + "5" in JavaScript?',
    options: ['10', '55', 'NaN', 'Error'],
    answer: 1
  },
  {
    question: 'Which sorting algorithm has the best average case performance?',
    options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
    answer: 2
  },
  {
    question: 'What is the output of 0 == "0" in JavaScript?',
    options: ['true', 'false', 'undefined', 'error'],
    answer: 0
  },
  {
    question: 'Which method is used to join array elements into a string?',
    options: ['concat()', 'combine()', 'join()', 'toString()'],
    answer: 2
  },
  {
    question: 'Which event occurs when the user clicks on an HTML element?',
    options: ['onmouseover', 'onchange', 'onmouseclick', 'onclick'],
    answer: 3
  },
  {
    question: 'How do you find the number of elements in an array?',
    options: ['array.count()', 'array.length', 'array.size()', 'array.getLength()'],
    answer: 1
  },
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