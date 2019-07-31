import React from "react";
import ReactDOM from "react-dom";

import ItemCardGroup from "./components/ItemCardGroup";

import "./styles.css";

const data = [
  {
    id: 1,
    title: "Cappuccino",
    price: 2.5,
    description: "A delicious blend of esppresso and steamed milk",
    imageUrl: "https://source.unsplash.com/collection/1215/300x300"
  },
  {
    id: 2,
    title: "Latte",
    price: 3.5,
    description: "",
    imageUrl: "https://source.unsplash.com/collection/1215/400x400"
  },
  {
    id: 3,
    title: "Americano",
    price: 2.0,
    description: "",
    imageUrl: "https://source.unsplash.com/collection/1215/500x500"
  },
  {
    id: 4,
    title: "Mocha",
    price: 3.5,
    description: "A latte with chocolate",
    imageUrl: "https://source.unsplash.com/collection/1215/600x600"
  },
  {
    id: 5,
    title: "Miel",
    price: 3.5,
    description: "A latte with honey",
    imageUrl: "https://source.unsplash.com/collection/1215/700x700"
  },
  {
    id: 6,
    title: "Cold brew",
    price: 3.5,
    description: "A less acidic, cold coffee",
    imageUrl: "https://source.unsplash.com/collection/1215/800x800"
  },
  {
    id: 7,
    title: "Nitro Cold brew",
    price: 3.5,
    description: "A nitrogen infused cold brew drink",
    imageUrl: "https://source.unsplash.com/collection/1215/900x900"
  }
];

function App() {
  /*
  1. Make a state object to contain the most recently added item
     ex: const [ count, setCount ] = useState();
  
  2. Update the callback in ItemCardGroup

  
  Bonus Hint:
    Pass the state down to ItemCardGroup as pros

  */

  return (
    <div>
      <h1>
        Selected Item: {/* obtain the selected item and display it here*/}
      </h1>
      <ItemCardGroup data={data} onAddToCart={() => {}} />

      {/* remove the following when ready*/}
      <Instructions />
    </div>
  );
}

function Instructions() {
  return (
    <div>
      <ul>
        <li>Work in src/index.js and src/components/ItemCardGroup.js</li>
        <li>There are comments in the files with further instructions</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
