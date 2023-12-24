

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; 
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; 

    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end);

    } else {
        return binarySearch(arr, target, start, mid - 1);
    }
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const targetValue = 7;

const resultBinarySearch = binarySearch(sortedArray, targetValue);

console.log(resultBinarySearch); 

