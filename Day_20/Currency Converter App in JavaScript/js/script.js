// Selecting all dropdown lists, fromCurrency dropdown, toCurrency dropdown, and the search button
const dropList = document.querySelectorAll("form select"),
    fromCurrency = document.querySelector(".from select"),
    toCurrency = document.querySelector(".to select"),
    getButton = document.querySelector("form button");

// Populating the dropdown lists with currency options and setting default selections
for (let i = 0; i < dropList.length; i++) {
    for (let currency_code in country_list) {
        let selected = i == 0 ? (currency_code == "USD" ? "selected" : "") : (currency_code == "INR" ? "selected" : "");
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", (e) => {
        loadFlag(e.target);
    });
}

// Function to load flag image based on selected currency
function loadFlag(element) {
    for (let code in country_list) {
        if (code == element.value) {
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

// Event listener for the window load event to call getExchangeRate
window.addEventListener("load", () => {
    getExchangeRate();
});

// Event listener for the search button click event
getButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    getExchangeRate();
});

// Event listener for the exchange icon click event
const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
});

// Function to get and display exchange rates
function getExchangeRate() {
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;

    // If user didn't enter any value or entered 0, set the value to 1 by default
    if (amountVal == "" || amountVal == "0") {
        amount.value = "1";
        amountVal = 1;
    }
    
    exchangeRateTxt.innerText = "Getting exchange rate...";

    let url = `https://v6.exchangerate-api.com/v6/8aa1ab13ae5a3074fc28360a/latest/${fromCurrency.value}`;

    // Fetching exchange rate data using the ExchangeRate API
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            let exchangeRate = result.conversion_rates[toCurrency.value];
            let totalExRate = (amountVal * exchangeRate).toFixed(2);
            exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
        })
        .catch(() => {
            exchangeRateTxt.innerText = "Something went wrong";
        });
}
