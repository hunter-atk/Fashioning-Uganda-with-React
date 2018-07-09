import React, { Component } from "react";
import Image from "./Image";
import Hay from "./Hay";
import firebase from "../firebase.js";
import ReactDOM from "react-dom";

const Images = ({ images }) => {
  const imageItems = images.map(image => {
    return (
      <div>
        <Image key={image.imageID} image={image} />
      </div>
    );
  });

  return <ul>{imageItems}</ul>;
};

export default Images;
