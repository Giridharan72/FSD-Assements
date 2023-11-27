let XMLHttpRequest=require(`xhr2`);
let xhr=new XMLHttpRequest();
xhr.open(`GET`,`https://restcountries.com/v3.1/all`);
xhr.onload=function(){
    if (xhr.status === 200) {
        // Parse the JSON response
        const countries = JSON.parse(xhr.responseText);

        // Display flags in the console
        countries.forEach(country => {
            const flag = country.flags.svg;
            console.log(`${country.name.common}: ${flag}`);
        });
    } else {
        console.error(`Error fetching data. Status code: ${xhr.status}`);
    }
}
xhr.send();