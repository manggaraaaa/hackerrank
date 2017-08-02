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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    coins = readLine().split(' ');
    coins = coins.map(Number);
    
    var dollar = [];
    dollar[0] = 1;
    
    //inisialisasi empty array dollar
    for (var i = 1; i <= n; i++) {
        dollar[i] = 0;
    }
    
    for (var i = 0; i < coins.length; i++) {
        for (var j = coins[i]; j <= n; j++) {
            dollar[j] += dollar[j - coins[i]];
        }
    }
    
    console.log(dollar[n]);

}
