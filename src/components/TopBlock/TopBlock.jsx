import React from "react";
import { BookMark } from "../BookMark";

class TopBlock extends React.Component {
  render() {
    return (
      <div id="topBlock">
        <BookMark to="/" name="待辦事項" />
        <BookMark to="/inProgress" name="進行中" />
        <BookMark to="/completed" name="已完成" />
      </div>
    );
  }
}

export { TopBlock };
