import React, { useState } from "react";

const IterationSample2 = () => {
  const [names, setNames] = useState([]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(0);

  //클릭한 li의 매개변수id로 받아옴
  const onRemove = (id) => {
    //클릭한 li의 name.id를 빼고(삭제하고) nextNames에 담아서
    //setNames로 변경하여 실행
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  //새롭게 변경되는 객체를 nameList로 만듦
  const nameList = names.map((name) => (
    <li key={name.id} onClick={() => onRemove(name.id)}>
      {name.text}
      {/* 버튼을 클릭하면 onRemeove함수 실행 (name.id를 매개값으로 던짐)*/}
      <button onClick={() => onRemove(name.id)}>삭제</button>
    </li>
  ));

  //input 안에 어떤 text가 들어갔는지 인지를 하기 위해 onChange 이벤트 실행
  const onChange = (e) => {
    //입력하는 값이 setInputText로 바뀌어야 됨
    setInputText(e.target.value);
  };

  //버튼 클릭시 input안에 입력된 text가 li가 추가 되어야함
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  return (
    <div className="border" style={{ background: "skyblue" }}>
      <h1>함수형 컴포넌트 반복문사용 2(key값 올바르게 사용)</h1>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>

      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample2;
