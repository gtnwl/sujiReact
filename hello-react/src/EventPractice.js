import React, { useState } from "react";
import "./App.css";

const EventPractice = () => {
  //form이라는 이름으로 message와 username을 관리
  //useState안에는 초기값(여러개이기 때문에 객체로 만듦 -> {})

  const [form, setForm] = useState({
    //message의 초기값은 ""
    message: "",
    //username의 초기값은 ""
    username: "",
  });

  //messge와 username은 form에서 가져왔다는 의미
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      //nextForm 공간 안에  ...form 안에 들어가져 있는 객체를 변경하지 않고 새롭게 복사하여 가져옴
      //form을 기존에 있는 값을 그대로 변형하는게 아니라 새롭게 복사해서 변형해야하기 때문에 ...form사용
      ...form,
      [e.target.name]: e.target.value,
    };
    //기존에 있는 값을 nextForm으로 반영(변경)
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      message: "",
      username: "",
    });
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div className="border" style={{ background: "skyblue" }}>
      <h1>함수형 컴포넌트 이벤트 핸들링</h1>
      <input
        type="text"
        name="message"
        placeholder="유저명"
        value={message}
        onChange={onChange}
      />
      <input
        type="text"
        name="username"
        placeholder="아무거나 입력해 보세요."
        value={username}
        onChange={onChange}
        //키보드의 Enter키가 눌렸을때 실행 이벤트
        onKeyDown={onKeyDown}
      />
      {/* 변경값에 해당하는 값이 잘 출력 되는지 검증 */}
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;
