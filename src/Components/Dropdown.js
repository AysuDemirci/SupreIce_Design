import React from "react";

export default function Dropdown(props) {
  const { options } = props;
  return (
    <div className="dropdown-menu">
      <ul className="dropdown-ul" key={options}>
        {options.map((a, index) => (
          <li className="dropdown-li" key={index}>
            {a.option}
          </li>
        ))}
      </ul>
    </div>
  );
}
