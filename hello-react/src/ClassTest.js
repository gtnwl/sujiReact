import React, { Component } from "react";
import "./App.css";
import ScrollBoxClass from "./ScrollBoxClass";
import EventPracticeClass from "./EventPracticeClass";
import CounterClass from "./CounterClass";
import ValidationSampleClass2 from "./ValidationSampleClass2";
import ValidationSampleClass from "./ValidationSampleClass";
import MyComponentClass from "./MyComponentClass";
import RefSample from "./RefSample";

//class : 연관이 있는 변수와 함수의 집합
//extends :Component안에 있는 기능을 상속받아 만들어주는 키워드
class ClassTest extends Component {
  render() {
    const name = "리액트";
    return (
      <div className="border">
        <h1>class형 컴포넌트 사용 화면</h1>
        {name}

        <div>
          <ScrollBoxClass ref={(ref) => (this.scrollBox = ref)} />
          <button onClick={() => this.scrollBox.scrollToBottom()}>
            맨 밑으로
          </button>
        </div>
        <CounterClass />
        <MyComponentClass favoriteNumber={22}>리액트</MyComponentClass>
        <EventPracticeClass />
        <RefSample />
        <ValidationSampleClass />
        <ValidationSampleClass2 />
      </div>
    );
  }
}
// function FunctionTest() {
//   const name = "리액트";

//   return <div>{name} 함수형 컴포넌트 사용 화면</div>;
// }
export default ClassTest;
