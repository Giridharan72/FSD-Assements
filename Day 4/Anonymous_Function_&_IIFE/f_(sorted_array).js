(() => {
    let numbers = [11, 24, 13, 44, 5, 61, 7, 18, 19, 10];
    function swap(numbers,index1,index2){
        let temp=numbers[index1];
        numbers[index1]=numbers[index2];
        numbers[index2]=temp;

        }
        for(let i=0;i<numbers.length-1;i++){
            for(let j=0;j<numbers.length-i-1;j++){
                if(numbers[j]>numbers[j+1]){
                    swap(numbers,j,j+1);
                }
            }
        }
        console.log(numbers);
})();
