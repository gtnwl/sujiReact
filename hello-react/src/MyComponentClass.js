import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponentClass extends Component {
  //static : MyComponentClass내부에 선언할 때는 static을 사용하여
  //propTypes,defaultProps 적용해서 return(반환)
  static propTypes = {
    //name의 proptypes를 string으로 설정을 해주면 name 값은 무조건 (string) 형태로 전달해야 함(제약)
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  //MyComponent name의 디폴트 Props값을 지정해줄 경우
  //App.js에서 name={}을 사용하지 않을 때 디폴트 name값이 출력됨
  static defaultProps = {
    name: "기본이름",
  };
  render() {
    //this : MyComponentClass
    const { name, children, favoriteNumber } = this.props;
    return (
      <div className="border" style={{ background: "yellow" }}>
        class형 컴포넌트({name})<br />
        children 값은 {children}
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}
      </div>
    );
  }
}

export default MyComponentClass;
