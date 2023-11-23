import { useState } from "react";

import { APP } from "../models";
import {
  containsEnglishWord,
  digitAlphabetValidation,
  lengthValidation,
} from "../helpers/validator";

const useValidation = () => {
  const [error, setError] = useState<APP.Error>({
    isError: false,
    message: "",
  });

  async function passwordChecker(password: string) {
    try {
      const containsEnglish = await containsEnglishWord(password);

      if (!lengthValidation(password)) {
        setError({
          isError: true,
          message: "Min 8 and max 16 characters are allowed",
        });
      } else if (!digitAlphabetValidation(password)) {
        setError({
          isError: true,
          message: "Min 1 digit and only latin alphabet allowed",
        });
      } else if (containsEnglish) {
        setError({
          isError: true,
          message: "English words aren't allowed as well *_*",
        });
      } else {
        setError({
          isError: false,
          message: "",
        });
      }
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }

  return { passwordChecker, error };
};

export default useValidation;
