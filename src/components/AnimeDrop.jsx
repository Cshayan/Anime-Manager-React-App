import React, { useContext } from "react";
import { DropTarget } from "react-drag-drop-container";

import { AnimeContext } from "../context/AnimeContext";

const AnimeDrop = () => {
  const { animeListDropPush } = useContext(AnimeContext);
  const someFunc = (e) => {
    console.log("shayan");
    console.log(e.dragData);
    animeListDropPush(e.dragData);
  };
  return (
    <DropTarget targetKey="anime" onHit={(e) => someFunc(e)}>
      <p className="my_target">
        You can drop the animes by dragging from below here.
      </p>
    </DropTarget>
  );
};

export default AnimeDrop;
