// Function to fetch countries data from the API
async function getCountries() {
    let response = await fetch('https://restcountries.com/v3.1/all');
    let countries = await response.json();
    return countries;
}

// Function to display country cards on the webpage
async function displayCountryCards() {
    // Fetch the countries data
    let countries = await getCountries();

    // Get the container where the country cards will be displayed
    let countriesContainer = document.getElementById('countriesContainer');

    // Iterate through each country in the data
    countries.forEach(country => {
        // Create a card element
        let card = document.createElement('div');
        card.classList.add('card', 'col');

        // Create a card body element
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Create a title element for the country name
        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = country.name.common;

        // Create an image element for the country flag
        let flagImage = document.createElement('img');
        flagImage.classList.add('card-img-top');
        flagImage.src = country.flags.svg;

        // Create paragraphs for additional country information
        let Captial = document.createElement('p');
        Captial.classList.add('card-text');
        Captial.innerText = `Capital: ${country.capital}`;

        let Region = document.createElement('p');
        Region.classList.add('card-text');
        Region.innerText = `Region: ${country.region}`;

        let Country_code = document.createElement('p');
        Country_code.classList.add('card-text');
        Country_code.innerText = `Country Code: ${country.cca2}`;

        // Create a link to check the weather for the country
        let latitude = parseFloat(country.latlng[0]);
        let longitude = parseFloat(country.latlng[1]);

        let checkWeatherLink = document.createElement('a');
        checkWeatherLink.classList.add('btn');
        checkWeatherLink.href = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=489d3604df042507d354c6ddba93d320`;
        checkWeatherLink.innerText = 'Check Weather';

        // Add an event listener to the link to check for errors
        checkWeatherLink.addEventListener('click', async () => {
            try {
                // Attempt to fetch weather data
                let weatherResponse = await fetch(checkWeatherLink.href);

                // Check if the response status is OK (200)
                if (weatherResponse.ok) {
                    let weatherData = await weatherResponse.json();
                    console.log('Weather data:', weatherData);
                    // Handle the weather data as needed
                } else {
                    // Log an error message if the response status is not OK
                    console.error('Error fetching weather data:', weatherResponse.status);
                    // You can display an error message to the user or take other actions
                }
            } catch (error) {
                // Log any other errors that may occur during the fetch
                console.error('Error fetching weather data:', error);
                // You can display an error message to the user or take other actions
            }
        });

        // Append the created elements to the card and card body
        card.appendChild(cardTitle);
        card.appendChild(cardBody);
        cardBody.appendChild(flagImage);
        card.appendChild(Captial);
        card.appendChild(Region);
        card.appendChild(Country_code);
        card.appendChild(checkWeatherLink);

        // Append the card to the countries container
        countriesContainer.appendChild(card);
    });
}

// Call the function to display country cards when the page loads
displayCountryCards();
