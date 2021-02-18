function getArrayTotal (numbers) {
    var sum = 0; 
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i]; 
        sum = sum + element; 
    }
    return sum; 
}
var result = [45, 65, 56, 45, 12, 3, 54, 69, 71]; 
var output = getArrayTotal(result); 
console.log(output); 