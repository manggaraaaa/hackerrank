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
    var time = readLine();
    
    var arr = time.split(":");
    var ampm = arr[2].slice(2,4);
    var hours = arr[0];
    var minutes = arr[1];
    var second = arr[2].slice(0,2);
    
    if(ampm == "PM"){
        if(parseInt(hours)==12){
            hours=12;
        } else {
            hours=parseInt(hours)+12;
        }
    } else if(ampm == "AM"){
        if(hours==12){
            hours="00";
        } else {
            if(parseInt(hours)>=0) ampm = "AM";
            if(parseInt(hours)>=12) ampm = "PM";
            second = second + ampm;
        }
    }
    console.log(hours+":"+minutes+":"+second);
}
