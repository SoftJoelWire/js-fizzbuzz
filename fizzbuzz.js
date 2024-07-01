// This is our main function
function fizzbuzz() {
    // Put your code here...
    for(let i=1; i<=100; i++) {
        //start with fizzbuzz case
        if(i%5 == 0 && i%3 == 0) {console.log("Fizzbuzz");}

        //check fizz/buzz cases
        else if(i%3 == 0) {console.log("Fizz");}
        else if(i%5 == 0) {console.log("Buzz");}

        //default case
        else {console.log(i);}
    }

}

// Now, we run the main function:
fizzbuzz();

