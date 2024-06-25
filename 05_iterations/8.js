//array operations/functions

const myNums = [1, 2, 3]

//reduce function is used to reduce array into some value - reduce returns single value
//array.reduce(function(accumulated, currentValue){ operations performed on/with acc and curr }, intialValue);
//during first run, intialValue given is set in accumulatedValue - if further acc+curr is done - result is again
//set in accumulated for second run - again repeat untill array ends


// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);