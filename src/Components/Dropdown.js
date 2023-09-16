import React from "react";

export default function Dropdown(props) {
  const { options } = props;
  return (
    <div className="dropdown-menu">
      <ul className="dropdown-ul" key={options}>
        {options.map((a) => (
          <li >
            <h4 style={{marginLeft:"40px",fontFamily:" 'Ubuntu', sans-serif"}}> {a.option}</h4>
            <ul className="dropdown-content-ul" >
              {a.contents.map((x) => (
                <li  className="dropdown-li" >
                  <a href="/" className="dropdown-li-a">{x.content}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
