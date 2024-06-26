console.log("=============================================");
console.log("Ejercicio 6");

function bblSort(bubbleArr) {
    for (var i = 0; i < bubbleArr.length; i++) {
        for (var j = 0; j < (bubbleArr.length - i - 1); j++) {
            if (bubbleArr[j] > bubbleArr[j + 1]) {
                var temp = bubbleArr[j]
                bubbleArr[j] = bubbleArr[j + 1]
                bubbleArr[j + 1] = temp
            }
        }
    }
    console.log("Output: " + bubbleArr);
}
var bubbleArr = [3, 6, 12, 5, 100, 1];
console.log("Input: " + bubbleArr);
bblSort(bubbleArr);