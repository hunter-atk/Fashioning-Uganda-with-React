import React, { Component } from "react";
import SearchBar from "./SearchBar";
import AddImageForm from "./AddImageForm";
import Images from "./Images";
import firebase from "../firebase";

const itemsRef = firebase.database().ref("images");

class Archive extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  /*
   * This is where you can update your state each time the component is "mounted" / initially loaded.
   */
  componentWillMount() {
    itemsRef.on("value", snapshot => {
      const lessAwkardThisWay = snapshot.val();
      const imgArrCopy = Object.assign([], this.state.images);
      Object.keys(lessAwkardThisWay).map(val => {
        imgArrCopy.push(lessAwkardThisWay[val]);
        this.setState({
          images: imgArrCopy
        });
      });
    });
    console.log(this.state.images);
  }

  render() {
    return (
      <div>
        <h1>This is the Archive</h1>
        <SearchBar />
        <AddImageForm />
        <Images images={this.state.images} />
      </div>
    );
  }
}

export default Archive;
