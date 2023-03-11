// var text ='The World War II was started by the Germany in 1935'
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "Second World War" + text.slice(i + 12);
//     }
//     console.log(text);
// }
function capFirstLetter(str) {
    var cap = str.charAt(0).toUpperCase() + str.slice(1);
    return cap;
}
var string = prompt('Enter a string: ');
var result = capFirstLetter(string);
console.log(result);

