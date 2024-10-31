import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//import About from "./components/About";
import Alert from "./components/Alert";
// Routes
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light"); //Whether Dark Mode Enable Or Not..
  const [alert, setAlert] = useState(null);
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtills Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* <Routes> */}
      {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
      {/* <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          /> */}
      {/* </Routes> */}
      {/* </Router> */}
      <TextForm
        heading="Enter the text to analyze"
        mode={mode}
        showAlert={showAlert}
      />
    </>
  );
};

export default App;
