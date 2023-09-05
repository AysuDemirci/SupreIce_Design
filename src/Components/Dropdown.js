import React from "react";

export default function Dropdown(props) {
  const { options } = props;
  return (
    <div className="dropdown-menu">
      <ul className="dropdown-ul" key={options}>
        {options.map((a, index) => (
          <li key={index}>
            <h5 style={{marginLeft:"50px"}}> {a.option}</h5>
            <ul className="dropdown-content-ul">
              {a.contents.map((x) => (
                <li className="dropdown-li" >
                  {x.content}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
