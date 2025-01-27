document.addEventListener("DOMContentLoaded", () => {
    const logoContainer = document.getElementById("logo-container");
    const buttons = document.getElementById("buttons");

    // Toggle visibility of buttons when the logo is clicked
    logoContainer.addEventListener("click", () => {
        if (buttons.style.display === "none" || !buttons.style.display) {
            buttons.style.display = "flex";
            buttons.style.opacity = "1";
        } else {
            buttons.style.opacity = "0";
            setTimeout(() => {
                buttons.style.display = "none";
            }, 500); // Matches fade-out animation duration
        }
    });
});

function redirectTo(section) {
    switch (section) {
        case "socials":
            window.open("https://x.com/buynlargecoin", "_blank");
            break;
        case "about-us":
            alert("About Us: Welcome to Buy N' Large Coin!");
            break;
        default:
            alert("Redirecting...");
    }
}

function goToCA() {
    const caButton = document.querySelector(".button:nth-child(2)");

    // Trigger animation on the button
    caButton.style.transform = "scale(1.1)";
    caButton.style.boxShadow = "0 0 20px rgba(255, 77, 77, 0.7)";

    // Delay navigation to allow animation to finish
    setTimeout(() => {
        window.location.href = "ca.html";
    }, 300); // Match animation duration
}
/* about me */
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("about-me");
    aboutSection.style.opacity = "0";

    // Fade-in animation
    setTimeout(() => {
        aboutSection.style.transition = "opacity 1.5s ease-in-out";
        aboutSection.style.opacity = "1";
    }, 500); // Delay to show the animation
});
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector("#about-me");
    const elementsToFade = aboutSection.querySelectorAll("*");

    elementsToFade.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("fade-in");
        }, index * 100); // Stagger each element by 100ms
    });
});
// Chart.js for token distribution graph
const ctx = document.getElementById('distributionChart').getContext('2d');
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Community Distribution', 'Liquidity Pool', 'Development & Growth', 'Team & Advisors', 'Reserve Treasury'],
        datasets: [{
            data: [50, 20, 15, 10, 5],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#AA66CC', '#FF9F40']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});
