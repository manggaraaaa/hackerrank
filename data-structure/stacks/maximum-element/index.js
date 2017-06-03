function processData(input) {
    //Enter your code here
    let element = input.split('\n');
    let stack = []
    element.forEach((input, i) => {
        if(i > 0) {
            switch(parseInt(input[0])) {
                case 1:
                    var value = input.split(' ')
                    stack.push(value[1])
                    break
                case 2:
                    stack.pop()
                    break
                case 3:
                    var maxElement = (Array.from(stack)).sort((a,b) => b-a)
                    console.log(maxElement[0])
                    break
            }
        }
    })
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
