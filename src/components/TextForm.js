import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  //console.log(text);

  function handelUpClick() {
    //console.log("Upper Case Btn Clicked" + text);
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Upper Case", "success");
  }

  function handelLowClick() {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lower Case", "success");
  }

  function handelClearText() {
    const newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }

  function handelCopy() {
    console.log("I'm Copy");
    var text = document.querySelector("#myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clipboard!", "success");
  }

  function handelExtraSpace() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  }

  function handelOnChange(event) {
    //console.log("On change");
    setText(event.target.value);
    
  }

  return (
    <>
      <div
        className="container mt-4"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>{props.heading}</h3>
        <div className=" mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter Text Here"
            value={text}
            onChange={handelOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "gray",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            className="btn btn-outline-primary mt-3"
            onClick={handelUpClick}
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-outline-primary mt-3 mx-1"
            onClick={handelLowClick}
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            Convert to LowerCase
          </button>
          <button
            className="btn btn-outline-primary mt-3 mx-1"
            onClick={handelClearText}
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            Clear Text
          </button>
          <button
            className="btn btn-outline-primary mt-3 mx-1"
            onClick={handelCopy}
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            Copy Text
          </button>
          <button
            className="btn btn-outline-primary mt-3 mx-1"
            onClick={handelExtraSpace}
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            Remove Extra Spaces IN Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something In The TextBox Above to Preview It Here...`"}
        </p>
      </div>
    </>
  );
};

export default TextForm;
