import "./App.css";
import EventPractice from "./EventPractice";
import MyComponent from "./MyComponent";
import PropsTest from "./PropsTest";
import Say from "./Say";
import IterationSample from "./IterationSample";
import IterationSample2 from "./IterationSample2";
// function App() {
//   return (
//     <>
//       <div className="border">
//         <h1>App.js 화면</h1>
//       </div>
//     </>
//   );
// }
const App = () => {
  return (
    <>
      <div className="border">
        <h1>App.js 화면</h1>

        {/*App.js에서 사용하는 name 안의 내용을 PropsTest파일에다 값을 던져줌 */}
        <PropsTest name="props 사용" />
        {/* '기본이름'이 출력됨*/}
        {/* <MyComponent /> */}
        {/* MyComponent가 감싼 '리액트' 영역은 자식(children)에 해당되는 부분 */}
        <MyComponent favoriteNumber={22}>리액트</MyComponent>
        <Say />
        <EventPractice />
        <IterationSample />
        <IterationSample2 />
      </div>
    </>
  );
};

export default App;
