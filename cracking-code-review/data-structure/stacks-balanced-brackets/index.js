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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var s = readLine();
        const c = s.split('');
        var stack = [];
        var balance = true;
        c.map(function(c){
              if(createBracket(c)){
                stack.unshift(c);
              } else {
                  if(checkBracket(stack[0],c)){
                      stack.shift();
                  } else {
                      balance = false;
                  }
               }
    });
        if(stack.length !== 0){
            balance = false;
        }
        if(balance){
            console.log('YES');
        } else {
            console.log('NO');
        }    
    }   
}

function createBracket(a){
    if(a==='{' || a==='(' || a==='[') return true;
    return false;
}


function checkBracket(open,close){
    if(!open){
        return false;
    }
    switch(close){
        case '}' :
            if(open.includes('{'))
                return true;
        case ')' :
            if(open.includes('('))
                return true;
        case ']' :
            if(open.includes('['))
                return true;
    }
    return false;
}
