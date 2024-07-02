var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a = require("console"), log = _a.log, assert = _a.assert;
//const process = require("process");
var ConArgsError = /** @class */ (function (_super) {
    __extends(ConArgsError, _super);
    function ConArgsError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ConArgsError";
        return _this;
    }
    return ConArgsError;
}(Error));
// This is our main function
function fizzbuzz(maxRange, conArgsMap) {
    // Put your code here...
    for (var i = 1; i <= maxRange; i++) {
        //init message
        var messageArr = [];
        var messageStr = void 0;
        //check fizz/fezz/buzz/bang cases
        if (i % 3 == 0 && conArgsMap.get('3')) {
            messageArr.push("Fizz");
        }
        if (i % 13 == 0 && conArgsMap.get('13')) {
            messageArr.push("Fezz");
        }
        if (i % 5 == 0 && conArgsMap.get('5')) {
            messageArr.push("Buzz");
        }
        if (i % 7 == 0 && conArgsMap.get('7')) {
            messageArr.push("Bang");
        }
        //check bong case
        if (i % 11 == 0 && conArgsMap.get('11')) {
            messageArr = ["Bong"];
            //this case is unused for 1<=i<=100
            if (i % 13 == 0 && conArgsMap.get('13')) {
                messageArr.unshift("Fezz");
            }
        }
        //check reverse case
        if (i % 17 == 0 && conArgsMap.get('17')) {
            messageArr.reverse();
        }
        //check for number case or merge array
        messageArr.length == 0 ? messageStr = "".concat(i) : messageStr = messageArr.join("");
        //print message
        console.log(messageStr);
    }
}
//parse user arguments
function main() {
    var maxRange = 100;
    var conArgs = ["3", "5", "7", "11", "13", "17"];
    var conArgsMap = new Map([["3", true], ["5", true], ["7", true], ["11", true], ["13", true], ["17", true]]);
    //check for user prompt
    var argvLen = process.argv.length;
    if (argvLen > 2) {
        maxRange = +process.argv[2];
        //check for rule options
        //rules are true by default
        //entering in specific rule argument will disable rule
        if (argvLen > 3) {
            //ensure only valid amounts of arguments are passed
            var maxArgs = Math.min(9, argvLen);
            //init condition args map data struct, catch invalid arguments
            try {
                var conditionNumStr;
                for (var i = 3; i < maxArgs; i++) {
                    conditionNumStr = process.argv[i];
                    console.log(conArgs.includes(conditionNumStr));
                    conArgs.includes(conditionNumStr) ? conArgsMap.set(process.argv[i], false) : (function () { throw new ConArgsError("invalid condition argument: ".concat(conditionNumStr)); })();
                }
            }
            catch (e) {
                //handle only known errors
                if (e instanceof ConArgsError) {
                    console.error(e.name);
                    console.error(e.message);
                }
                else {
                    throw e;
                }
                return;
            }
        }
    }
    // Now, we run the fizzbuzz function with provided arguments:
    fizzbuzz(maxRange = maxRange, conArgsMap = conArgsMap);
}
main();
