function calculateSum() {
    // Get the input value
    const input = document.getElementById('arrayInput').value;

    // Convert the input string to an array of numbers
    const numbersArray = input.split(',').map(Number);

    // Initialize the sum variable
    let sum = 0;

    // Loop through the array and sum the even numbers
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            sum += numbersArray[i];
        }
    }

    // Display the result
    document.getElementById('result').textContent = `Sum of even numbers: ${sum}`;
}