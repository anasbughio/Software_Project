document.addEventListener("DOMContentLoaded", function () {
    const topicButtons = document.querySelectorAll(".topic-btn");
    const topicTitle = document.getElementById("topic-title");
    const topicText = document.getElementById("topic-text");
    const topicVideo = document.getElementById("topic-video");

    // Topic Data (Content & Video Links)
    const topics = {
        "intro": {
            title: "Introduction to Programming",
            text: "Learn about variables, data types, operators, and basic input/output operations.",
            video: "https://www.youtube.com/embed/zOjov-2OZ0E"  // Sample video link
        },
        "control-flow": {
            title: "Control Flow & Loops",
            text: "Understand how to use if-else statements, loops, and control statements in programming.",
            video: "https://www.youtube.com/embed/8PopR3x-VMY"  // Sample video link
        },
        "functions": {
            title: "Functions in JavaScript",
            text: "Explore the concept of functions, their syntax, and how to use them efficiently in JavaScript.",
            video: "https://www.youtube.com/embed/efp7wH4om0A"  // Sample video link
        }
    };

    // Event Listener for Buttons
    topicButtons.forEach(button => {
        button.addEventListener("click", function () {
            const topicKey = this.getAttribute("data-topic");
            topicTitle.textContent = topics[topicKey].title;
            topicText.textContent = topics[topicKey].text;
            topicVideo.src = topics[topicKey].video;
            topicVideo.style.display = "block";
        });
    });
});
