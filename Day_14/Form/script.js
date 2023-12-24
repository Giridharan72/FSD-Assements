function submitForm() {
    // Get values from form fields
    const firstName = document.getElementById('firstName').value;
    const lastname = document.getElementById('lastname').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const food = document.getElementById('food').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Get references to table bodies
    const tableBody1 = document.getElementById('dataTableBody1');
    const tableBody2 = document.getElementById('dataTableBody2');

    // Insert new rows into tables
    const newRow1 = tableBody1.insertRow(-1);
    const newRow2 = tableBody2.insertRow(-1);

    // Insert cells into the first row
    const cell1_1 = newRow1.insertCell(0);
    const cell2_1 = newRow1.insertCell(1);
    const cell3_1 = newRow1.insertCell(2);
    const cell4_1 = newRow1.insertCell(3);

    // Insert cells into the second row
    const cell1_2 = newRow2.insertCell(0);
    const cell2_2 = newRow2.insertCell(1);
    const cell3_2 = newRow2.insertCell(2);
    const cell4_2 = newRow2.insertCell(3);

    // Set text content of cells with form data
    cell1_1.textContent = firstName;
    cell2_1.textContent = lastname;
    cell3_1.textContent = address;
    cell4_1.textContent = pincode;

    cell1_2.textContent = gender;
    cell2_2.textContent = food;
    cell3_2.textContent = state;
    cell4_2.textContent = country;

    // Clear the form fields
    document.getElementById('myForm').reset();
}
