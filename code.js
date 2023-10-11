function quicksort(array) {
    const stack = []; //Initialize the Stack 
    stack.push(0);  // push left index
    stack.push(array.length - 1);  // push right index

    while (stack.length > 0) {
        const right = stack.pop();
        const left = stack.pop();

        if (right > left) {
            const pivotIndex = partition(array, left, right); // Calculate pivot index 
            if (pivotIndex - 1 > left) {
                stack.push(left);
                stack.push(pivotIndex - 1);
            }
            if (pivotIndex + 1 < right) {
                stack.push(pivotIndex + 1);
                stack.push(right);
            }
        }
    }
    return array; // returns the sorted array 
}

function swap(arr, x, y) { //swap two elements 
    const temp = arr[x]; // store the value of arr[x]
    arr[x] = arr[y];
    arr[y] = temp;
}

function partition(x, left, right) { // Partition the array into smaller and greater elements 
    const pivot = x[right];
    let pivotIndex = left;

    for (let i = left; i < right; i++) { // For Loop through element from left to right 
        if (x[i] <= pivot) {
            swap(x, i, pivotIndex); // swap elements
            pivotIndex++ 
        }  
    }
    swap(x, pivotIndex, right);
    return pivotIndex;
}

console.log(quicksort([5, 3, 9, 1, 4, 8, 2, 7, 6, 10]));

/*
-> Sources used: 

- TA
- Andon Mefford - Classmate 
- https://www.freecodecamp.org/news/how-to-write-quick-sort-algorithm-with-javascript/ 
- https://www.guru99.com/quicksort-in-javascript.html
*/
