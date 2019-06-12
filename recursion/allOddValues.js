function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    //using pure recursion to BUILD an array by concating w/ the result of the call.  basically exact same as multiplying in the factorial example
    //slices the first element off and returns the rest                  
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1, 2, 3, 4, 5])

