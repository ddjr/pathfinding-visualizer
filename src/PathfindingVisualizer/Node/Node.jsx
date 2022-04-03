import React, { Component } from "react";
import "./Node.scss";

export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      weight,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;
    const extraClassName = isFinish
      ? "node__finish"
      : isStart
      ? "node__start"
      : isWall
      ? "node__wall"
      : "";

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
        style={extraClassName === "" ? backgroundStyle(weight) : {}}
      >
        {extraClassName === "" ? weight : ""}
      </div>
    );
  }
}
const backgroundStyle = (weight) => ({
  backgroundColor: `rgb(${200 - weight * 3},${240 - weight} , 255)`,
});
