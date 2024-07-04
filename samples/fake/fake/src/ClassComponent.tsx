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

import { Component } from "react";

export type ClassComponentProps = {
  href: string;
  text: string;
};
export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const { href, text } = this.props;
    return (
      <li>
        <a href="http://www.google.com">
          <p>go to google</p>
        </a>
      </li>
    );
  }
}

// import { Component } from "react";

// export default function App() {
//   return <div>Hello function-keyword component!</div>;
// }

// const App = () => {
//   return <h1>function componet </h1>;
// };

// export default App;
