function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray
}
console.log(reverseString("Hello"))

function validatePassword(password) {
    if (password.length < 12) {
        return "This password is to short";
    }
    return "This password is valid👍"
}
console.log(validatePassword("asdfrthgchkzuio"))