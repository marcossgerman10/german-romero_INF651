function startGuessingGame() {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess;
   
    // Continue prompting the user until they guess the correct number
    while (guess !== randomNumber) {

        guess = parseInt(prompt("Enter a number between 1 and 10:"), 10); // Get user input using prompt

        // Check if the input is a valid number between 1 and 10
        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert("Please enter a number between 1 and 10.");
            continue; // Continue the loop to allow the user to enter a valid number

        }
        // Check if the guess is correct, too high, or too low
        if (guess === randomNumber) {
            alert("Congratulations! You guessed the correct number!");
            break; // Break the loop if the correct number is guessed
        } else if (guess < randomNumber) {
            alert("Try again! The number is higher.");
        } else {
            alert("Try again! The number is lower.");
        }
    }
}

function validatePassword() {
    let password;
    let confirmPassword;

    do {
        // Prompt user to set a password
        password = prompt('Please set your password:');

        // Prompt user to confirm the password
        confirmPassword = prompt('Please re-enter your password to confirm:');
        
        // Check if passwords match
        if (password === confirmPassword) {
            alert("Password set successfully!");
            break; // Exit the loop if passwords match
        } else {
           alert("Passwords do not match. Please try again.");
        }
    } while (password !== confirmPassword); // Continue loop if passwords do not match
}

function generateTable(){
    // Prompt the user to input a number
    const number = parseInt(prompt("Enter a number to generate its multiplication table:"), 10);

    // Generate the multiplication table using a for loop
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${number} x ${i} = ${number * i}\n`;
    }
    
    // Display the multiplication table
    alert(table);
}

function evaluateGrade() {
    // Prompt the user to enter their score
    const score = parseInt(prompt("Enter your score (between 0 and 100):"), 10);
    
    // Validate the input
    if (isNaN(score) || score < 0 || score > 100) {
        alert("Please enter a valid score between 0 and 100.");
        return;
    }
    
    // Determine the letter grade based on the score
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    // Display the letter grade to the user
    alert(`Your grade is: ${grade}`);
}

function findDay() {
    // Prompt the user to enter a number between 1 and 7
    const dayNumber = parseInt(prompt("Enter a number between 1 and 7:"), 10);
    
    // Use a switch statement to determine the day of the week
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid input. Please enter a number between 1 and 7.";
    }
    
    // Display the result to the user
    alert(`The day of the week that corresponds to the number ${dayNumber} is ${dayName}`);
}

