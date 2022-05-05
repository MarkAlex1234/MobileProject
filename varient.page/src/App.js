import "./App.css";
import variantImage1 from "./images/variant1.jpg";
import variantImage2 from "./images/variant2.jpg";
import variantImage3 from "./images/variant3.jpg";
import variantImage4 from "./images/variant4.jpg";
import variantImage5 from "./images/variant5.jpg";
import React from "react";

function Header() {
  return (
    <header>
      <h1>Variant Types</h1>
    </header>
  );
}

const unlocked = true;

function Main(props) {
  return (
    <div>
      <div className="item1">
        <img src={variantImage1} width={200} alt="the first variant" />{" "}
      </div>
      if()
      {
        <div className="item2">
          <img src={variantImage2} width={200} alt="the second variant" />
        </div>
      }
      else {<div className="item2Locked">Variant 2 -UNLOCK AT LEVEL 5</div>}
      <div className="item3">
        <img src={variantImage3} width={200} alt="the third variant" />
      </div>
      <div className="item3Locked">Variant 3 - UNLOCK AT LEVEL 10</div>
      <div className="item4">
        <img src={variantImage4} width={200} alt="the fourth variant" />
      </div>
      <div className="item4Locked">Variant4 - UNLOCK AT LEVEL 15</div>
      <div className="item5">
        <img src={variantImage5} width={200} alt="the fifth variant" />
      </div>
      <div className="item5Locked">Variant5 - UNLOCK AT LEVEL 20</div>
    </div>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Unlock variants to use them in game.</p>
    </footer>
  );
}

const variants = [
  [<img src={variantImage1} width={200} alt="the first variant" />],
  [
    <img src={variantImage2} width={200} alt="the second variant" />,
    "Variant 2"
  ],
  ["variant2", " UNLOCK AT LEVEL 5"],
  [<img src={variantImage3} width={200} alt="the third variant" />],
  ["variant3", " UNLOCK AT LEVEL 10"],
  [<img src={variantImage4} width={200} alt="the fourth variant" />],
  ["variant4", " UNLOCK AT LEVEL 15"],
  [<img src={variantImage5} width={200} alt="the fifth variant" />],
  ["variant5", " UNLOCK AT LEVEL 20"]
];

const variantObjects = variants.map((variant, i) => ({
  id: i,
  title: variant
}));

export default function App() {
  return (
    <div className="App">
      <Header name="Luke" />
      <Main project="Mobile Applcation" variants={variantObjects} />
      <Footer stream="COMP602" year={new Date().getFullYear()} />
    </div>
  );
}
