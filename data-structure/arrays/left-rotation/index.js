function processData(input) {
    //Enter your code here
   
    var n = input.split('\n')[0].split(' ')[0];
    var d = input.split('\n')[0].split(' ')[1];
    let arr = input.split('\n')[1].split(' ');
    arr = arr.slice(0, n);
    var a = arr.slice(d, arr.length);
    var b = arr.slice(0, d);
    console.log(a.concat(b).join(' '));
 
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
