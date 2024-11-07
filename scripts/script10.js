document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("fizzbuzzbang-form");
    const resultsDiv = document.getElementById("results");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get user input values
        const name = document.getElementById("name").value;
        const start = parseInt(document.getElementById("start").value);
        const end = parseInt(document.getElementById("end").value);
        const fizzWord = document.getElementById("fizzWord").value;
        const fizzNum = parseInt(document.getElementById("fizzNum").value);
        const buzzWord = document.getElementById("buzzWord").value;
        const buzzNum = parseInt(document.getElementById("buzzNum").value);
        const bangWord = document.getElementById("bangWord").value;
        const bangNum = parseInt(document.getElementById("bangNum").value);

        // Generate greeting
        let greeting = `Hello, ${name}! Here are your FizzBuzzBang results:`;
        let output = [];

        // FizzBuzzBang logic
        for (let i = start; i <= end; i++) {
            let result = '';
            if (i % fizzNum === 0) result += fizzWord;
            if (i % buzzNum === 0) result += buzzWord;
            if (i % bangNum === 0) result += bangWord;
            if (result === '') result = i; // If no Fizz, Buzz, or Bang, display the number
            output.push(result);
        }

        // Display results
        resultsDiv.innerHTML = `<h2>${greeting}</h2><pre>${output.join('\n')}</pre>`;
    });
});
