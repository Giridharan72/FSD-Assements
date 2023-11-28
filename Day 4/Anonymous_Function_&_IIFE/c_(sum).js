let sumNumbers = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(sum);
};

// Example usage
sumNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
