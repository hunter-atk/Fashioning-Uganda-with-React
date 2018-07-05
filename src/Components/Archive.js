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

    itemsRef.on("value", snapshot => {
      let imageList = [];
      for (let image in snapshot.val()) {
        imageList.push(snapshot.val().image);
      }
      this.setState({ images: imageList });
      console.log(snapshot.val());
      console.log(imageList);
    });
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
