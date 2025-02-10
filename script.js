// script.js

// Function to navigate to different pages
function navigateTo(page) {
    window.location.href = page;
  }
  
  // Simulate progress fill (70% in this example)
  document.addEventListener("DOMContentLoaded", function() {
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.width = "70%";
    
    console.log("Dashboard loaded successfully!");
  });
  