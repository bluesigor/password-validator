import { useNavigate } from "react-router-dom";

import "./index.css";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <h1>This password is strong enough!</h1>
      <button onClick={() => navigate("/")} className="again__btn">
        Try again
      </button>
    </div>
  );
};

export default SuccessPage;
