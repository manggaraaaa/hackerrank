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
    var a = readLine().split('');
    var b = readLine().split('');
    
    var countA = a.length;
    var countB = b.length;
    var count = countA + countB;
    var pair = 0;
    
    for(var i = 0; i < countA;i++){
        for(var j = 0; j < countB; j++){
            if(a[i] == b[j]){
                b.splice(j,1);
                pair++;
                break;
            }
        }
    }
    
    console.log(count - (pair*2));

}
