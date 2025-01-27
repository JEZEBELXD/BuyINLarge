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
                    borderColor: "#1c1c1c",
                    borderWidth: 2,
                    hoverOffset: 10,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#fff',
                        font: {
                            size: 14,
                        },
                    },
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: '#1c1c1c',
                    titleColor: '#ff6f6f',
                    bodyColor: '#fff',
                    borderColor: '#ff4d4d',
                    borderWidth: 1,
                },
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart',
            },
        },
    });
});

function toggleDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("open");
}
