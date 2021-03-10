let arr = [99,20,111,2000,13,3,23,8,5,4,2,1];

const quickSort = () => {
    let pivot = arr[arr.length / 2];
    for(let i=0; i<arr.length;i++){
        if(arr[i]>pivot){
            for(let j=arr.length-1; j>arr.length-1; j--){
                if(arr[j]<pivot){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
}