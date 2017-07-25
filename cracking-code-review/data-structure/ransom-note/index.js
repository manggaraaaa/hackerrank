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
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    ransom.sort();

    i=0
    cnt=1;

    while(n>0){        
        if(ransom[i]!=ransom[i+1]){
           if(cnt> (magazine.split(ransom[i]).length-1)){               
               console.log("No");
               return;
           }
            n-=cnt;
            cnt=0;            
        }        
        cnt++;
        i++;
    }
  
console.log("Yes");

}
