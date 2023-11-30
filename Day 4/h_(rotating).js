(()=>{
    function rotateArray(arr, k) {
        // Calculate the effective rotation index
        let rotationIndex = k % arr.length;
    
        // Rotate the array using slice and concatenation
        let rotatedArray = arr.slice(rotationIndex).concat(arr.slice(0, rotationIndex));
    
        return rotatedArray;
    }
    
    let originalArray = [1, 2, 3, 4, 5];
    let rotatedArray = rotateArray(originalArray, 2);
    
    console.log(rotatedArray);
    
})();