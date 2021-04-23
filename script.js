// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

//Create function generatePasword()
function generatePassword() {
  //Create object named password and intialize it
  var password = {
    self: "",
    length: 8,
    validLenght: true,
    upperCase: true,
    specialCharacters: true,
    numberCharacters: true,
  };

  // Declare array of letters
  var characters = "abcdefghijklmnopqrstuvwxyz".split("");
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

  console.log("Password lenght: " + password.length);

  // Prompt for special characters true or false
  password.specialCharacters = confirm(
    "Do you wish to include special characters?"
  );
  console.log("Special characters: " + password.specialCharacters);

  // Prompt for number characters true or false
  password.numberCharacters = confirm("Do you wish to include numbers?");
  console.log("Numbers: " + password.numberCharacters);

  // Prompt for upperCase characters true or false
  password.upperCase = confirm("Do you wish to unclude uppercase characters?");
  console.log("Upper case: " + password.upperCase);

  // Build Password

  for (let i = 0; i < password.length; i++) {
    console.log("Index at: " + i);

    var poolArray = [characters[generateRandomIndex(characters)]];

    if (password.upperCase) {
      poolArray.push(
        charactersUpperCase[generateRandomIndex(charactersUpperCase)]
      );
    }

    if (password.specialCharacters) {
      poolArray.push(specialCharacters[generateRandomIndex(specialCharacters)]);
    }

    if (password.numberCharacters) {
      poolArray.push(numbers[generateRandomIndex(numbers)]);
    }

    console.log("Pool array is: " + poolArray);

    password.self += poolArray[generateRandomIndex(poolArray)];

    console.log(password.self);
  }
  return password.self;
}
