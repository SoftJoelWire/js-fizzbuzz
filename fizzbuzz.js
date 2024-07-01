// This is our main function
function fizzbuzz() {
    // Put your code here...
    for(let i=1; i<=300; i++) {
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
        if(message.length == 0) {message = i;} else {message = message.join("");}

        //print message
        console.log(message);
    }
}

// Now, we run the main function:
fizzbuzz();

