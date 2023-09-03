import React from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, idx) => <li key={idx}>{name}</li>);
  /*key 값을 idx로만 하면 안 됨(0번째는 눈사람, 1번째는 얼음,,,,이런식으로 순서대로 대입하는데 만약 names 안에서 얼음이라는 단어가 빠지면
    "눈"의 key값이 1번이 되기 때문
  )*/
  return (
    <div className="border" style={{ background: "skyblue" }}>
      <h1>함수형 컴포넌트 반복문사용 1(.map)</h1>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
