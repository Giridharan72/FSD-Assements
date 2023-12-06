let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
  if (xhr.status === 200) {
    const countries = JSON.parse(xhr.responseText);

    /// 1. Get all countries from Asia using the filter function
    const asiaCountries = countries
    .filter(country => country.region.includes('Asia'))
    .map(country => country.name.common);
  console.log('Countries from Asia:', asiaCountries);

  console.log('----------------------------------------------------------------------------------');

  // 2. Get names of all countries with a population of less than 2 lakhs using the filter function
  const lessThan2LakhPopulationCountries = countries
    .filter(country => {
      const population = country.population?.value || 0;
      return population < 200000;
    })
    .map(country => country.name.common);
  console.log('Countries with population less than 2 lakhs:', lessThan2LakhPopulationCountries);
 
  console.log('----------------------------------------------------------------------------------');

  // 3. Print details (name, capital, flag) using forEach function
  console.log('Details of all countries:');
  countries.forEach(country => {
    const name = country.name.common;
    const capital = country.capital?.[0] || 'N/A';
    const flag = country.flags?.svg || 'N/A';
    console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
  });

  console.log('----------------------------------------------------------------------------------');

  // 4. Print the total population of countries using reduce function
  const totalPopulation = countries.reduce((acc, country) => {
    const population = country.population?.value || country.population;
    return acc + (typeof population === 'number' ? population : 0);
  }, 0);

  console.log('Total population of countries:', totalPopulation);

  console.log('----------------------------------------------------------------------------------');

  // 5. Print the country that uses US dollars as currency
  const usDollarCountries = countries
  .filter(country => country.currencies?.USD)
  .map(country => country.name.common);

if (usDollarCountries.length > 0) {
  console.log('Countries that use US dollars:');
  usDollarCountries.forEach((country, index) => {
    console.log(`Country ${index + 1}: ${country}`);
  });
 } else {
  console.log('No country found that uses US dollars.');
 }
 } else {
   console.error(`Error fetching data. Status code: ${xhr.status}`);
 }
};

xhr.send();
