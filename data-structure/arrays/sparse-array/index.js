function processData(input) {
    //Enter your code here
    
    input = input.split('\n')
    console.log(input);
    let no = input.filter(item => !isNaN(Number(item))).map(Number);
    let str = input.filter(item => isNaN(Number(item)));
    const n = str.slice(0,no[0]);
    const q = str.slice(-no[1]);
    console.log(q);
    q.map(item => {
        console.log(n.filter(current => current === item).length);
    });
    
    
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
