import { legacy_createStore as createStore } from "redux";

//DOM 노드를 가리키는 값 선언(React언어가 설치 되어 있지 않아서 자바스크립트로 선언)
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

//ACTION 이름 선언
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//ACTION 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH }); //type이 TOGGLE_SWITCH것을 실행
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

//리듀서의 초기값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

//리듀서
function reducer(state = initialState, action) {
  //action.type에 따라 다른 작업을 처리함
  switch (action.type) {
    // TOGGLE_SWITCH 액션 타입인 경우
    case TOGGLE_SWITCH:
      return {
        //불변성 유지 때문에 ...state사용
        ...state,
        //기존상태의 토글값을 반대값으로 줌(false -> true)
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

//store(스토어)
const store = createStore(reducer);

//store 만들기(상태값을 변경을 하기위한 함수 처리)
//이 함수는 상태가 업데이트 될 때마다 호출
const render = () => {
  //store안에 있는 메서드를 사용(getState)
  const state = store.getState(); //현재 상태를 불러온다
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  counter.innerText = state.counter;
};

//처음 상태의 render함수내부의 값을 알기 위해 render()를 호출하고 아래 있는 store.subscribe 사용
render();

//상태가 업데이트 될 때마다 render함수 호출
store.subscribe(render);

divToggle.onclick = () => {
  //action을 발생시키는 함수(dispatch)
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  //1이라는 매개값을 가지고 action을 일으킴
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
