// Function to check if the string is a palindrome
function checkPalindrome() {
    // Get the word input from the user
    var wordInput = document.getElementById('wordInput').value;

    // Remove spaces from the input for comparison
    var formattedInput = wordInput.replace(/ /g, '');

    // Split the string into an array of characters
    var splitString = formattedInput.split('');

    // Reverse the array of characters
    var reverseArray = splitString.reverse();

    // Join the array of characters back into a string
    var joinArray = reverseArray.join('');

    // Check if the string is a palindrome
    var isPalindrome = formattedInput === joinArray;

    // Display the result to the user
    var resultOutput = document.getElementById('resultOutput');
    if (isPalindrome) {
        resultOutput.innerHTML = '"' + wordInput + '" is a palindrome.';
    } else {
        resultOutput.innerHTML = '"' + wordInput + '" is not a palindrome.';
    }

    // Clear the input field for a new entry
    document.getElementById('wordInput').value = '';
}
