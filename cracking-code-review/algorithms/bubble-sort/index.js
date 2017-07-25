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
    a = readLine().split(' ');
    a = a.map(Number);
    
    // Track number of elements swapped during a single array traversal
    var numberOfSwaps = 0;

    for(var i = 0 ; i < n- 1; i++) {

        for(var j = 0; j < n - i; j++ ) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j+1]) {
                swap(a, j);
            }
        }
        
        // If no elements were swapped during a traversal, array is sorted
        if(numberOfSwaps == 0) {
            break;
        }        
    }

    function swap(l, i) {
        var temp = l[i];
        l[i] = l[i + 1];
        l[i + 1] = temp;
        numberOfSwaps ++;
    }

    var firstElement = a[0];
    var lastElement = a[n-1];


    console.log("Array is sorted in " + numberOfSwaps +" swaps.\nFirst Element: " + firstElement + "\nLast Element: " + lastElement);

}
