import React from "react";

function LoadExampleBtn({ loadExample }) {
  const handleClick = () => {
    loadExample();
  };

  return (
    <button type="button" onClick={handleClick}>
      Load Example
    </button>
  );
}

export default LoadExampleBtn;
