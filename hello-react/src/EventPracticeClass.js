import React, { Component } from "react";
import "./App.css";

class EventPracticeClass extends Component {
  state = {
    //message의 초기값은 ""
    message: "",
    //username의 초기값은 ""
    username: "",
  };

  //매개변수 e가 있는 이유
  //매개변수를 통해서 안에서 e를 사용해야하기 때문에
  handleChange = (e) => {
    this.setState({
      //[e.target.name] 가 key가 됨 (message : )
      [e.target.name]: e.target.value,
    });
  };

  //안에서 e라는 매개변수를 사용하지 않아서 매개변수를 사용하지 않음
  handleClick = () => {
    alert(this.state.message + ":" + this.state.username);

    //해당 message와 username를 초기화
    this.setState({ message: "", username: "" });
  };
  handleKeyPress = (e) => {
    //e.key가 Enter키와 같으면 handleClick이벤트 실행
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div className="border" style={{ background: "skyblue" }}>
        <h1>class형 컴포넌트 이벤트 핸들링</h1>
        <input
          type="text"
          name="message"
          placeholder="유저명"
          //this의 state는 message
          value={this.state.message}
          // onChange={(e) => {
          //   // SyntheticBaseEvent : 기존값을 초기화 하고 값을 출력
          //   // console.log(e);
          //   //e.target : input이 나옴. 즉 input안에 입력한 값이 출력 됨
          //   //console.log(e.target.value);

          //   //change 될때마다 message에 변경값에 해당하는 값들이 출력
          //   this.setState({
          //     message: e.target.value,
          //   });
          // }}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="아무거나 입력해 보세요."
          value={this.state.username}
          onChange={this.handleChange}
          //키보드의 Enter키가 눌렸을때 실행 이벤트
          onKeyDown={this.handleKeyPress}
        />
        {/* 변경값에 해당하는 값이 잘 출력 되는지 검증 */}
        <button
          // onClick={() => {
          //   alert(this.state.message);

          //   //alert창이 뜨고 확인 누르면 input안의 값이 초기화 되도록 함
          //   this.setState({ message: "" });
          // }}
          onClick={this.handleClick}
        >
          확인.
        </button>
      </div>
    );
  }
}
export default EventPracticeClass;
