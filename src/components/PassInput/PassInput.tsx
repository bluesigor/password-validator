import { FC } from "react";

import "./index.css";

type PassInputProps = {
  password: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isShowPass: boolean;
};

const PassInput: FC<PassInputProps> = ({
  handleChange,
  password,
  isShowPass,
}) => {
  return (
    <input
      value={password}
      className="pass__input"
      type={isShowPass ? "text" : "password"}
      onChange={handleChange}
    />
  );
};

export default PassInput;
