const apiKey = "CMtK7tBzVMR2YqiQhj8H5g==2iDNooEwLzYnWE9q";

function getQuote() {
    fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
            "X-Api-Key": apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("quote").innerText = `"${data[0].quote}"`;
        document.getElementById("author").innerText = `— ${data[0].author}`;
    })
    .catch(error => {
        document.getElementById("quote").innerText = "Error fetching quote";
        console.error(error);
    });
}