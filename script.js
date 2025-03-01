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
