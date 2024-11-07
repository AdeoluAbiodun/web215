document.getElementById("fizzBuzzForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Collecting input values
    const name = document.getElementById("name").value;
    const startNumber = parseInt(document.getElementById("startNumber").value);
    const endNumber = parseInt(document.getElementById("endNumber").value);
    const fizzWord = document.getElementById("fizzWord").value;
    const fizzNumber = parseInt(document.getElementById("fizzNumber").value);
    const buzzWord = document.getElementById("buzzWord").value;
    const buzzNumber = parseInt(document.getElementById("buzzNumber").value);
    const bangWord = document.getElementById("bangWord").value;
    const bangNumber = parseInt(document.getElementById("bangNumber").value);

    // Greeting message
    document.getElementById("greeting").textContent = `Hello, ${name}! Here are your results:`;

    // Generating FizzBuzzBang results
    let results = "";
    for (let i = startNumber; i <= endNumber; i++) {
        let output = "";
        if (i % fizzNumber === 0) output += fizzWord;
        if (i % buzzNumber === 0) output += (output ? "" : "") + buzzWord;
        if (i % bangNumber === 0) output += (output ? "" : "") + bangWord;
        results += output || i; // If output is empty, show the number itself
        results += "<br>"; // New line for each result
    }

    // Display results
    document.getElementById("results").innerHTML = results;
});
