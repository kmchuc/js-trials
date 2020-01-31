"use strict";


function wordsInCommon(words1, words2) {
  // Replace this with your code

  const words1_set = new Set(words1);
  const words2_set = new Set(words2)

  const result = new Set();

  for (const word of words1_set) {
    if (words2_set.has(word)) {
      result.add(word);
    }
  }

  return Array.from(result);
}


function kidsGame(names) {
  // Replace this with your code
}
