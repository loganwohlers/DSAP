function reverse(str) {
    if (str === "") {
        return ""
    }
    let len = str.length
    return reverse(str.slice(0 - len - 1) + str[len - 1])
}