import React, { Component } from "react";
import "./ValidationSample.css";
class ValidationSampleClass extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    this.setState({
      //클릭하면 true로 변경
      clicked: true,
      validated: this.state.password === "0000",
    });

    if (this.state.password === "0000") {
      alert("패스워드 일치");
    } else {
      alert("패스워드 불일치");
    }

    //해당요소(this) 안에서 aaa를 접근해서 focus라는 매소드 실행(커서가 input에 focus가 됨)
    this.aaa.focus();

    //확인 버튼을 누르면 input에 입력된 값은 초기화
    this.setState({ password: "" });
  };
  render() {
    return (
      <div className="border" style={{ background: "yellow" }}>
        {/* input 태그에 비밀번호를 입력하고 확인버튼을 통해 맞을때, 틀릴때 결과 출력 */}
        {/* 필요한 것: input, 확인버튼, 결과출력 화면 */}
        <h1>class형 컴포넌트 ref 사용1</h1>
        <input
          //refa를 통해서 해당 요소의 aaa한테 접근 (aaa가 ref의 id가 되는 것)
          ref={(refa) => (this.aaa = refa)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          //삼항연산자를 사용하여 clicked의 값이 true이면 className을 success로, 아니면 failure
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>확인</button>
      </div>
    );
  }
}

export default ValidationSampleClass;
