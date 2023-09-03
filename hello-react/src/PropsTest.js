import React from "react";

const PropsTest = (props) => {
  return (
    // App.js에서 던진 name의 값을 props으로 전달 받음
    <div className="border">{props.name}</div>
  );
};

export default PropsTest;
