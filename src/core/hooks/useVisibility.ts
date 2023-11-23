import { useState } from "react";

const useVisibility = () => {
  const [isShowPass, setIsShowPass] = useState(false);

  const handleVisibility = () => {
    if (!isShowPass) {
      setIsShowPass(true);
    } else {
      setIsShowPass(false);
    }
  };

  return { isShowPass, handleVisibility };
};

export default useVisibility;
