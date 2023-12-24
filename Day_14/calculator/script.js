// Get the output screen element by ID
let outputscreen = document.getElementById("out-putscreen");

// Function to display numbers and operators on the output screen
function display(num) {
    outputscreen.value += num;
}

// Function to evaluate and calculate the result
function Calculate() {
    try {
        // Use eval() to calculate the result and set it as the output screen value
        outputscreen.value = eval(outputscreen.value);
    } catch (err) {
        // Display an alert for invalid expressions
        alert("Invalid");
    }
}

// Function to clear the output screen
function Clear() {
    outputscreen.value = "";
}

// Function to delete the last character from the output screen
function del() {
    outputscreen.value = outputscreen.value.slice(0, -1);
}
