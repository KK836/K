// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Greeting from "./Greeting";

// class App extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       enteredName: "",
//       message: "",
//     };
//     this.onChangeName = this.onChangeName.bind(this);
//   }

//   state: {
//     enteredName: string;
//     message: string;
//   };

//   onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
//     this.setState({
//       enteredName: e.target.value,
//       message: "Hello from, ${e.target.value",
//     });
//   }

//   render() {
//     console.log("redering App");
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <input value={this.state.enteredName} onChange={this.onChangeName} />
//           <Greeting name={this.state.enteredName} />
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Greeting from "./GreetingFunction";

// class App extends React.Component {
//   constructor(props: any) {
//     super(props);

//     this.state = {
//       enteredName: "",
//       message: "",
//     };
//     this.onChangeName = this.onChangeName.bind(this);
//   }

//   state: { enteredName: string; message: string };

//   onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
//     this.setState({
//       enteredName: e.target.value,
//       message: `Hello from, ${e.target.value}`,
//     });
//   }

//   render() {
//     console.log("rendering App");
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <input value={this.state.enteredName} onChange={this.onChangeName} />
//           <Greeting message={this.state.enteredName} />
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import { Component } from "react";

export default class App extends Component {
  render() {
    const isLoading = true;
    // if (isLoding) return <p>loading...</p>;
    const children = (
      <li>
        <a href="http://www.google.com">
          <p>go to google</p>
        </a>
      </li>
    );

    return <div>{children}</div>;
  }
}
