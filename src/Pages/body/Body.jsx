import React from "react";
import BlockOne from "./BlockOne";
import BlockTwo from "./BlockTwo";
import BlockThree from "./BlockThree";
import BlockFour from "./BlockFour";
import BlockFive from "./BlockFive";
import BlockSix from "./BlockSix";

const Body = () => {
  return (
    <div className="w-full">
      <BlockOne />
      <BlockTwo />
      <BlockThree />
      <BlockFour />
      <BlockFive />
      <BlockSix />
    </div>
  );
};

export default Body;
