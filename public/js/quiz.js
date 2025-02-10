// Object storing quiz data for each topic
const quizData = {
    general: {
      question: "What is the capital of France?",
      options: {
        a: "Paris",
        b: "Berlin",
        c: "Madrid",
        d: "Rome"
      },
      correct: "a"
    },
    science: {
      question: "What planet is known as the Red Planet?",
      options: {
        a: "Venus",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn"
      },
      correct: "b"
    },
    math: {
      question: "What is 2 + 2?",
      options: {
        a: "3",
        b: "4",
        c: "5",
        d: "22"
      },
      correct: "b"
    }
  };
  
  // Function to navigate to different pages
  function navigateTo(page) {
    window.location.href = page;
  }
  
  // Function to load the quiz based on selected topic
  function loadQuiz() {
    const topic = document.getElementById("quiz-topic").value;
    const data = quizData[topic];
    
    // Set the question text
    document.getElementById("quiz-question").innerText = data.question;
    
    // Update options text using innerHTML on each label
    const optionLabels = document.querySelectorAll(".quiz-option");
    optionLabels[0].innerHTML = `<input type="radio" name="quiz" value="a" /> ${data.options.a}`;
    optionLabels[1].innerHTML = `<input type="radio" name="quiz" value="b" /> ${data.options.b}`;
    optionLabels[2].innerHTML = `<input type="radio" name="quiz" value="c" /> ${data.options.c}`;
    optionLabels[3].innerHTML = `<input type="radio" name="quiz" value="d" /> ${data.options.d}`;
    
    // Display the quiz content
    document.getElementById("quiz-content").style.display = "block";
    
    // Clear previous feedback
    document.getElementById("quiz-feedback").innerHTML = "";
  }
  
  // Function to submit the quiz answer and provide feedback
  function submitQuiz() {
    const options = document.getElementsByName('quiz');
    let selected;
    
    for (let option of options) {
      if (option.checked) {
        selected = option.value;
        break;
      }
    }
    
    const topic = document.getElementById("quiz-topic").value;
    const correctAnswer = quizData[topic].correct;
    const feedback = document.getElementById('quiz-feedback');
    
    if (selected) {
      if (selected === correctAnswer) {
        feedback.innerHTML = '<span style="color: green;">Correct Answer!</span>';
      } else {
        feedback.innerHTML = '<span style="color: red;">Wrong Answer. Please try again.</span>';
      }
    } else {
      feedback.innerHTML = '<span style="color: orange;">Please select an option.</span>';
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Quiz page loaded successfully!");
  });
  