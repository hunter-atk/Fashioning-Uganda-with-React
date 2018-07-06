import React, { Component } from "react";
import Image from "./Image";
import firebase from "../firebase.js";
import ReactDOM from "react-dom";

const Images = props => {
  const images = props.images;
  console.log(images);
  return <ul>{images.length}</ul>;
};

export default Images;
