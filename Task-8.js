// DOM SELECTION
let input = document.querySelector(".input");
let button = document.querySelector(".btn");
let ol = document.querySelector("ol");

// EVENT HANDLING
button.addEventListener("click", function () {

    // Get user input
    let taskValue = input.value.trim();

    // Prevent empty input
    if (taskValue === "") {
        alert("Please enter a task");
        return;
    }

    // DYNAMIC ELEMENT CREATION
    let li = document.createElement("li");

    // Set text
    li.innerText = taskValue;

    // Apply styling using style.property
    li.style.padding = "8px";
    li.style.margin = "5px 0";
    li.style.cursor = "pointer";
    li.style.backgroundColor = "#f2f2f2";
    li.style.borderRadius = "6px";

    // Add class using setAttribute
    li.setAttribute("class", "task-item");

    // APPEND ELEMENT
    ol.append(li);

    // REMOVE TASK WHEN CLICKED
    li.addEventListener("click", function () {
        li.remove();
    });

    // CLEAR INPUT FIELD
    input.value = "";
});
