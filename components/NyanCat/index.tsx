import "./styles.css";

import React, { FC, useState } from "react";

export const NyanCat: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(3);

  const positions = ["minimal", "left", "middle", "right"];

  const [facingDirection, setFacingDirection] = useState("right");

  const onClick = () => {
    if ((currentIndex + 1) % positions.length == 0) {
      setFacingDirection("left");
    } else {
      setFacingDirection("right");
    }

    setCurrentIndex((prevIndex) => (prevIndex + 1) % positions.length);
  };

  const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (
      e.currentTarget.classList.contains("cat--reverse") &&
      e.propertyName === "left"
    ) {
      setFacingDirection("right");
    }
  };

  return (
    <div
      id="nyanCatOverly"
      className={`overlay cat-${positions[currentIndex]} ${facingDirection == "right" ? "" : "cat--reverse"}`}
      onTransitionEnd={onTransitionEnd}
    >
      <div
        className={`rainbow ${facingDirection == "right" ? "" : "no-rainbow"}`}
      >
        <div className="sprite" />
      </div>
      <button
        aria-label={"nyan cat"}
        className={"button--no-display"}
        onClick={onClick}
      >
        <div className="cat">
          <div className="tail">
            <div className="sprite" />
          </div>
          <div className="feet">
            <div className="sprite" />
          </div>
          <div className="poptart" />
          <div className="head" />
        </div>
      </button>
    </div>
  );
};
