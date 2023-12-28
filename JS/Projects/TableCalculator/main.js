// Get the button element by its ID
let button = document.getElementById('btn');

// Add a click event listener to the button
button.addEventListener('click', function(){
    // Get the values entered by the user and convert them to integers
    const x = parseInt(document.getElementById('first').value);
    const y = parseInt(document.getElementById('sec').value);

    // Check if the entered values are not valid numbers
    if (isNaN(x) || isNaN(y)){
        // Set focus to the first input field
        document.getElementById('first').focus();
        // Display an error message
        document.getElementById('error').innerHTML = "Please Provide Valid Value(s)";
        // Clear the output
        document.getElementById('output').innerHTML = '';
    }
    else {
        // Clear the error message
        document.getElementById('error').innerHTML = '';
        // Call the table function with the entered values
        table(x, y);
    }
});

// Function to generate and display the multiplication table
function table(a, b){
    // Initialize an empty string to store the table
    let output = '';
    // Loop to generate the multiplication table
    for(let i = 0; i <= b; i++){
        // Concatenate each row to the output string
        output += (a + " x " + i + " = " + a*i + "<br>");
    }
    // Display the generated table in the output element
    document.getElementById('output').innerHTML = output;
};
