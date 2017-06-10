function processData(input) {
    //Enter your code here
    let n = input.split('\n');
    let years = parseInt(n[0]);
    let amounts = n[1].split(' ');
    let loss = [];
    
    for(var i =1; i <= years; i++){
        let price = amounts.filter((val,i) => {
           let minYears = i - 1;
           if(i >= minYears){
               return true;
           }
           return false;
        });
        if (price.length > 1){
            price.forEach((val, i) => {
                if(i > 0) {
                    price[0] - val >= 0 ?  loss.push( price[0] - val) : null
                }
            });
        }
    }
    
    let result = loss.sort((a,b) => a-b);
    console.log(result[0]);
   
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