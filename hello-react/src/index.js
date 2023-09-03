import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Test from "./Test";
import ClassTest from "./ClassTest";
import reportWebVitals from "./reportWebVitals";

// DOM에(ReactDOM) 접근해서 사용할수 있는 함수가 실행되는데 그 함수에 createRoot를 만들 수 있는 매개값을 'root'로 가져와 렌더링 시킴
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //React.StrictMode : 안에 있는 태그를 감싸서 검사함(두 번 렌더링해서 빼는게 좋음)
  <>
    <App />
    <Test />
    <ClassTest />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
