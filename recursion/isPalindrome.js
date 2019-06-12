function isPalindrome(str) {
    if (str.length === 1) {
        return true
    }
    if (str.length === 2) {
        return str[0] === str[1]
    }
    //we just keep slicing start/end of string and checking conditions
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1))
    }
    return false
}

let str = "tacocat"
isPalindrome(str)

