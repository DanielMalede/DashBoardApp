import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";

export default function Circle() {
  return (
    <div>
      <CircularProgressbar
        value={85}
        circleRatio={0.75}
        maxValue={100}
        text={`85%`}
        styles={{
          trail: {
            transform: "rotate(-135deg)",
            transformOrigin: "center center",
            strokeWidth: 3,
          },

          path: {
            transform: "rotate(-135deg)",
            transformOrigin: "center center",
            stroke: "#34ccfc",
            strokeWidth: 4.5,
          },
        }}
      />
    </div>
  );
}
