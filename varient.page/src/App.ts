import "./App.css";
import "./images/variant1.jpg";
import "./images/variant2.jpg";
import "./images/variant3.jpg";
import "./images/variant4.jpg";
import "./images/variant5.jpg";
import React from "react";

const variantImage1 = "./images/variant1.jpg";
const variantImage2 = "./images/variant2.jpg";
const variantImage3 = "./images/variant3.jpg";
const variantImage4 = "./images/variant4.jpg";
const variantImage5 = "./images/variant5.jpg";

function Header() {
  return (
    <header>
      <h1>Variant Types</h1>
    </header>
  );
}

const unlocked = [false, false, false, false];

function unlockVariant(currentLevel) { //currentLevel needs to be imported in from other class. 
  const levelRequired = 5;
  const level = currentLevel;

  for(i=0; i<=3; i++) {
    if(levelRequired < level) {
      unlocked[i] = true;
      levelRequired += 5;
    }else{
      {level}
    }
  }
}

function Main() {
  unlockVariant(level);

  return (
    <div>
      <div className="item1">
        <img src={variantImage1} width={200} alt="the first variant" />{" "}
      </div>
      if(unlocked[0])
      {
        <div className="item2">
          <img src={variantImage2} width={200} alt="the second variant" />
        </div>
      }else {
        <div className="item2Locked">Variant 2 -UNLOCK AT LEVEL 5</div>
      }
      if(unlocked[1]) {
        <div className="item3">
          <img src={variantImage3} width={200} alt="the third variant" />
        </div>
      }else {
        <div className="item3Locked">Variant 3 - UNLOCK AT LEVEL 10</div>
      }
      if(unlocked[2]) {
        <div className="item4">
          <img src={variantImage4} width={200} alt="the fourth variant" />
        </div>
      }else {
        <div className="item4Locked">Variant4 - UNLOCK AT LEVEL 15</div>
      }
      if(unlocked[3]) {
        <div className="item5">
          <img src={variantImage5} width={200} alt="the fifth variant" />
        </div>
      }else {
        <div className="item5Locked">Variant5 - UNLOCK AT LEVEL 20</div>
      }
      </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>More Variants Comming Soon...</p>
    </footer>
  );
}

const variants = [
  [<img src={variantImage1}, width={200}, alt="the first variant" />],
  [
    <img src={variantImage2}, width={200}, alt="the second variant" />,
    "Variant 2"
  ],
  ["variant2", " UNLOCK AT LEVEL 5"],
  [<img src={variantImage3}, width={200}, alt="the third variant" />],
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
      <Header name="Head" />
      <Main project="Variants" variants={variantObjects} />
      <Footer stream="Foot" />
    </div>
  );
}
