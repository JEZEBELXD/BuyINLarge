document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("distributionChart").getContext("2d");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: [
                "Community Distribution",
                "Liquidity Pool",
                "Development & Growth",
                "Team & Advisors",
                "Reserve Treasury",
            ],
            datasets: [
                {
                    data: [50, 20, 15, 10, 5],
                    backgroundColor: ["#ff6f6f", "#4da6ff", "#ffcc66", "#66ff66", "#ff9966"],
                },
            ],
        },
        options: {
            responsive: true,
        },
    });
});

function toggleDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("open");
}
