// import * as D from "./data";

// export default function App() {
//   return (
//     <div>
//       <p>
//         {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
//       </p>
//       <img src={D.randomAvatar()} height="50" />
//       <img src={D.randomImage()} height="300" />
//     </div>
//   );
// }

// import { Component } from "react";
// import ClassComponent from "./ClassComponent";
// import ArrowComponent from "./ArrowComponent";
// export type ClassComponentProps = {
//   href: string;
//   text: String;
// };

// const App = () => {
//   return (
//     <ul>
//       <ClassComponent href="http://www.goolge.com" text="go to google" />
//       <ArrowComponent href="http://www.x.com" text="go to x(twitter)" />
//     </ul>
//   );
// };

// const App = () => {
//   // refactoring map 함수 사용
//   // [...].map(item, index))=> <tag> )
//   const texts = ["hello", "world"].map((item, index) => (
//     <p key={index} children={item}></p>
//   ));
//   // const texts = [<p>hello</p>, <p>world</p>];
//   return <div children={texts} />;
// };

// export default App;

// event 처리 부분

import Bootstrap from "./pages/Bootstrap";
import Icon from "./pages/Icon";
import Style from "./pages/Styles";
// import Style from "./pages/Style";
// import UsingIcon from "./pages/UsingIcon";
// import UsingIconWithCSSClass from "./pages/UsingIconWithCSSClass";

export default function App() {
  return (
    <div>
      {/* <UsingIconWithCSSClass />
    <UsingIcon /> */}
      <Style />
      <Icon />
      <Bootstrap />
    </div>
  );
}
