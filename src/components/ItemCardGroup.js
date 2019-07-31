import React from "react";
import ItemCard from "./ItemCard";

function ItemCardGroup(props) {
  /*
  1. Map through props.data 
    [1, 2, 3].map(item => item + 1) = [2, 3, 4]
  
  2. return ItemCard  instead of empty div
    The shape of the data is { title, description, price, imageUrl }
    The ItemCard is expecting these and onAddToCart callback
    Spoilers: onAddToCart={() => props.onAddToCart(item)}

  Bonus: Set Selected on the selected item
  
  Hints:
    Make sure you return your JSX item
  */

  return <div />;
}

export default ItemCardGroup;
