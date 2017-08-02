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
    var s = parseInt(readLine());
    for(var a0 = 0; a0 < s; a0++){
        var n = parseInt(readLine());
        var ans = print();
        console.log(ans(n));
    }
}



function print(){
    var mem=[];    
    return function helper(n){
        if(typeof mem[n] === 'number')
            return mem[n];
        
    if(n<3)
        return n;
    if(n==3)
        return 4;
    
    return mem[n]=helper(n-1)+helper(n-2)+helper(n-3);
        
    }
    
}
