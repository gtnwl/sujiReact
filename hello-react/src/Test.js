import "./App.css";

function Test() {
  const name = "홍수지";
  const number = 0; //숫자 0은 false, 1은 true;
  const inlineStyle = "inline style";

  //react 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하면 안 된다.
  // 만약 undefined가 꼭 필요한 상황이라고 하면 ||(or) 연산자를 사용하여 undefined일 때 사용할 값을 지정해 오류를 방지할 수 있다.
  const style = {
    backgourndColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
    border: "solid 1px black",
  };

  return (
    <>
      <div className="border">
        <h1>Test.js 화면</h1>
        {/* null : 초기화 시키는 것 , undefined : 공간은 있는데 아무것도 정의를 안 한 것 */}
        {/* 조건부 연산자 */}
        {name === "안녕" ? <h1>{name} 마즘</h1> : <h1>{name} 아님</h1>}

        {/*&& : name 값이 선언한 name 값과 같으면 '홍수지 마즘' //true 값만 출력 */}
        {name === "홍수지" && <h1>{name} 마즘</h1>}

        {/*&& : number 값이 선언한 number 값과 같으면 '0 마즘' //true 값만 출력 */}
        {number && <h1>{number} 마즘</h1>}

        {/* function App(){
          const text = undefined;

          //하나의 DOM으로 return(반환) 하겠다는 의미
          return text || "값이 undefined입니다."

          만약 아래처럼 하면
          return <div>{text || "값이 undefined입니다."}<div/> 안에 감싸는 건 jsx문법이 됨
          

          const text = undefined에서 text을 return 할 때 text을 직접적으로 반환하면 안 됨
          방법 1. return text || "값이 undefined입니다."
          방법 2. return <div>{text || "값이 undefined입니다."}<div/>
        } */}
      </div>

      <div className="border" style={style}>
        <h1>{inlineStyle}</h1>
      </div>
    </>
  );
}

export default Test;
