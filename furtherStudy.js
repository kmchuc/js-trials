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

  const output = Array.from(names.pop(0));

  let first_letter_to_words = {};

  for (const name of names) {
    if (! (first_letter_to_words.has(name))) {
      first_letter_to_words.name[0] = Array.from([name]);
    } else {
      first_letter_to_words.name[0].push(name);
    }
  }

  while true {
    const start_letter = output[output.length()-1]
  }

}
