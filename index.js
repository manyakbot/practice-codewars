
function narcissistic(value) {
    let strValue = value.toString();
    
    let numDigits = strValue.length;
    
    let sum = 0;
    for (let digit of strValue) {
        sum += Math.pow(parseInt(digit), numDigits);
    }
    
    return sum === value;
}