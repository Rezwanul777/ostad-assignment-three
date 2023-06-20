//problem solving

//-----------------1.Date Object:

// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

// b. Implement the function to display the day of the week for the current date.

function getCurrentDayOfWeek(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  }

const currentDate = new Date();
const currentDayOfWeek = getCurrentDayOfWeek(currentDate.toISOString())
//console.log('The current date is:', currentDayOfWeek);


//-------------2.Math Object:

// a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.

//Ans:
// Function to calculate square root of the sum of squares
function calculateSquareRootOfSumOfSquares(numbers) {
    var sumOfSquares = 0;
  
    // Iterate over each number in the array
    for (var i = 0; i < numbers.length; i++) {
      var squaredNumber = numbers[i] * numbers[i]; // Square each number
      sumOfSquares = sumOfSquares + squaredNumber; // Add the squared number to the sum
    }
  
    var squareRoot = Math.sqrt(sumOfSquares); // Calculate square root of the sum
    return squareRoot; // Return the result
  }
  
  
  var numbersArray = [2, 3, 4];
  var result = calculateSquareRootOfSumOfSquares(numbersArray);
  console.log(result);

//--------- b. Implement the function to display the square root of the sum of squares for an array of numbers.

function displaySquareRootOfSumOfSquares(numbers) {
    var result = calculateSquareRootOfSumOfSquares(numbers);
    console.log("Square root of the sum of squares: " + result);
  }
  
  
  var numbersArray = [2, 3, 4];
  displaySquareRootOfSumOfSquares(numbersArray);


//-----------3.Numbers:

// -a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.

function isPrime(number) {
    if (number <= 1) {
      return false; // 1 and numbers less than 1 are not prime
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // If the number is divisible by any other number, it is not prime
      }
    }
  
    return true; // If the number is not divisible by any other number, it is prime
  }
  
  var number = 16;
  var isNumberPrime = isPrime(number);
  console.log(isNumberPrime); 
  

//----- b. Implement the function to check if a given positive integer is a prime number.

function checkIfPrime(number) {
    var isNumberPrime = isPrime(number);
    if (isNumberPrime) {
      console.log(number + " is a prime number.");
    } else {
      console.log(number + " is not a prime number.");
    }
  }
  
 
  var number = 16;
  checkIfPrime(number);


//---------------4.Window Object:---------------

// a. Create a function that opens a new window with a specified URL and dimensions (width and height).

// b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.

//ANS: PLEASE SHOW IN WINDOWOBJECT FOLDER



// ---5.Navigator Object:--------------

// a. Write a JavaScript function that detects the user's browser name and version using the navigator object.

// b. Implement the function to display the user's browser name and version.

//Ans: Please show in answer in folder Navigatorobject folder



//----------- 6.Geolocation-------------:

// a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.

//Ans: please show the sove  in geolocation  folder

//8.HTML DOM Document:

// a. Create a webpage with a button and a paragraph element.

// b. Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!" when the button is clicked.

// ans: this solution is in folder HTML DOM


// -------9.JS DOM Working with Form Input:----------

// Implement a webpage with a form that has the following fields:

// a. Name (text input)

// b. Email (email input)

// c. Password (password input)

// d. Confirm Password (password input)

// e. Submit (button)

// Implement JavaScript validation for the form fields:

// f. Name should not be empty and should contain only letters.

// g. Email should be a valid email address.

// h. Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.

// i. Confirm Password should match the Password field.

// j. Display appropriate error messages for invalid fields.

//Ans: this problem solution is in Frominput folder



//--------- 10.DOM Manipulate CSS Class:----------------

// a. Create a webpage with a button and a paragraph element.

// b. Implement a JavaScript function that adds a CSS class named "highlight" to the paragraph element when the button is clicked. The "highlight" class should change the background color of the paragraph to yellow.

//Ans:this problem solution is in Dom manipulation folder


// -------11.Create Element & Append Element------:

// a. Create a webpage with an empty unordered list (<ul>).

// b. Implement a JavaScript function that dynamically creates five list items (<li>) with sequential numbers (1 to 5) and appends them to the unordered list.

// ans: The ans is in createelement folder



// a. Create a webpage with an image element (<img>) that has an initial source URL.

// b. Implement a JavaScript function that changes the source URL of the image element when a button is clicked. Use a different image URL of your choice.

//Ans: The soloution is in Dom change folder

// 7 .........JS Common Events:

// Implement a webpage with the following functionality:

// a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.

// b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.

// c. When the user moves the mouse over an image, change the image source to another image of your choice.

//aNS: this ANSWER IS IN COMMON EVENT FOLDER

//---------------15 no question solved in axios folder