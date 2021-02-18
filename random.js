var num = 2.52458; 
var result = Math.floor(num); 
var result2 = Math.ceil(num); 
var result3 = Math.round(num); 

for (var i = 0; i < 10; i++) {
    var dice = Math.random() * 6; 
    var round = Math.round(dice); 
    console.log(round); 
}
