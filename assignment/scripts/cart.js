//====================================================================================//
console.log('***** Cart Functions *****');
console.log('***** To test base code without errors, please comment out lines 55 to 110');
// - Create a global variable named `basket` and set it to an empty array.
let basket = [];

// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added

function addItem(item){
     basket.push(item);
     return true;
};

addItem('Eggs')
addItem('Bread')
addItem('Soap')
addItem('Sponges')
addItem('Honey')

console.log(basket)


// // - Create a function called `listItems`. It should:
// //   - loop over the items in the `basket` array
// //   - console.log each individual item on a new line

function listItems(){
     for (let items of basket){
          console.log(items);
     };
};

listItems()

// // - Create a function called `empty`. It should:
// //   - reset the `basket` to an empty array

function empty(){
     return basket=[];
};


console.log(basket)
empty()
console.log(basket)

//====================================================================================//
console.log('***** Stretch Goals *****');
console.log('***** To test stretch goals code without errors, please comment out lines 13-24 AND 42-49 *****')
// 1. Add a global `const` named `maxItems` and set it to 5.

const maxItems = 5;

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)

function isFull(){
     if (basket.length>=maxItems){
          return true;
     }else return false;
};

// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`

function addItem(item){
     if (!isFull()){
     basket.push(item);
     return true;     
     } else 
     console.log('No more room in the basket');
     return false;
};

console.log(addItem('Eggs'))
console.log(addItem('Bread'))
console.log(addItem('Soap'))
console.log(addItem('Sponges'))
console.log(addItem('Candy'))
console.log(addItem('Bananas'))
listItems()


// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found


function removeItem(item){
     if (basket.indexOf(item)>=0){
          let found = basket.indexOf(item);
          return basket.splice(found, 1);
     } else return null;
};

console.log(removeItem('Eggs'))
console.log(basket)
console.log(removeItem('Bread'))
console.log(basket)
console.log(removeItem('foo'))
console.log(basket)
