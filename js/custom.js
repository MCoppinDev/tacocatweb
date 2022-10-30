//get input from html
let input = document.getElementById("input");

// create a palindrome function
document.getElementById("check").addEventListener("click", function () {
  // create a Regular Expression variable
  let regEx = /[\W_]/g;
  let result = "";
  // get the input value
  let word = input.value;

  //get the output from html by id.
  let output = document.getElementById("output");
  //  create a new value replacing any spacing, symbols, or numbers and make all letters Lowercase
  let newWord = word.toLowerCase().replace(regEx, "");

  //  turn newWord into an array(spit), reverse the array(reverse) and create new reversed array(join)
  let revWord = newWord.split("").reverse().join("");

  //  verify with a conditional
  if (newWord == "") {
    result = "Please enter a word.";
  } else if (newWord == revWord) {
    result = `${newWord} is a Palindrome!😸`;
  } else {
    result = `${newWord} is a NOT a Palindrome!😿`;
  }
  output.innerText = result;

  return output;
});

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    document.getElementById("check").click();
  }
});

// Clear the input and output
document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("input").value = "";
  document.getElementById("output").innerText = "";
});
