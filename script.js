const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const darkMode = document.querySelector('.dark-mode');
const logo = document.getElementById('logo-img'); // Ensure this ID matches your logo image in the HTML

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    console.log('Dark mode toggle clicked');  // Check if this logs when you click the toggle
    document.body.classList.toggle('dark-mode-variables');

    if (document.body.classList.contains('dark-mode-variables')) {
        logo.src = 'images/logo2.png'; // Path to the dark mode logo
    } else {
        logo.src = 'images/logo.png'; // Path to the light mode logo
    }

    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Right section navigation
const profileMenuBtn = document.getElementById('profile-menu-btn');
const profileMenu = document.getElementById('profile-menu');

profileMenuBtn.addEventListener('click', () => {
    profileMenu.classList.toggle('show');
});

// Function to update progress circle
function updateProgress(valueElement, progressElement, percentage, color) {
    valueElement.textContent = percentage + '%'; // Update the displayed value
    const circumference = progressElement.getAttribute('r') * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;
    progressElement.style.strokeDashoffset = offset; // Update the progress circle
    progressElement.style.stroke = color; // Set stroke color
}

// Function to get color based on temperature
function getColorForTemperature(temperature) {
    if (temperature < 25) {
        return 'blue'; // Example color for lower temperatures
    } else if (temperature >= 25 && temperature < 35) {
        return 'green'; // Example color for moderate temperatures
    } else {
        return 'red'; // Example color for higher temperatures
    }
}

// Function to get color based on humidity
function getColorForHumidity(humidity) {
    if (humidity < 30) {
        return 'red'; // Example color for low humidity
    } else if (humidity >= 30 && humidity < 70) {
        return 'yellow'; // Example color for moderate humidity
    } else {
        return 'blue'; // Example color for high humidity
    }
}

// Function to get color based on energy consumption
function getColorForEnergy(energy) {
    if (energy < 20) {
        return 'green'; // Example color for low energy consumption
    } else if (energy >= 20 && energy < 50) {
        return 'yellow'; // Example color for moderate energy consumption
    } else {
        return 'red'; // Example color for high energy consumption
    }
}

// Function to get color based on airflow
function getColorForAirflow(airflow) {
    if (airflow < 20) {
        return 'red'; // Example color for low airflow
    } else if (airflow >= 20 && airflow < 40) {
        return 'yellow'; // Example color for moderate airflow
    } else {
        return 'green'; // Example color for high airflow
    }
}

// Select elements containing the numbers and progress circles
const temperatureValue = document.querySelector('.sales .info h1');
const temperatureProgress = document.querySelector('.sales .progresss circle');
const humidityValue = document.querySelector('.visits .info h1');
const humidityProgress = document.querySelector('.visits .progresss circle');
const energyValue = document.querySelector('.visits:nth-child(3) .info h1');
const energyProgress = document.querySelector('.visits:nth-child(3) .progresss circle');
const airflowValue = document.querySelector('.searches .info h1');
const airflowProgress = document.querySelector('.searches .progresss circle');

// Calculate percentages (replace these with your actual percentage values)
const temperaturePercentage = 50;
const humidityPercentage = 75;
const energyPercentage = 30;
const airflowPercentage = 60;

// Update progress circles
updateProgress(temperatureValue, temperatureProgress, temperaturePercentage, getColorForTemperature(temperaturePercentage));
updateProgress(humidityValue, humidityProgress, humidityPercentage, getColorForHumidity(humidityPercentage));
updateProgress(energyValue, energyProgress, energyPercentage, getColorForEnergy(energyPercentage));
updateProgress(airflowValue, airflowProgress, airflowPercentage, getColorForAirflow(airflowPercentage));
