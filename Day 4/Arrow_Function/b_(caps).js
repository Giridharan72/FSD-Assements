let capitalizeStrings = (Strings) => {
    for (let i = 0; i < Strings.length; i++) {
        console.log(Strings[i].charAt(0).toUpperCase() + Strings[i].slice(1));
    }
};

// Example usage
capitalizeStrings(["hello", "world", "javaScript", "array", "example", "ten", "strings", "programming", "language", "web"]);
