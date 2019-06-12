function productOfArray(arr) {
    if (arr.length === 0) {
        return 1
    }
    return arr[0] * productOfArray(arr.slice(1))
}

//using slice to dig deeper into array