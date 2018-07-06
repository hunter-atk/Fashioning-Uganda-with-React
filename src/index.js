import React, { Component } from "react";
import ReactDOM from "react-dom";
import HomePage from "./Components/HomePage";
import Archive from "./Components/Archive";
import firebase from "./firebase";

const itemsRef = firebase.database().ref("images");

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = { images: {} };

    // itemsRef.on("value", snapshot => {
    //   this.setState({ images: snapshot.val() });
    // });
  }

  render() {
    return (
      <div>
        <Archive />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);

export default App;
