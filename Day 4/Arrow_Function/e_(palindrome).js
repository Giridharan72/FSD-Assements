(() => {
    const isPalindrome = str => {
        const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanedStr === cleanedStr.split('').reverse().join('');
    };

    let strings = ["radar", "level", "civic", "kayak", "hello", "world"];

    strings.forEach(str => {
        if (isPalindrome(str)) {
            console.log(`${str} is a palindrome.`);
        } else {
            console.log(`${str} is not a palindrome.`);
        }
    });
})();
