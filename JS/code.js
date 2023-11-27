function displayNextNumber(array) {
    let index = 0;
  
    return function() {
      if (index < array.length) {
        console.log(array[index]);
        index++;
      } else {
        console.log("End of numbers");
        index = 0; // Reset index to start over when all numbers display
      }
    };
  }
  
  // Example usage:
  const myNumbers = [1, 2, 3, 4, 5];
  const getNextNumber = displayNextNumber(myNumbers);
  
  // Displaying the next number each time the function is called
  getNextNumber();
  getNextNumber();
  getNextNumber();
  getNextNumber();
  getNextNumber();
  getNextNumber();

//   Absolutely! Here's a step-by-step explanation of the code:

// Function displayNextNumber Definition:
// displayNextNumber is a function that takes an array as its argument.
// Variable Initialization:
// Inside displayNextNumber, we initialize a variable index to keep track of the current index in the array. It starts at 0.
// Returning a Function:
// The function displayNextNumber returns another function (a closure). This inner function has access to the index variable due to closure properties.

// Inner Function Behavior:

// The inner function checks if the current index is less than the length of the input array.
// If true, it displays the element at the current index using console.log and increments index.
// If the index reaches the end of the array, it resets index to 0 and displays a message indicating the end of the numbers.

// Example Usage:

// The code below displayNextNumber demonstrates how to use this function.
// We create an array myNumbers with some numbers.
// const getNextNumber = displayNextNumber(myNumbers);: This line calls displayNextNumber with myNumbers array as an argument and stores the returned function in getNextNumber.

// Using the Function:

// getNextNumber() is called multiple times.
// Each time it's called, it displays the next number from myNumbers.
// After reaching the end of the array, it starts over from the beginning.

// To Try on Your Own:

// Create the JavaScript File:

// Open a text editor and create a new file named numbersDisplay.js.
// Write the JavaScript Code:
// Copy and paste the code provided above into numbersDisplay.js.
// Run the Code in a JavaScript Environment:
// Open your browser's developer console or use a JavaScript runtime environment like Node.js.
// Paste the code or import the numbersDisplay.js file.
// Test the Functionality:
// Create an array of numbers (e.g., const myNumbers = [1, 2, 3, 4, 5];).
// Call the function multiple times (getNextNumber();, getNextNumber();, etc.) to see it display the next number each time.
// Observe how it starts over from the beginning after reaching the end of the array.
// This step-by-step guide should help you set up and experiment with the displayNextNumber function in your own JavaScript environment. Feel free to modify the array or try it with different sets of data to see how it works!







