import React, { Component } from "react";
import "./ValidationSample.css";
class ScrollBoxClass extends Component {
  // scrollTop : 세로 스크롤바 위치(0~350) clientHeight-scrollheight의 값
  // scrollheight : 스크롤이 있는 박스 안의 div높이 (650)
  // clientHeight : 스크롤이 있는 박스의 높이 (300)

  scrollToBottom = () => {
    //비구조화 할당
    //풀어서 쓰면 const scrollHeight = this.box.scrollHeight, const clientHeight = this.box.clientHeight
    const { scrollHeight, clientHeight } = this.box;

    //scrollHeight - clientHeight이 scrollTop에 담겨 실행
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white,black)",
    };
    return (
      <div
        className="border"
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}>
          <h1>class형 컴포넌트 ref 사용하여 scrollBar 조작</h1>
        </div>
      </div>
    );
  }
}

export default ScrollBoxClass;
