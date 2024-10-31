// import React, { useState } from "react";

// const About = () => {
//   const [myStyle, setMyStyle] = useState({
//     color: "white",
//     backgroundColor: "black",
//   });

//   const [btnText, setBtnText] = useState("Enable Dark Mode")

//   const changeStyle = () => {
//     if (myStyle.color === "white") {
//       setMyStyle({ color: "black", backgroundColor: "white" });
//       setBtnText("Enable Dark Mode")
//     }else{
//         setMyStyle({ color: "white", backgroundColor: "black" });
//         setBtnText("Enable Light Mode")
//     }
//   };

//   return (
//     <div className="container mt-5" style={myStyle}>
//       <h1 className="my-2">About Us</h1>
//       <div id="accordion">
//         <div className="card">
//           <div className="card-header" id="headingOne">
//             <h5 className="mb-0">
//               <button
//                 className="btn btn-link"
//                 data-toggle="collapse"
//                 data-target="#collapseOne"
//                 aria-expanded="true"
//                 aria-controls="collapseOne"
//               >
//                 Collapsible Group Item #1
//               </button>
//             </h5>
//           </div>

//           <div
//             id="collapseOne"
//             className="collapse show"
//             aria-labelledby="headingOne"
//             data-parent="#accordion"
//           >
//             <div className="card-body">
//               Anim pariatur cliche reprehenderit, enim eiusmod high life
//               accusamus terry richardson ad squid. 3 wolf moon officia aute, non
//               cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
//               laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
//               on it squid single-origin coffee nulla assumenda shoreditch et.
//               Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
//               nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
//               lomo. Leggings occaecat craft beer farm-to-table, raw denim
//               aesthetic synth nesciunt you probably haven't heard of them
//               accusamus labore sustainable VHS.
//             </div>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header" id="headingTwo">
//             <h5 className="mb-0">
//               <button
//                 className="btn btn-link collapsed"
//                 data-toggle="collapse"
//                 data-target="#collapseTwo"
//                 aria-expanded="false"
//                 aria-controls="collapseTwo"
//               >
//                 Collapsible Group Item #2
//               </button>
//             </h5>
//           </div>
//           <div
//             id="collapseTwo"
//             className="collapse"
//             aria-labelledby="headingTwo"
//             data-parent="#accordion"
//           >
//             <div className="card-body">
//               Anim pariatur cliche reprehenderit, enim eiusmod high life
//               accusamus terry richardson ad squid. 3 wolf moon officia aute, non
//               cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
//               laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
//               on it squid single-origin coffee nulla assumenda shoreditch et.
//               Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
//               nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
//               lomo. Leggings occaecat craft beer farm-to-table, raw denim
//               aesthetic synth nesciunt you probably haven't heard of them
//               accusamus labore sustainable VHS.
//             </div>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header" id="headingThree">
//             <h5 className="mb-0">
//               <button
//                 className="btn btn-link collapsed"
//                 data-toggle="collapse"
//                 data-target="#collapseThree"
//                 aria-expanded="false"
//                 aria-controls="collapseThree"
//               >
//                 Collapsible Group Item #3
//               </button>
//             </h5>
//           </div>
//           <div
//             id="collapseThree"
//             className="collapse"
//             aria-labelledby="headingThree"
//             data-parent="#accordion"
//           >
//             <div className="card-body">
//               Anim pariatur cliche reprehenderit, enim eiusmod high life
//               accusamus terry richardson ad squid. 3 wolf moon officia aute, non
//               cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
//               laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
//               on it squid single-origin coffee nulla assumenda shoreditch et.
//               Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
//               nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
//               lomo. Leggings occaecat craft beer farm-to-table, raw denim
//               aesthetic synth nesciunt you probably haven't heard of them
//               accusamus labore sustainable VHS.
//             </div>
//           </div>
//         </div>
//       </div>
//       <button
//         type="button"
//         className="my-3 btn btn-outline-dark"
//         onClick={changeStyle}
//       >
//         {btnText}
//       </button>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = (props) => {
  return (
    <div className=" d-flex flex-column align-items-center justify-content-center gap-3 m-3 border border-dark-subtle rounded-4"  style={{
      backgroundColor: props.mode === "light" ? "white" : "gray",
      color: props.mode === "dark" ? "white" : "black",
    }}>
      <div className="p-2 lh-lg ">
        <h2 className="text-uppercase">About Text Util</h2>
        <p>
          Welcome to Text Util! This application is crafted for efficient text
          management, allowing you to quickly transform and analyze text for
          various purposes. Whether you're a writer, developer, or student, Text
          Util offers essential tools to optimize text handling. Here’s a
          breakdown of the app’s features and how it's built:
        </p>
      </div>
      <div className="p-2">
        <h2 className="text-uppercase">Features</h2>
        <p>
          Text Transformation: With Text Util, you can easily modify text by
          changing its case (uppercase, lowercase, etc.), removing extra spaces,
          or even capitalizing each word as needed. These tools help you get the
          exact format you want for your text quickly and easily. Text Analysis:
          The app provides real-time analysis of your text, including a word and
          character count, which can be particularly useful for content creators
          and students. The app recalculates the counts automatically as you
          type, thanks to the power of React's state management. Technologies &
          Packages Used React: Text Util is built entirely in React, allowing
          for a smooth, interactive experience. React's component-based
          structure ensures that each part of the app is reusable, maintainable,
          and optimized. React Router DOM: For navigation within the app,
          react-router-dom is used to create distinct pages, like the About
          page, without reloading the entire app. This provides a smooth and
          seamless experience when switching between different parts of the app.
          useState Hook: To handle the dynamic nature of text inputs, Text Util
          uses the useState hook. This hook enables real-time text manipulation
          by updating the app’s state every time you make a change. For
          instance, when you type in the text area, useState helps keep track of
          what you’re typing and instantly updates any transformations or counts
          displayed on the page.
        </p>
      </div>
      <div className="p-2">
        <h2 className="text-uppercase fw-bolder">Why Text Util?</h2>
        <p>
          This app is designed to be a simple yet effective text-processing tool
          that makes text management a breeze. It’s fast, easy to use, and
          flexible, letting you perform essential text operations without
          needing to rely on heavy software or manually count words and
          characters.
        </p>
      </div>
    </div>
  );
};

export default About;
