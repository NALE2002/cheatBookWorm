export const loadDictionary = async () => {
  const response = await fetch("/words.json");
  return await response.json();
};

export const findWords = async (letters, minLength = 3) => {
  const dictionary = await loadDictionary();

  const lettersCount = {};
  for (const char of letters.toLowerCase()) {
    lettersCount[char] = (lettersCount[char] || 0) + 1;
  }

  return dictionary
    .filter((word) => {
      if (word.length < minLength) return false;
      const remainingLetters = { ...lettersCount };

      for (const char of word.toLowerCase()) {
        if (!remainingLetters[char] || remainingLetters[char] <= 0) {
          return false;
        }
        remainingLetters[char]--;
      }

      return true;
    })
    .sort((a, b) => b.length - a.length);
};
