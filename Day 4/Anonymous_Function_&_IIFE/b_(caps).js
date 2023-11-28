(() => {
    let strings = ["hello", "world", "javaScript", "array", "example", "ten", "strings", "programming", "language", "web"];
    
    for (let i = 0; i < strings.length; i++) {
        console.log(strings[i].charAt(0).toUpperCase() + strings[i].slice(1));
    }
})();
