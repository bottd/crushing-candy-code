var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable, then return that variable
function accessesingData1() {
  return store2['sale dates']['Banana Bunches'];
}

// Using a built-in array property return the total sale dates there are for store2's 'Banana Bunches'
function accessesingData2() {
  return store2['sale dates']['Banana Bunches'].length;
}

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Return your answer as a boolean and write a comment on why or why not.
function updatingData1() {
  let waferPrices = store2['inventory prices']['Mint Wafers'];
  waferPrices = 1;
  // variables hold a reference to a value, since the assignment operator is used the waferPrices value is changed to reference a new value
  return false;
}

// Set a variable equal to the 'Caramel Twists' sale dates in store2. Use pop to remove one of the sale dates for store2's 'Caramel Twists'. Does your variables value match up with what is in store2? Return your answer as a boolean and write a comment on why or why not.
function updatingData2() {
  const caramelTwistDates = store2['sale dates']['Caramel Twists'];
  store2['sale dates']['Caramel Twists'].pop();
  // since store2 and caramelTwistDates both reference the same array in memory when that array's prototype of pop is used to manipulate it the original is changed which updates both variable's values
  return true;
}

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for 'Caramel Twists'. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2014-11-19': 4,
//   '2014-11-20': 3,
// }
function loopingData1() {
  return store2['sale dates']['Caramel Twists'].reduce((acc, date) => {
    if (acc[date]) {
      acc[date] += 1;
    } else {
      acc[date] = 1;
    }
    return acc;
  }, {});
}

// Iterate over store2's sale dates data to find which day had the most total number of sales. Return the date with the most sales.
function loopingData2() {
  const dateTotals = Object.keys(store2['sale dates']).reduce((acc, snack) => {
    store2['sale dates'][snack].forEach(date => {
      if (acc[date]) {
        acc[date] += 1;
      } else {
        acc[date] = 1;
      }
    });
    return acc;
  }, {});
  const sorted = Object.entries(dateTotals).sort((a, b) => {
    return b[1] - a[1];
  });
  return sorted[0][0];
}

/////////// CHALLENGE ///////////

// Create and return an object containing the amounts that store2 made by selling each type of candy. Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }
function challenge1() {
  return Object.keys(store2['inventory prices']).reduce((acc, snack) => {
    const revenue = store2['sale dates'][snack].length * store2['inventory prices'][snack];
    acc[snack] = revenue.toFixed(2)
    return acc;
  }, {});
}

module.exports = {
  accessesingData1,
  accessesingData2,
  updatingData1,
  updatingData2,
  loopingData1,
  loopingData2,
  challenge1,
};
