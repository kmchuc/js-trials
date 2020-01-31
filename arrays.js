"use strict";


// 1. printIndices
function printIndices(items) {
  for (const idx in items){
    console.log(`${items[idx]} ${idx}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = [];

  for (const idx in items){
    if (idx % 2 === 0) {
      result.push(items[idx]);
    }
  }
  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  const sorted_items = items.sort((a, b) => a - b);
  const sorted_n_items = sorted_items.slice(0, n);
  sorted_n_items.reverse();

  console.log(sorted_n_items);
}
