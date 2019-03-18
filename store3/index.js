var store3 = require('./store3-data.js');

//()()()()() ACCESSING DATA ()()()()()\\

// Return Berry Bites data for store3 on January 7.
function accessesingData1() {
  const jan7 = store3.find(entry => entry.date === '2015-01-07');
  return jan7['inventory sold']['Berry Bites'];
}

// Return how many Mint Wafers were sold on January 9th
function accessesingData2() {
  const jan9 = store3.find(entry => entry.date === '2015-01-09');
  return jan9['inventory sold']['Mint Wafers'].quantity;
}

// Return total number of dates included in the dataset.
function accessesingData3() {
  return store3.length;
}

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to return an array of dates contained in the sale data.
function loopingData1() {
  return store3.map(entry => entry.date);
}

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2() {
  const jan10 = store3.find(entry => entry.date === '2015-01-10');
  return Object.keys(jan10['inventory sold']).reduce((acc, snack) => {
    acc[snack] = jan10['inventory sold'][snack].cost;
    return acc;
  }, {});
}

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3() {
  return store3.reduce((total, entry) => {
    total += entry['inventory sold']['Peanut Butter Buttered Peanuts'].quantity;
    return total;
  }, 0);
}

//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th and return the result fixed to two decimal points
function challenge1() {
  const jan9 = store3.find(entry => entry.date === '2015-01-09');
  const revenue = Object.keys(jan9['inventory sold']).reduce((sum, snack) => {
    const { cost, quantity } = jan9['inventory sold'][snack];
    sum += cost * quantity;
    return sum;
  }, 0);
  return parseFloat(revenue.toFixed(2));
}

module.exports = {
  accessesingData1,
  accessesingData2,
  accessesingData3,
  loopingData1,
  loopingData2,
  loopingData3,
  challenge1,
};
