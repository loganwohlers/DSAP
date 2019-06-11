// Given two arrays(A & B), can you tell if its possible to swap an element from A with an element from B and make the sum of both arrays equal ?

function possibleSwap(a, b) {
    let sumA = 0
    let sumB = 0
    let mappingB = {}

    //get a's sum
    for (let i = 0; i < a.length; i++) {
        sumA += arr[i];
    }

    //get b's sum & map it's values-- we only need to map a OR b
    for (let i = 0; i < b.length; i++) {
        mappingB[b[i]] = true;
        sumB += b[i]
    }

    let diff = sumA - sumB

    //if difference is odd then swap is impossible so return false
    if (diff % 2 !== 0) {
        return false;
    }

    //check if the necesary swap value is contained in the obj of B's values-- this is O(1)
    //time and is why we do the whole mapping step
    for (let i = 0; i < a.length; i++) {
        if (mappingB[diff - a[i]]) {
            return true;
        }
    }
    return false;
}

//ex

const AA = [1, 4, 5]
const BB = [2, 6, 3]


console.log(possibleSwap(AA, BB))