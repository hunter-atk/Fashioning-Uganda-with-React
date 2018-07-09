import React, { Component } from "react";
import firebase from "../firebase.js";

const FirebasePromise = props => {
  firebase
    .storage()
    .ref()
    .child("images/" + props.fileName)
    .getDownloadURL();
};

const Example = props => (
  <FirebasePromise fileName={props.fileName}>
    {url => <p>The url is {url}</p>}
  </FirebasePromise>
);

const Image = ({ image }) => {
  console.log(image);
  return (
    <li>
      <Example fileName={image.fileName} />
      <div>{image.imageID}</div>
      <div>{image.imageDate}</div>
    </li>
  );
};

export default Image;
