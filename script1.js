// ==========================
// Part 1: Variables & Conditionals
// ==========================
let username = "Student";
let score = 85;

if (score >= 50) {
  console.log(username + " passed the test! ✅");
} else {
  console.log(username + " failed the test ❌");
}

// ==========================
// Part 2: Custom Functions
// ==========================

// Function 1: Greet the user
function greetUser(name) {
  console.log("Hello, " + name + "! Welcome to the project.");
}

// Function 2: Calculate the square of a number
function square(num) {
  return num * num;
}

greetUser(username);
console.log("The square of 5 is: " + square(5));

// ==========================
// Part 3: Loops
// ==========================

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop count: " + i);
}

// Example 2: While loop
let counter = 0;
while (counter < 3) {
  console.log("While loop count: " + counter);
  counter++;
}

// ==========================
// Part 4: DOM Interactions
// ==========================

// DOM 1: Change text when button clicked
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("message").textContent = "The text has been changed! 🎉";
});

// DOM 2: Add new item to the list
document.getElementById("addItemBtn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item added 🆕";
  document.getElementById("itemList").appendChild(newItem);
});

// DOM 3: Toggle background color
document.getElementById("toggleColorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow" ? "#f9f9f9" : "lightyellow";
});
