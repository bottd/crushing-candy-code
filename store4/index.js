var store4 = require('./store4-data.js');

// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^

// Return the cost of 'Dark Chocolate Crunchies' from store4
function accessesingData1() {
  return store4['Dark Chocolate Crunchies'].cost;
}

// Return the total number of 'Berry Bites' sold by store4
function accessesingData2() {
  return store4['Berry Bites']['sold on'].length;
}

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candy names that cost more than $2.00
function loopingData1() {
  return Object.keys(store4).reduce((acc, candy) => {
    if (store4[candy].cost > 2) {
      acc.push(candy);
    }
    return acc;
  }, []);
}

// Create a loop to return an object that has the candy name as the key and the cost as the value
function loopingData2() {
  return Object.keys(store4).reduce((acc, candy) => {
    acc[candy] = store4[candy].cost;
    return acc;
  }, {});

}

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? Each date represents 1 item sold. Round revenue to two decimal points. Return your answer as an array: `[total1, total2]`
function challenge1() {
  const poppersRev = getRevenue('Peppermint Poppers');
  const twistsRev = getRevenue('Caramel Twists');
  return [parseFloat(poppersRev.toFixed(2)), parseFloat(twistsRev.toFixed(2))];
}

function getRevenue(candy) {
  return store4[candy]['sold on'].length * store4[candy].cost;
}

// Calculate and return how much money store4 made on January 9th. Round to two decimal points.
function challenge2() {
  const total = Object.keys(store4).reduce((acc, candy) => {
    const filteredSales = store4[candy]['sold on'].filter(date => {
      return date === '2015-01-09';
    });
    acc += store4[candy].cost * filteredSales.length;
    return acc;
  }, 0);
  return parseFloat(total.toFixed(2));
}

// Calculate and return how much store4 made from selling Dark Chocolate Crunchies across all the days. Round to two decimal points.
function challenge3() {
  const cost = store4['Dark Chocolate Crunchies'].cost;
  const sales = store4['Dark Chocolate Crunchies']['sold on'].length;
  return parseFloat((cost * sales).toFixed(2));
}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  challenge1,
  challenge2,
  challenge3,
}
