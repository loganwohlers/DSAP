//O(2^n)
function fibonacciRecursive(n) {
    if (n < 2) {
        return n
    }
    return (fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1))

}

function findFactorialRecursive(number) {
    if (number < 2) {
        return 1;
    }
    return number * findFactorialRecursive(number - 1)
}

function reverseStringRecursive(str) {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}