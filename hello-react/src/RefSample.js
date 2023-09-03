import React, { Component } from "react";

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    //input로 되어져있는 영역에(input이 됨) current(현재 요소에 접근이라는 의미)
    this.input.current.focus();
  };
  render() {
    return (
      <div className="border" style={{ background: "yellow" }}>
        <h1>class형 컴포넌트 ref 샘플</h1>
        <input ref={this.input} />
      </div>
    );
  }
}

export default RefSample;
