import React, { Component } from "react";
import firebase from "../firebase.js";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>This is the HomePage!</h1>
//   </div>,
//   document.getElementById("root")
// );

class AddImageForm extends Component {
  constructor() {
    super();
    this.state = {
      fileName: "",
      imageId: "",
      imageDate: "",
      dateInt: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let imageUpload = document.getElementById("js-image-upload");
    imageUpload.addEventListener("change", function(event) {
      let file = event.target.files[0];
      // fileName = file.name;
      let storageRef = firebase.storage().ref("images/" + file.name);
      storageRef.put(file);
    });

    const itemsRef = firebase.database().ref("images");
    const item = {
      fileName: this.state.fileName,
      imageId: this.state.imageId,
      imageDate: this.state.imageDate,
      dateInt: this.state.dateInt
      // imgUpload: this.state.imgUpload
    };
    itemsRef.push(item);
    this.setState({
      fileName: "",
      imageId: "",
      imageDate: "",
      dateInt: ""
      // imgUpload: ""
    });
  }

  render() {
    return (
      <div className="container">
        <section className="add-item">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="fileName"
              placeholder="What is the image fileName?"
              onChange={this.handleChange}
              value={this.state.fileName}
            />
            <input
              type="text"
              name="imageId"
              placeholder="What is the image ID?"
              onChange={this.handleChange}
              value={this.state.imageId}
            />
            <input
              type="date"
              name="imageDate"
              placeholder="What is the image date?"
              onChange={this.handleChange}
              value={this.state.imageDate}
            />
            <input
              type="date"
              name="dateInt"
              placeholder="What is the dateInt?"
              onChange={this.handleChange}
              value={this.state.dateInt}
            />
            <input
              type="file"
              name="imgUpload"
              placeholder="Upload Image File"
              id="js-image-upload"
              // onChange={this.handleChange}
              // value={this.state.imgUpload}
            />
            <button>Add Item</button>
          </form>
        </section>
      </div>
    );
  }
}

export default AddImageForm;
