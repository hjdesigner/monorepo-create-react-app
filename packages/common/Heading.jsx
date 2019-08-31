// packages/common/Heading.jsx
import React from "react";

function Heading({ level = "1", title }) {
  return React.createElement(`h${level}`, {}, title);
}

export default Heading;