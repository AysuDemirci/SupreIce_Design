import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const menuItems = [
    {
      id: 0,
      name: "Kadın",
      options: [
        {
          option: "Giyim",
          contents:[{content:"Elbise"},{content:"Tişört"},{content:"Gömlek"},{content:"Pantolon"},{content:"Mont"},{content:"Ceket"},{content:"Etek"}]
        },
        { option: "Ayakkabı" },
        { option: "Aksesuar&Çanta" },
        { option: "İç Giyim" },
        { option: "Lüks&Designer" },
        { option: "Kozmetik" },
        { option: "Spor&Outdoor" },
      ],
    },
    {
      id: 1,
      name: "Erkek",
      options: [
        { option: "Giyim" },
        { option: "Ayakkabı" },
        { option: "Çanta" },
        { option: "İç Giyim" },
        { option: "Pijama" },
        { option: "Elektronik" },
        { option: "Spor&Outdoor" },
      ],
    },
    {
      id: 2,
      name: "Ev&Mobilya",
      options: [
        { option: "Giyim" },
        { option: "Ayakkabı" },
        { option: "Çanta" },
        { option: "İç Giyim" },
        { option: "Pijama" },
        { option: "Elektronik" },
        { option: "Spor&Outdoor" },
      ],
    },
    {
      id: 3,
      name: "Süpermarket",
      options: [
        { option: "Giyim" },
        { option: "Ayakkabı" },
        { option: "Çanta" },
        { option: "İç Giyim" },
        { option: "Pijama" },
        { option: "Elektronik" },
        { option: "Spor&Outdoor" },
      ],
    },
    {
      id: 4,
      name: "Kozmetik",
      options: [
        { option: "Giyim" },
        { option: "Ayakkabı" },
        { option: "Çanta" },
        { option: "İç Giyim" },
        { option: "Pijama" },
        { option: "Elektronik" },
        { option: "Spor&Outdoor" },
      ],
    },
    {
      id: 5,
      name: "Ayakkabı",
      options: [
        { option: "Giyim" },
        { option: "Ayakkabı" },
        { option: "Çanta" },
        { option: "İç Giyim" },
        { option: "Pijama" },
        { option: "Elektronik" },
        { option: "Spor&Outdoor" },
      ],
    },
    {
      id: 6,
      name: "Elektronik",
      options: [
        { option: "Giyim" },
        { option: "Ayakkabı" },
        { option: "Çanta" },
        { option: "İç Giyim" },
        { option: "Pijama" },
        { option: "Elektronik" },
        { option: "Spor&Outdoor" },
      ],
    },
  ];

  const [isDrowpdownVisible, setIsDropdownVisible] = useState(false);
  const [activeMenuId, setActiveMenuId]=useState(null)


  function handleMouseEnter(id) {
    setIsDropdownVisible(true);
    setActiveMenuId(id)
  }
  function handleMouseLeave() {
    setIsDropdownVisible(false);
    setActiveMenuId(null)
  }

  return (
    <div className="navbar">
      <h1 className="navbar-brandName">SupreIce</h1>
      <ul className="navbar-ul" >
        {menuItems.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className="navbar-li"
            onMouseEnter={()=>handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="navbar-menuItems">{item.name}</button>
            {isDrowpdownVisible && activeMenuId===item.id&& <Dropdown options={item.options} />}
          </li>
        ))}
      </ul>
      <input className="navbar-searchInput" placeholder="Ara..." />
      <ul className="navbar-ul-2">
        <li>Sepetim</li>
        <li>Hesabım</li>
        <li>Favorilerim</li>
      </ul>
    </div>
  );
}
