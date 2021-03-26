function processData(input) {

    input = parseInt(input);

    function watermelon(input) {
        return input % 2 === 0 && input != 2 ? "YES" : "NO";
    }
    console.log(watermelon(input));
}

//process.stdin.resume();
//process.stdin.setEncoding('ascii');
_input = "";
process.stdin.on("data", function(input){
    _input += input;
});

process.stdin.on("end", function(){
    processData(_input);
});

//process.stdout.write("");

//process.stdin.on('data', function(data) {
    //process.stdout.write(data % 2 == 0 && data != 2 ? "YES" : "NO");
    //process.exit();
//});
