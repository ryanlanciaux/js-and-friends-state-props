import React from "react";
import { Box } from "rebass";

function Card(props) {
  return (
    <Box
      {...props}
      style={{ backgroundColor: props.selected ? "#BABABA" : "#FFF" }}
    />
  );
}

export default Card;
