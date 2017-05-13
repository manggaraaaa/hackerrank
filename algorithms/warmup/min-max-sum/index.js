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
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var result=arr.map((x,i) => {
        var r=0
        for(j=0;j<arr.length;j++) {
            if(i!=j){
                r=arr[j]+r
            }         
        }
        return r
    })
    
    console.log(Math.min.apply(null,result), Math.max.apply(null,result))


}
