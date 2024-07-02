const { log, assert } = require("console");
//const process = require("process");

class ConArgsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ConArgsError";
    }
}

// This is our main function
function fizzbuzz(maxRange: number, conArgsMap: Map<string, boolean>) {
    // Put your code here...
    for(let i=1; i<=maxRange; i++) {
        //init message
        let messageArr: string[] = [];
        let messageStr: string;


        //check fizz/fezz/buzz/bang cases
        if(i%3 == 0 && conArgsMap.get('3')) {messageArr.push("Fizz");}
        if(i%13 == 0 && conArgsMap.get('13')) {messageArr.push("Fezz");}
        if(i%5 == 0 && conArgsMap.get('5')) {messageArr.push("Buzz");}
        if(i%7 == 0 && conArgsMap.get('7')) {messageArr.push("Bang");}

        //check bong case
        if(i%11 == 0 && conArgsMap.get('11')) {
            messageArr = ["Bong"];
            //this case is unused for 1<=i<=100
            if(i%13 == 0 && conArgsMap.get('13')) {messageArr.unshift("Fezz");}
        }
        
        //check reverse case
        if(i%17 == 0 && conArgsMap.get('17')) {
            messageArr.reverse();
        }

        //check for number case or merge array
        messageArr.length == 0 ? messageStr = `${i}` : messageStr = messageArr.join("");

        //print message
        console.log(messageStr);
    }
}

//parse user arguments
function main() {

    var maxRange: number = 100
    var conArgs: string[] = ["3", "5", "7", "11", "13", "17"]
    var conArgsMap: Map<string, boolean> = new Map([["3", true], ["5", true], ["7", true], ["11", true], ["13", true], ["17", true]]);


    //check for user prompt
    var argvLen = process.argv.length;
    if(argvLen > 2) {
        maxRange = +process.argv[2];

        //check for rule options
        //rules are true by default
        //entering in specific rule argument will disable rule
        if(argvLen > 3) {
            //ensure only valid amounts of arguments are passed
            var maxArgs: number = Math.min(9, argvLen);

            //init condition args map data struct, catch invalid arguments
            try {
                var conditionNumStr: string
                for(let i=3; i<maxArgs; i++) {
                    conditionNumStr= process.argv[i];
                    console.log(conArgs.includes(conditionNumStr));
                    conArgs.includes(conditionNumStr) ? conArgsMap.set(process.argv[i], false) : (() => {throw new ConArgsError(`invalid condition argument: ${conditionNumStr}`);})();
                }
            } catch (e: unknown) {
                //handle only known errors
                if(e instanceof ConArgsError) {
                    console.error(e.name);
                    console.error(e.message);
                } else {throw e;}
                return;
            }
        }
    }

    // Now, we run the fizzbuzz function with provided arguments:
    fizzbuzz(maxRange=maxRange, conArgsMap=conArgsMap);
}

main();


/* 
if user wants to add own custom rules then command line argument format may have to change
i.e may need shell argument tags such as -Range num, -Conditionals num1 num2 num3 ..., -NewRule num string
parsing the arguments would likely need to be abstracted to another function (or potentially parser class)

from there would need iterate through all new rules added in fizzbuzz code:
    for(num : newRules) { 
        // log message if num condition is true
    }
may be difficult to let user have control over alphabetical/numerical order.
*/