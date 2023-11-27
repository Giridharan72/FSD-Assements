let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    if (xhr.status === 200) {
        // Parse the JSON response
        const countries = JSON.parse(xhr.responseText);

        // Display country information in the console
        countries.forEach(country => {
            const name = country.name.common;
            const region = country.region;
            const subregion = country.subregion;
            const population = country.population;

            console.log(`Country: ${name}`);
            console.log(`Region: ${region}`);
            console.log(`Subregion: ${subregion}`);
            console.log(`Population: ${population}`);
            console.log('------------------------');
        });
    } else {
        console.error(`Error fetching data. Status code: ${xhr.status}`);
    }
};

xhr.send();