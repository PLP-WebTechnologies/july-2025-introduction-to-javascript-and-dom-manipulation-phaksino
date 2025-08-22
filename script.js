// =========================
// Part 1: Variables & Conditionals
// =========================

// Variable declaration
let userAge = 18; // default value

// Function to check age eligibility
document.getElementById("checkAgeBtn").addEventListener("click", function() {
    // You could also prompt the user for input:
    userAge = prompt("Enter your age:");

    if (userAge >= 18) {
        document.getElementById("ageResult").textContent = "✅ You are an adult!";
    } else {
        document.getElementById("ageResult").textContent = "❌ You are underage.";
    }
});


// =========================
// Part 2: Functions
// =========================

// Custom function: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Custom function: Format result text
function formatResult(result) {
    return `The result is: ${result}`;
}

document.getElementById("calcSumBtn").addEventListener("click", function() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let sum = addNumbers(num1, num2); // Reusing function
    document.getElementById("sumResult").textContent = formatResult(sum);
});


// =========================
// Part 3: Loops
// =========================

// Example 1: For loop
document.getElementById("showNumbersBtn").addEventListener("click", function() {
    let numberList = document.getElementById("numberList");
    numberList.innerHTML = ""; // Clear previous results

    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = "Number: " + i;
        numberList.appendChild(li);
    }
});

// Example 2: While loop
let counter = 0;
while (counter < 1) {
    console.log("While loop example runs once.");
    counter++;
}


// =========================
// Part 4: DOM Manipulation
// =========================

// Toggle theme (light/dark)
document.getElementById("toggleThemeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    let message = document.getElementById("dynamicText");
    if (document.body.classList.contains("dark-mode")) {
        message.textContent = "🌙 Dark mode is ON!";
    } else {
        message.textContent = "☀️ Light mode is ON!";
    }
});
