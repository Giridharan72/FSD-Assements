(() => {
    function isPalindrome(str) {
        const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }

    let strings = ["radar", "level", "civic", "kayak", "hello", "world"];

    for (let i = 0; i < strings.length; i++) {
        if (isPalindrome(strings[i])) {
            console.log(`${strings[i]} is a palindrome.`);
        } else {
            console.log(`${strings[i]} is not a palindrome.`);
        }
    }
})();
