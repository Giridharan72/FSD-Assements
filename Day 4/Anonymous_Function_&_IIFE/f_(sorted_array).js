(() => {
    function mergeArrays(arr1, arr2) {
        let mergedArray = [];
        let i = 0, j = 0;

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                mergedArray.push(arr1[i]);
                i++;
            } else {
                mergedArray.push(arr2[j]);
                j++;
            }
        }

        // Add remaining elements from arr1
        while (i < arr1.length) {
            mergedArray.push(arr1[i]);
            i++;
        }

        // Add remaining elements from arr2
        while (j < arr2.length) {
            mergedArray.push(arr2[j]);
            j++;
        }

        return mergedArray;
    }

    let numbers1 = [11, 24, 44, 61, 65];
    let numbers2 = [5, 7, 18, 19, 27, 30];

    // Merge the arrays
    let mergedArray = mergeArrays(numbers1, numbers2);

    // Calculate the median
    let n = mergedArray.length;
    let median;

    if (n % 2 === 0) {
        median = (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
    } else {
        median = mergedArray[Math.floor(n / 2)];
    }

    console.log("Merged Array:", mergedArray);
    console.log("Median:", median);
})();
