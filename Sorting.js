//BUBBLE SORT
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
    }
}

//SELECTION SORT
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min_index = i
        let temp = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j
            }
        }
        arr[i] = arr[min_index]
        arr[min_index] = temp
    }
}


////////////////////////////
//splicing returns a sub array-- which is why we have to do the [0] to actually get the value


//INSERTION SORT
function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            //move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (array[i] < array[i - 1]) {
                //find where number should go
                for (var j = 1; j < i; j++) {
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        //move number to the right spot
                        array.splice(j, 0, array.splice(i, 1)[0]);
                    }
                }
            }
        }
    }
}

//INSERTION SORT-- MINE
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            arr.unshift(arr.splice(i, 1)[0])
        } else {
            //only sort if it's smaller than the number to it's left- otherwise we can just leave it
            if (arr[i] < arr[i - 1]) {
                for (let j = 1; j < arr.length; j++) {
                    if (arr[i] < arr[j]) {
                        arr.splice(j, 0, arr.splice(i, 1)[0])
                    }
                }
            }
        }
    }
}
///////////////////////
//MERGE part of MERGESORT
function merge(left, right) {
    let results = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            results.push(left[leftIndex]);
            console.log(results)
            leftIndex++;
        } else {
            results.push(right[rightIndex])
            console.log(results)
            rightIndex++;
        }
    }
    //The slicing here is because we can end up finishing one side before the other-- in which case we need to concat the remainder of the other (it WILL be sorted correctly) . Since we have no guarantee which side will have leftover we concat BOTH
    return results
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex))
}
/////////////////
//FULL MERGE SORT-- splits it down to single element arrays then merges them back together
function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    const length = array.length;
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)
    // console.log('left:', left);
    // console.log('right:', right);


    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length &&
        rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    // console.log(left, right)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
/////////////////////////////////////