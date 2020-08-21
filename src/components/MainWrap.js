import React from "react";
import Rightside from "./right/Rightside";
import Leftside from "./left/Leftside";
import "../style/css/mainwrap.css";
import Box from "./Box";

function Mainwrap() {
  return (
    <Box>
      <Leftside />
      <Rightside />
    </Box>
  );
}

export default Mainwrap;
