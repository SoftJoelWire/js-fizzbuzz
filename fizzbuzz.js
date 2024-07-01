const { log } = require("console");
const process = require("process");

// This is our main function
function fizzbuzz(maxRange) {
    // Put your code here...
    for(let i=1; i<=maxRange; i++) {
        //init message
        let message = [];


        //check fizz/fezz/buzz/bang cases
        if(i%3 == 0) {message.push("Fizz");}
        if(i%13 == 0) {message.push("Fezz");}
        if(i%5 == 0) {message.push("Buzz");}
        if(i%7 == 0) {message.push("Bang");}

        //check bong case
        if(i%11 == 0) {
            message = ["Bong"];
            //this case is unused for 1<=i<=100
            if(i%13 == 0) {message.unshift("Fezz");}
        }
        
        //check reverse case
        if(i%17 == 0) {
            message.reverse();
        }

        //check for number case or merge array
        message.length == 0 ? message = i : message = message.join("");

        //print message
        console.log(message);
    }
}

//parse user arguments
function main() {

    var maxRange = 100


    //check for user prompt
    var argvLen = rocess.argv.length;
    if(argvLen > 2) {
        maxRange = process.argv[2];

        //check for rule options
        //rules are true by default
        //entering in specific rule argument will disable rule
        if(argvLen > 3) {
            for(let i=3; i<argvLen; i++) {
                
            }
        }
    }

    // Now, we run the main function:
    fizzbuzz(maxRange=maxRange);
}

main();