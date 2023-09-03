import React, { useState } from "react";

const Say = () => {
  //useState에는 초기화값 message 업데이트할 setMessage가 있다.
  //useState의 초기값에는 공란상태인 string형태가 들어가 있다.
  const [message, setMessage] = useState("");
  const [num, setNum] = useState(0);
  const [color, setColor] = useState("black");

  //onClickEnter,onClickLeave에는 화살표함수를 담고 있기때문에 return 안의 값에 {해당하는 변수명}을 넣어줌
  //onClickEnter를 눌렀을때 공란상태였던 setMessage에 hello가,
  //onClickLeave에는 bye로 바뀌어서 들어감
  const onClickEnter = () => setMessage("hello");
  const onClickLeave = () => setMessage("bye");
  const onClickNum = () => setNum(num + 1);
  return (
    <div className="border" style={{ background: "green" }}>
      {/* color는 초기값 black의 값이 들어가 있음 */}
      <h1 style={{ color }}>{message}</h1>
      <h1 style={{ color }}>{num}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={onClickNum}>클릭시 1씩증가</button>
      <div>
        {/* button안의 text color는 red,gray,blue */}
        {/* button을 클릭 했을 때는 setColor("값")을 호출해서 위에 {message},{num}의 text컬러가 red,gray,blue로 바뀜 */}
        <button style={{ color: "red" }} onClick={() => setColor("red")}>
          red
        </button>
        <button style={{ color: "gray" }} onClick={() => setColor("gray")}>
          gray
        </button>
        <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
          blue
        </button>
      </div>
    </div>
  );
};

export default Say;
