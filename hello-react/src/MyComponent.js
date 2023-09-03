import React from "react";
import PropTypes from "prop-types";
// const MyComponent = (props) => {
//   return (
//     <div className="border">
//       <h1>화살표함수 컴포넌트({props.name})</h1><br />
//       {/* App.js에서 입력한 '리액트'가 props 부분에 추가됨 */}
//       {/* Mycomponent가 가지고 있는 children(App.js 파일에서의) */}
//       children 값은 {props.children}
//     </div>
//   );
// };

//비구조화 할당 사용 방법 1
//props한테 받아서 변수로 사용(name, children)
//일일이 props에 접근해서 선언하지말고 props로 한번에 받아서 변수로 담아서 사용(props를 선언한 변수(name,children)에 대입)
//외부의 값을(부모로부터) 전달받아서 내부에서 사용하는 것 : 매개변수(props)
// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div className="border">
//       <h1>화살표함수 컴포넌트({name})</h1>
//       children 값은 {children}
//     </div>
//   );
// };

//비구조화 할당 사용 방법 2
//부모로부터(App.js) props만 전달받으니 지역변수로 선언하지말고 전달받는 변수를(name,children) props대신 사용
const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div className="border">
      <h1>화살표함수 컴포넌트({name})</h1>
      <br />
      children 값은 {children}
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}
    </div>
  );
};

//MyComponent의 외부에 있기때문에 MyComponent에 접근 해서 propTypes,defaultProps를 지정(외부로 지정)
MyComponent.propTypes = {
  //name의 proptypes를 string으로 설정을 해주면 name 값은 무조건 (string) 형태로 전달해야 함(제약)
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

//MyComponent name의 디폴트 Props값을 지정해줄 경우
//App.js에서 name={}을 사용하지 않을 때 디폴트 name값이 출력됨
MyComponent.defaultProps = {
  name: "기본이름",
};

export default MyComponent;
