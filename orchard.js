///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0;

for (let i = 0;i < fujiAcres.length && galaAcres.length && pinkAcres.length;i++) {
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}
console.log(totalAcres);

// come back!!! total is 63 
// Fixed the problem! I overthought this problem right around adding the numbers to the new variable. I also realized it's easier to create the variable outside of the for loop then integrate it into the problem. Becuase otherwise I have to deal with declaring it inside the for loop. But I now understand that each itiration just adds the apples then adds it to the current value of totalArces, then repeats the process until it hits the same length as the apples arrays. 


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = 0;

for (let i = 0;i < fujiAcres.length && galaAcres.length && pinkAcres.length;i++) {
        averageDailyAcres = (totalAcres) / 7;
}
console.log(averageDailyAcres);

//average is 9/day come back!!
// fixed this problem to give me the averages all added together. I felt like I overthought a lot of these problems. 
// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0) {
   days++;
   acresLeft -= averageDailyAcres;
}
console.log(days);
// fixed  this problem to stop getting 18 days. I overthought this problem as well. I also didn't have an assignment operator for when you subtract the amount of days from the average daily. So it wasn't giving acresLeft a new value for each iteration. 

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []

for (let i = 0;i < fujiAcres.length && galaAcres.length && pinkAcres.length;i++) {
    
      fujiTons = (fujiAcres[i]) * 6.5;
      galaTons = (galaAcres[i]) * 6.5;
      pinkTons = (pinkAcres[i]) * 6.5;
}

// console.log(fujiTons);
// console.log(galaTons);
// console.log(pinkTons);



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
// 97.5 tons //27857.14 lbs per day
//169 tons //48285.7 lbs per day
//143 tons //40857.14 lbs  per day
let fujiPounds = 195000
let galaPounds = 338000
let pinkPounds = 286000

// for (let i = 0;i < 1;i++) {
//     fujiPounds = fujiPounds / 7;
//     galaPounds = galaPounds / 7;
//     pinkTons  = pinkTons / 7;
// }
// console.log(fujiPounds);
// console.log(galaPounds);
// console.log(pinkPounds);





// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = 0;
let galaProfit = 0;
let pinkProfit = 0;


for (let i = 0;i < 1;i++) {
    fujiProfit = fujiPounds * fujiPrice;
    galaProfit = galaPounds * galaPrice;
    pinkProfit = pinkPounds * pinkPrice;
}
// console.log(fujiProfit);
// console.log(galaProfit);
// console.log(pinkProfit);





// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

for (let i = 0;i < 1;i++) {
    totalProfit = fujiProfit +  galaProfit + pinkProfit;
//    console.log(totalProfit);
}

//took the variables that already contained the profits and added them together before assigning them to the new variable totalprofit. So that it would do all the math then append the correct value to  totalprofit.