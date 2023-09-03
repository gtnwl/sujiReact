import React, { Component } from "react";
import "./App.css";

//class형 state
class CounterClass extends Component {
  //부모로부터 props를 받아서(어떠한 값을 전달 받음)
  //그 여러가지 속성값을 state로 감싸서 number라는 변수에 변화를 주겠다.
  // constructor(props) {
  //   super(props);
  //   //state의 초기값 설정
  //   //this에 해당하는 상태값을(state) number,fixedNumber를 쓸 건데, number,fixedNumber의 초기값을 0으로 하겠다.
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  //반복되는 props를 개선(constructor함수와 super함수 생략 )
  //render() 아래에 있는 const { number, fixedNumber } = this.state; 를 사용함으로써 함축이 됨
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    //this의 변형할 값을 number로 지정
    const { number, fixedNumber } = this.state;

    return (
      <div className="border" style={{ background: "gray" }}>
        <h1>class형 state</h1>
        <h2>{number}</h2>

        {/* setState로 하지 않았기 때문에 그대로 초기값을 출력 */}
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            //=====버튼 클릭시 this의 상태를 1씩 증가=====
            //기존값의 초기는 : state, 걔를 변화를 주는 함수는 setState
            //즉 버튼 클릭 할 때마다 number에다 +1를 해줘서 number에 담음
            //this.setState({ number: number + 1 });
            //=====버튼을 클릭하면 2씩 증가=====
            //prevState(변수명) : 이전 값(기존상태),이전상태를 담을 수 있는 공간,
            //1 .setState값을 실행할때 기존에 있는 값을 (prevState에 저장이 됨)
            //2. 버튼을 누르면 prevState에 누적이 됨(초기값으로(0)으로 돌아가지 않음)
            //3. 누적이 돼서 2씩 증가되어 출력 됨
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));

            //=====setState가 끝나고 나서 특정 작업을 실행 하고 싶을 경우=====
            //callback 함수 사용 ({} , ()=>{}) (함수 내부에서 또 함수를 실행하는 것)
            this.setState({ number: number + 1 }, () => {
              alert("방금 setState가 호출 되었습니다.");
              console.log(this.state);
            });
          }}
        >
          클릭시 +1씩 증가
        </button>
      </div>
    );
  }
}
export default CounterClass;
