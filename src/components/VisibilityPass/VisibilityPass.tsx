import { FC } from "react";

import { BiHide, BiShow } from "react-icons/bi";

type VisibilityPassProps = {
  handleVisibility: () => void;
  isShowPass: boolean;
};

const VisibilityPass: FC<VisibilityPassProps> = ({
  handleVisibility,
  isShowPass,
}) => {
  return (
    <>
      {isShowPass ? (
        <BiHide className="hide__icon" onClick={handleVisibility} />
      ) : (
        <BiShow className="show__icon" onClick={handleVisibility} />
      )}
    </>
  );
};

export default VisibilityPass;
