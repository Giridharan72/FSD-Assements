// Define the API endpoint URL for dictionary entries
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// Get HTML elements
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

// Event listener for the search button
btn.addEventListener("click", async () => {
    try {
        // Get the user-input word
        let inpWord = document.getElementById("inp-word").value;

        // Fetch data from the API using the entered word
        const response = await fetch(`${url}${inpWord}`);
        
        // Parse the JSON data from the response
        const data = await response.json();

        // Display the fetched data in the result section
        result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>
                <button onclick="playSound()">
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
                ${data[0].meanings[0].definitions[0].example || ""}
            </p>`;

        // Set the audio source for pronunciation
        sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
    } catch (error) {
        // Handle errors, display an error message in the result section
        result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    }
});

// Function to play the pronunciation sound
function playSound() {
    sound.play();
}
