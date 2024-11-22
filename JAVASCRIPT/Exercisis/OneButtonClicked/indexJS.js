document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll("button");
    const results = document.querySelectorAll(".result");

    function updateResults() {
        for (const p of results) {
            p.textContent = "One button clicked";
        }
    }

    for (const button of buttons) {
        button.addEventListener("click", updateResults);
    }
});
