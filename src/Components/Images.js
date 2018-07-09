import React, { Component } from "react";
import Image from "./Image";
import firebase from "../firebase.js";
import ReactDOM from "react-dom";

const Images = ({ images }) => {
  const imageItems = images.map(image => {
    return <Image key={image.imageID} image={image} />;
  });

  return <ul>{imageItems}</ul>;
};

export default Images;
