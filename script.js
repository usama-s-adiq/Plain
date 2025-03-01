document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("learnMore");
    const extraInfo = document.getElementById("extraInfo");

    button.addEventListener("click", () => {
        if (extraInfo.classList.contains("hidden")) {
            extraInfo.classList.remove("hidden");
            button.textContent = "Show Less";
        } else {
            extraInfo.classList.add("hidden");
            button.textContent = "Learn More";
        }
    });

    // Placeholder for AWS Lambda integration in future
    console.log("AWS Lambda function integration will be added here.");
});
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("learnMore");

    button.addEventListener("click", async () => {
        try {
            const response = await fetch("https://uhigkvrr3g.execute-api.eu-north-1.amazonaws.com/prod");
            const data = await response.json();
            alert(data.message); // Display response from Lambda
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    });
});
