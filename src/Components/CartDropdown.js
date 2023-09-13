import React from "react";

export default function CartDropdown(props) {
  const { accountDetails } = props;
  return (
    <div className="cart-dropdown">
      <ul className="cart-ul">
        <li style={{marginBottom:"3px"}}>Kullanıcı Adı</li>
        {accountDetails.map((detail) => (
          <li className="cart-li" key={detail.id}>{detail.favorite}</li>
        ))}
      </ul>
    </div>
  );
}
