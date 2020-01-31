"use strict";


// 1. countWords
function countWords(phrase) {
  // Replace this with your code

  let word_counts = {}

  for (const word of phrase.split(' ')) {
    console.log(word);

      if (word_counts[word]) {
        word_counts[word] += 1;
      }
      else {
        word_counts[word] = 1;
      }
  }
  return word_counts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code

  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (!price in melon_prices) {
    return 
  }

  const sorted_items = melon_prices[price].sort((a, b) => a - b);
  return sorted_items;
}
