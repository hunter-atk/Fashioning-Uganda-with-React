import React, { Component } from "react";
import firebase from "../firebase.js";
import Hay from "./Hay";

const FirebasePromise = props => {
  firebase
    .storage()
    .ref()
    .child("images/" + props.fileName)
    .getDownloadURL()
    .then(url => {
      console.log(url);
      return url;
    })
    .catch(function(error) {});
};

// const Example = props => (
//   <FirebasePromise fileName={props.fileName}>
//     {url => <p>The url is {url}</p>}
//   </FirebasePromise>
// );
// {
/* <Example fileName={image.fileName} /> */
// }
const Image = ({ image }) => {
  return (
    <li>
      <Hay key={image.imageID} image={image} />
      <div>{image.imageID}</div>
      <div>{image.imageDate}</div>
    </li>
  );
};

export default Image;
