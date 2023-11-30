(() => {
    function removeDuplicates(arr) {
        let uniqueArray = [];

        for (let i = 0; i < arr.length; i++) {
            // Check if the element is not already in the uniqueArray
            if (!uniqueArray.includes(arr[i])) {
                uniqueArray.push(arr[i]);
            }
        }

        return uniqueArray;
    }

    let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1];
    let uniqueArray = removeDuplicates(arrayWithDuplicates);

    console.log(uniqueArray);
})();
