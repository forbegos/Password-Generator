// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Create function generatePasword()
function generatePassword() {
  //Create object named password and intialize it
  var password = {
    self: "",
    length: 8,
    validLenght: true,
    upperCase: true,
    lowerCase: true,
    specialCharacters: true,
    numberCharacters: true,
  };

  // Declare array of letters
  var characters = "abcdefghijklmnopqrstuvwxyz".split("");

  //Declare array of upper-case letters
  var charactersUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Declare array of special characters
  var specialCharacters = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  // Declare array of numbers
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  // Declare function to generate random element on any array
  function generateRandomIndex(arrayInput) {
    return Math.floor(Math.random() * arrayInput.length);
  }

  // Prompt for password length and validate lenght is between 8 to 128 characters
  do {
    password.length = prompt(
      "Please enter password length (8 to 128 characters)"
    );
    if (password.length >= 8 && password.length <= 128) {
      password.validLenght = true;
    } else {
      alert("Password must be between 8 and 128 characters!");
      password.validLenght = false;
    }
  } while (!password.validLenght);

  // console.log("Password lenght: " + password.length);

  // Prompt for special characters true or false
  var validInput = false;
  do {
    password.specialCharacters = confirm(
      "Do you wish to include special characters?"
    );

    if (password.specialCharacters) {
      validInput = true;
    }

    // Prompt for number characters true or false
    password.numberCharacters = confirm("Do you wish to include numbers?");

    if (password.numberCharacters) {
      validInput = true;
    }

    // Prompt for upper case characters true or false
    password.upperCase = confirm(
      "Do you wish to unclude uppercase characters?"
    );

    if (password.upperCase) {
      validInput = true;
    }

    // Prompt for lower case characters true or false
    password.lowerCase = confirm(
      "Do you wish to unclude lowercase characters?"
    );

    if (password.lowerCase) {
      validInput = true;
    }
    // Prompt user to select at least one character type if none selected
    if (!validInput) {
      alert("You need to select at least one character type!");
    }
  } while (!validInput);

  // Build Password

  for (let i = 0; i < password.length; i++) {
    console.log("Index at: " + i);

    // Declare array to contain a pool of options to choose from based on parameter selections
    var poolArray = [];

    // Fill pool array with valid options based on parameter selections
    if (password.upperCase) {
      poolArray.push(
        charactersUpperCase[generateRandomIndex(charactersUpperCase)]
      );
    }

    if (password.lowerCase) {
      poolArray.push(characters[generateRandomIndex(characters)]);
    }

    if (password.specialCharacters) {
      poolArray.push(specialCharacters[generateRandomIndex(specialCharacters)]);
    }
    if (password.numberCharacters) {
      poolArray.push(numbers[generateRandomIndex(numbers)]);
    }
    // console.log("Pool array is: " + poolArray);

    // Select random option from pool Array to add to the password. This also creates a double randomness which adds to password security
    password.self += poolArray[generateRandomIndex(poolArray)];
    // console.log(password.self);
  }
  // return the password
  return password.self;
}
