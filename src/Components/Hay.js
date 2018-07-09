import React, { Component } from "react";
import firebase from "../firebase.js";

const itemsRef = firebase.database().ref("images");

class Hay extends Component {
  constructor(props) {
    super(props);

    this.state = { image: props.image };
  }

  componentWillMount() {
    itemsRef.on("value", snapshot => {
      firebase
        .storage()
        .ref()
        .child("images/" + this.state.image.fileName)
        .getDownloadURL()
        .then(url => {
          this.setState({
            image: url
          });
        })
        .catch(function(error) {});
    });
  }

  render() {
    return <img className="archive-image" src={this.state.image} />;
  }
}

export default Hay;
