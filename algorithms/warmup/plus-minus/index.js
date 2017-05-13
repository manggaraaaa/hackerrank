process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
  
    var tempA = 0, tempB = 0, tempC = 0;
    var sumA, sumB, sumC;
    
    for(var i=0;i<arr.length;i++){
        if(arr[i] > 0){
            tempA += 1
        }
        else if(arr[i] < 0){
            tempB += 1
        }
        else{
            tempC += 1
        }
    }
    
    sumA = tempA/arr.length; console.log(sumA.toFixed(6));
    sumB = tempB/arr.length; console.log(sumB.toFixed(6));
    sumC = tempC/arr.length; console.log(sumC.toFixed(6));
    

}
