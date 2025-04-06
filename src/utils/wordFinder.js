export const loadDictionary = async () => {
  const response = await fetch("/words.json");
  return await response.json();
};

export const findWords = async (letters, minLength = 3) => {
  const dictionary = await loadDictionary();
  const lettersSet = new Set(letters.toLowerCase());
  return dictionary.filter(
    (word) =>
      word.length >= minLength &&
      [...word].every((char) => lettersSet.has(char))
  );
};
