const { log, assert } = require("console");
const process = require("process");

class ConArgsError extends Error {
    constructor(message) {
        super(message);
        this.name = "ConArgsError";
    }
}

// This is our main function
function fizzbuzz(maxRange, conArgsMap) {
    // Put your code here...
    for(let i=1; i<=maxRange; i++) {
        //init message
        let message = [];


        //check fizz/fezz/buzz/bang cases
        if(i%3 == 0 && conArgsMap.get('3')) {message.push("Fizz");}
        if(i%13 == 0 && conArgsMap.get('13')) {message.push("Fezz");}
        if(i%5 == 0 && conArgsMap.get('5')) {message.push("Buzz");}
        if(i%7 == 0 && conArgsMap.get('7')) {message.push("Bang");}

        //check bong case
        if(i%11 == 0 && conArgsMap.get('11')) {
            message = ["Bong"];
            //this case is unused for 1<=i<=100
            if(i%13 == 0 && conArgsMap.get('13')) {message.unshift("Fezz");}
        }
        
        //check reverse case
        if(i%17 == 0 && conArgsMap.get('17')) {
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
    var conArgs = ["3", "5", "7", "11", "13", "17"]
    var conArgsMap = new Map([["3", true], ["5", true], ["7", true], ["11", true], ["13", true], ["17", true]]);


    //check for user prompt
    var argvLen = process.argv.length;
    if(argvLen > 2) {
        maxRange = process.argv[2];

        //check for rule options
        //rules are true by default
        //entering in specific rule argument will disable rule
        if(argvLen > 3) {
            //ensure only valid amounts of arguments are passed
            maxArgs = Math.min(9, argvLen);

            //init condition args map data struct
            try {
                for(let i=3; i<argvLen; i++) {
                    conditionNumStr = process.argv[i] 
                    console.log(conArgs.includes(conditionNumStr));
                    conArgs.includes(conditionNumStr) ? conArgsMap.set(process.argv[i], false) : (() => {throw new ConArgsError(`invalid condition argument: ${conditionNumStr}`);})();
                }
            } catch (e) {
                console.error(e.name);
                console.error(e.message);
                return;
            }
        }
    }

    // Now, we run the main function:
    fizzbuzz(maxRange=maxRange, conArgsMap=conArgsMap);
}

main();