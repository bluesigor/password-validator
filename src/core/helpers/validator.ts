export function lengthValidation(password: string) {
  const trimmedPass = password.trim();
  const regex = /^[^\s]{8,16}$/;

  return regex.test(trimmedPass);
}

export function digitAlphabetValidation(password: string) {
  const trimmedPass = password.trim();
  const regex =
    /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-_=+[\]{};:'",<>./?\\`~]*$/;

  return regex.test(trimmedPass);
}

let cachedWords: string[] | null = null;

export async function containsEnglishWord(password: string) {
  try {
    if (!cachedWords) {
      const response = await fetch("/words.txt");
      const text = await response.text();
      cachedWords = text.split(/\s+/).map((word) => word.trim().toLowerCase());
    }

    const lowercaseInput = password.toLowerCase();

    const includesEnglishWord = cachedWords.some(
      (word) => word.length > 2 && lowercaseInput.includes(word)
    );

    return includesEnglishWord;
  } catch (error) {
    return false;
  }
}
