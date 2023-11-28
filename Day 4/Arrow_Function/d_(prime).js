(() => {
    let isPrime = (number) => {
        if (number <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    };

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            console.log(numbers[i]);
        }
    }
})();
