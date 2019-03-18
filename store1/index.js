var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// Return the value '4.63' from store1
function accessesingData1() {
  return store1['2015-01-08'][0][1];
}

// Return how many 'Mint Wafers' were sold on January 6th
function accessesingData2() {
  return store1['2015-01-06'][1][2];
}

// *********** LOOPING OVER DATA *********** \\

// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
function loopingData1() {
  return store1['2015-01-08'].map(candy => candy[0]);
}

// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
function loopingData2() {
  return store1['2015-01-10'].reduce((sum, candy) => {
    sum += candy[2];
    return sum;
  }, 0);
}

// Counter is initialized as argument #2 of reduce as the accumulator with an intial value of 0

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
function loopingData3() {
  return Object.keys(store1);
}

// Use a loop to calculate the total number of candies sold at store1.
function loopingData4() {
  return Object.keys(store1).reduce((sum, date) => {
    sum += store1[date].reduce((candyTotal, candy) => {
      candyTotal += candy[2];
      return candyTotal;
    }, 0);
    return sum;
  }, 0);
}

// In the previous exercise, where did you have to initialize the counter variable? Why?
//
function loopingData5() {
  return 'I had 1 counter variable, sum, in the top level reduce to handle the total sum that will be returned from the function.  I then use a second accumulator in an inner reduce to handle the individual date entry totals before adding them onto the sum.';
}

// *********** CHALLENGE *********** \\

// Calculate the total revenue of the candies sold by store1 on January 10th.
// Be sure to return a number! Example `14.55`
function challenge1() {
  const total =  store1['2015-01-10'].reduce((revenue, candy) => {
    revenue += (parseFloat(candy[1]) * candy[2]);
    return revenue;
  }, 0);
  return parseFloat(total.toFixed(2));
}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  loopingData3,
  loopingData4,
  loopingData5,
  challenge1,
};
