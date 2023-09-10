import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { FaShoppingCart } from "react-icons/fa";

import { IoPersonSharp } from "react-icons/io5";

import { MdFavorite } from "react-icons/md";

export default function Navbar() {
  const menuItems = [
    {
      id: 0,
      name: "Kadın",
      options: [
        {
          option: "Giyim",
          contents: [
            { content: "Elbise" },
            { content: "Tişört" },
            { content: "Gömlek" },
            { content: "Pantolon" },
            { content: "Mont" },
            { content: "Ceket" },
            { content: "Etek" },
          ],
        },
        {
          option: "Ayakkabı",
          contents: [
            { content: "Topuklu Ayakkabı" },
            { content: "Spor Ayakkabı" },
            { content: "Klasik Ayakkabı" },
            { content: "Espadril" },
            { content: "Babet" },
            { content: "Terlik" },
            { content: "Sandalet" },
          ],
        },
        {
          option: "Aksesuar&Çanta",
          contents: [
            { content: "Bilezik" },
            { content: "Kolye" },
            { content: "Küpe" },
            { content: "Bileklik" },
            { content: "Set-Takım " },
            { content: "Omuz Çantası" },
            { content: "Sırt Çantası" },
          ],
        },
        {
          option: "İç Giyim",
          contents: [
            { content: "Külot" },
            { content: "Sütyen" },
            { content: "Boxer" },
            { content: "Atlet" },
            { content: "Fantezi Giyim" },
            { content: "Jartiyer" },
            { content: "Takım İç Çamaşır" },
          ],
        },
        {
          option: "Lüks&Designer",
          contents: [
            { content: "Tasarım Çanta" },
            { content: "Tasarım Elbise" },
            { content: "Tasarım Takım Elbise" },
            { content: "Tasarım Ayakkabı" },
          ],
        },
        {
          option: "Kozmetik",
          contents: [
            { content: "Deodorant" },
            { content: "Parfüm" },
            { content: "Krem" },
            { content: "Yıkama Jeli" },
            { content: "Güneş Kremi" },
          ],
        },
        {
          option: "Spor&Outdoor",
          contents: [
            { content: "Çadır" },
            { content: "Kamp Malzemeleri" },
            { content: "Elektrikli Bisiklet" },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "Erkek",
      options: [
        {
          option: "Giyim",
          contents: [
            { content: "Elbise" },
            { content: "Tişört" },
            { content: "Gömlek" },
            { content: "Pantolon" },
            { content: "Mont" },
            { content: "Ceket" },
            { content: "Etek" },
          ],
        },
        {
          option: "Ayakkabı",
          contents: [
            { content: "Topuklu Ayakkabı" },
            { content: "Spor Ayakkabı" },
            { content: "Klasik Ayakkabı" },
            { content: "Espadril" },
            { content: "Babet" },
            { content: "Terlik" },
            { content: "Sandalet" },
          ],
        },
        {
          option: "Aksesuar&Çanta",
          contents: [
            { content: "Bilezik" },
            { content: "Kolye" },
            { content: "Küpe" },
            { content: "Bileklik" },
            { content: "Set-Takım " },
            { content: "Omuz Çantası" },
            { content: "Sırt Çantası" },
          ],
        },
        {
          option: "İç Giyim",
          contents: [
            { content: "Külot" },
            { content: "Sütyen" },
            { content: "Boxer" },
            { content: "Atlet" },
            { content: "Fantezi Giyim" },
            { content: "Jartiyer" },
            { content: "Takım İç Çamaşır" },
          ],
        },
        {
          option: "Lüks&Designer",
          contents: [
            { content: "Tasarım Çanta" },
            { content: "Tasarım Elbise" },
            { content: "Tasarım Takım Elbise" },
            { content: "Tasarım Ayakkabı" },
          ],
        },
        {
          option: "Kozmetik",
          contents: [
            { content: "Deodorant" },
            { content: "Parfüm" },
            { content: "Krem" },
            { content: "Yıkama Jeli" },
            { content: "Güneş Kremi" },
          ],
        },
        {
          option: "Spor&Outdoor",
          contents: [
            { content: "Çadır" },
            { content: "Kamp Malzemeleri" },
            { content: "Elektrikli Bisiklet" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Ev&Mobilya",
      options: [
        {
          option: "Mobilya",
          contents: [
            { content: "Elbise" },
            { content: "Tişört" },
            { content: "Gömlek" },
            { content: "Pantolon" },
            { content: "Mont" },
            { content: "Ceket" },
            { content: "Etek" },
          ],
        },
        {
          option: "Lambader",
          contents: [
            { content: "Topuklu Ayakkabı" },
            { content: "Spor Ayakkabı" },
            { content: "Klasik Ayakkabı" },
            { content: "Espadril" },
            { content: "Babet" },
            { content: "Terlik" },
            { content: "Sandalet" },
          ],
        },
        {
          option: "Koltuk Takımı",
          contents: [
            { content: "Bilezik" },
            { content: "Kolye" },
            { content: "Küpe" },
            { content: "Bileklik" },
            { content: "Set-Takım " },
            { content: "Omuz Çantası" },
            { content: "Sırt Çantası" },
          ],
        },
        {
          option: "İç Giyim",
          contents: [
            { content: "Külot" },
            { content: "Sütyen" },
            { content: "Boxer" },
            { content: "Atlet" },
            { content: "Fantezi Giyim" },
            { content: "Jartiyer" },
            { content: "Takım İç Çamaşır" },
          ],
        },
        {
          option: "Lüks&Designer",
          contents: [
            { content: "Tasarım Çanta" },
            { content: "Tasarım Elbise" },
            { content: "Tasarım Takım Elbise" },
            { content: "Tasarım Ayakkabı" },
          ],
        },
        {
          option: "Kozmetik",
          contents: [
            { content: "Deodorant" },
            { content: "Parfüm" },
            { content: "Krem" },
            { content: "Yıkama Jeli" },
            { content: "Güneş Kremi" },
          ],
        },
        {
          option: "Spor&Outdoor",
          contents: [
            { content: "Çadır" },
            { content: "Kamp Malzemeleri" },
            { content: "Elektrikli Bisiklet" },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Süpermarket",
      options: [
        {
          option: "Giyim",
          contents: [
            { content: "Elbise" },
            { content: "Tişört" },
            { content: "Gömlek" },
            { content: "Pantolon" },
            { content: "Mont" },
            { content: "Ceket" },
            { content: "Etek" },
          ],
        },
        {
          option: "Ayakkabı",
          contents: [
            { content: "Topuklu Ayakkabı" },
            { content: "Spor Ayakkabı" },
            { content: "Klasik Ayakkabı" },
            { content: "Espadril" },
            { content: "Babet" },
            { content: "Terlik" },
            { content: "Sandalet" },
          ],
        },
        {
          option: "Aksesuar&Çanta",
          contents: [
            { content: "Bilezik" },
            { content: "Kolye" },
            { content: "Küpe" },
            { content: "Bileklik" },
            { content: "Set-Takım " },
            { content: "Omuz Çantası" },
            { content: "Sırt Çantası" },
          ],
        },
        {
          option: "İç Giyim",
          contents: [
            { content: "Külot" },
            { content: "Sütyen" },
            { content: "Boxer" },
            { content: "Atlet" },
            { content: "Fantezi Giyim" },
            { content: "Jartiyer" },
            { content: "Takım İç Çamaşır" },
          ],
        },
        {
          option: "Lüks&Designer",
          contents: [
            { content: "Tasarım Çanta" },
            { content: "Tasarım Elbise" },
            { content: "Tasarım Takım Elbise" },
            { content: "Tasarım Ayakkabı" },
          ],
        },
        {
          option: "Kozmetik",
          contents: [
            { content: "Deodorant" },
            { content: "Parfüm" },
            { content: "Krem" },
            { content: "Yıkama Jeli" },
            { content: "Güneş Kremi" },
          ],
        },
        {
          option: "Spor&Outdoor",
          contents: [
            { content: "Çadır" },
            { content: "Kamp Malzemeleri" },
            { content: "Elektrikli Bisiklet" },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Kozmetik",
      options: [
        {
          option: "Giyim",
          contents: [
            { content: "Elbise" },
            { content: "Tişört" },
            { content: "Gömlek" },
            { content: "Pantolon" },
            { content: "Mont" },
            { content: "Ceket" },
            { content: "Etek" },
          ],
        },
        {
          option: "Ayakkabı",
          contents: [
            { content: "Topuklu Ayakkabı" },
            { content: "Spor Ayakkabı" },
            { content: "Klasik Ayakkabı" },
            { content: "Espadril" },
            { content: "Babet" },
            { content: "Terlik" },
            { content: "Sandalet" },
          ],
        },
        {
          option: "Aksesuar&Çanta",
          contents: [
            { content: "Bilezik" },
            { content: "Kolye" },
            { content: "Küpe" },
            { content: "Bileklik" },
            { content: "Set-Takım " },
            { content: "Omuz Çantası" },
            { content: "Sırt Çantası" },
          ],
        },
        {
          option: "İç Giyim",
          contents: [
            { content: "Külot" },
            { content: "Sütyen" },
            { content: "Boxer" },
            { content: "Atlet" },
            { content: "Fantezi Giyim" },
            { content: "Jartiyer" },
            { content: "Takım İç Çamaşır" },
          ],
        },
        {
          option: "Lüks&Designer",
          contents: [
            { content: "Tasarım Çanta" },
            { content: "Tasarım Elbise" },
            { content: "Tasarım Takım Elbise" },
            { content: "Tasarım Ayakkabı" },
          ],
        },
        {
          option: "Kozmetik",
          contents: [
            { content: "Deodorant" },
            { content: "Parfüm" },
            { content: "Krem" },
            { content: "Yıkama Jeli" },
            { content: "Güneş Kremi" },
          ],
        },
        {
          option: "Spor&Outdoor",
          contents: [
            { content: "Çadır" },
            { content: "Kamp Malzemeleri" },
            { content: "Elektrikli Bisiklet" },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Ayakkabı & Çanta",
      options: [
        {
          option: "Giyim",
          contents: [
            { content: "Elbise" },
            { content: "Tişört" },
            { content: "Gömlek" },
            { content: "Pantolon" },
            { content: "Mont" },
            { content: "Ceket" },
            { content: "Etek" },
          ],
        },
        {
          option: "Ayakkabı",
          contents: [
            { content: "Topuklu Ayakkabı" },
            { content: "Spor Ayakkabı" },
            { content: "Klasik Ayakkabı" },
            { content: "Espadril" },
            { content: "Babet" },
            { content: "Terlik" },
            { content: "Sandalet" },
          ],
        },
        {
          option: "Aksesuar&Çanta",
          contents: [
            { content: "Bilezik" },
            { content: "Kolye" },
            { content: "Küpe" },
            { content: "Bileklik" },
            { content: "Set-Takım " },
            { content: "Omuz Çantası" },
            { content: "Sırt Çantası" },
          ],
        },
        {
          option: "İç Giyim",
          contents: [
            { content: "Külot" },
            { content: "Sütyen" },
            { content: "Boxer" },
            { content: "Atlet" },
            { content: "Fantezi Giyim" },
            { content: "Jartiyer" },
            { content: "Takım İç Çamaşır" },
          ],
        },
        {
          option: "Lüks&Designer",
          contents: [
            { content: "Tasarım Çanta" },
            { content: "Tasarım Elbise" },
            { content: "Tasarım Takım Elbise" },
            { content: "Tasarım Ayakkabı" },
          ],
        },
        {
          option: "Kozmetik",
          contents: [
            { content: "Deodorant" },
            { content: "Parfüm" },
            { content: "Krem" },
            { content: "Yıkama Jeli" },
            { content: "Güneş Kremi" },
          ],
        },
        {
          option: "Spor&Outdoor",
          contents: [
            { content: "Çadır" },
            { content: "Kamp Malzemeleri" },
            { content: "Elektrikli Bisiklet" },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Elektronik",
      options: [
        {
          option: "Giyim",
          contents: [
            { content: "Elbise" },
            { content: "Tişört" },
            { content: "Gömlek" },
            { content: "Pantolon" },
            { content: "Mont" },
            { content: "Ceket" },
            { content: "Etek" },
          ],
        },
        {
          option: "Ayakkabı",
          contents: [
            { content: "Topuklu Ayakkabı" },
            { content: "Spor Ayakkabı" },
            { content: "Klasik Ayakkabı" },
            { content: "Espadril" },
            { content: "Babet" },
            { content: "Terlik" },
            { content: "Sandalet" },
          ],
        },
        {
          option: "Aksesuar&Çanta",
          contents: [
            { content: "Bilezik" },
            { content: "Kolye" },
            { content: "Küpe" },
            { content: "Bileklik" },
            { content: "Set-Takım " },
            { content: "Omuz Çantası" },
            { content: "Sırt Çantası" },
          ],
        },
        {
          option: "İç Giyim",
          contents: [
            { content: "Külot" },
            { content: "Sütyen" },
            { content: "Boxer" },
            { content: "Atlet" },
            { content: "Fantezi Giyim" },
            { content: "Jartiyer" },
            { content: "Takım İç Çamaşır" },
          ],
        },
        {
          option: "Lüks&Designer",
          contents: [
            { content: "Tasarım Çanta" },
            { content: "Tasarım Elbise" },
            { content: "Tasarım Takım Elbise" },
            { content: "Tasarım Ayakkabı" },
          ],
        },
        {
          option: "Kozmetik",
          contents: [
            { content: "Deodorant" },
            { content: "Parfüm" },
            { content: "Krem" },
            { content: "Yıkama Jeli" },
            { content: "Güneş Kremi" },
          ],
        },
        {
          option: "Spor&Outdoor",
          contents: [
            { content: "Çadır" },
            { content: "Kamp Malzemeleri" },
            { content: "Elektrikli Bisiklet" },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Anne & Çocuk",
      options: [
        {
          option: "Giyim",
          contents: [
            { content: "Elbise" },
            { content: "Tişört" },
            { content: "Gömlek" },
            { content: "Pantolon" },
            { content: "Mont" },
            { content: "Ceket" },
            { content: "Etek" },
          ],
        },
        {
          option: "Ayakkabı",
          contents: [
            { content: "Topuklu Ayakkabı" },
            { content: "Spor Ayakkabı" },
            { content: "Klasik Ayakkabı" },
            { content: "Espadril" },
            { content: "Babet" },
            { content: "Terlik" },
            { content: "Sandalet" },
          ],
        },
        {
          option: "Aksesuar&Çanta",
          contents: [
            { content: "Bilezik" },
            { content: "Kolye" },
            { content: "Küpe" },
            { content: "Bileklik" },
            { content: "Set-Takım " },
            { content: "Omuz Çantası" },
            { content: "Sırt Çantası" },
          ],
        },
        {
          option: "İç Giyim",
          contents: [
            { content: "Külot" },
            { content: "Sütyen" },
            { content: "Boxer" },
            { content: "Atlet" },
            { content: "Fantezi Giyim" },
            { content: "Jartiyer" },
            { content: "Takım İç Çamaşır" },
          ],
        },
        {
          option: "Lüks&Designer",
          contents: [
            { content: "Tasarım Çanta" },
            { content: "Tasarım Elbise" },
            { content: "Tasarım Takım Elbise" },
            { content: "Tasarım Ayakkabı" },
          ],
        },
        {
          option: "Kozmetik",
          contents: [
            { content: "Deodorant" },
            { content: "Parfüm" },
            { content: "Krem" },
            { content: "Yıkama Jeli" },
            { content: "Güneş Kremi" },
          ],
        },
        {
          option: "Spor&Outdoor",
          contents: [
            { content: "Çadır" },
            { content: "Kamp Malzemeleri" },
            { content: "Elektrikli Bisiklet" },
          ],
        },
      ],
    },
  ];

  const [isDrowpdownVisible, setIsDropdownVisible] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [inputFocus, setInputFocus] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setInputFocus(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  function handleMouseEnter(id) {
    setIsDropdownVisible(true);
    setActiveMenuId(id);
  }
  function handleMouseLeave() {
    setIsDropdownVisible(false);
    setActiveMenuId(null);
  }
  function handleFocus() {
    setInputFocus(true);
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1 className="navbar-brandName">SupreIce</h1>
      
        <input
          className="navbar-searchInput"
          placeholder="Ara..."
          ref={inputRef}
          style={{
            width: inputFocus ? "20%" : "15%",
            transition: "width  0.3s",
          }}
          onFocus={handleFocus}
        />
        <ul className="navbar-ul-2">
          <li >
            <a className="navbar-ul2-li" href="/">
              Sepetim
              <FaShoppingCart className="icons" />
            </a>
          </li>
          <li>
            <a className="navbar-ul2-li" href="/">        
              Hesabım
              <IoPersonSharp className="icons" />
            </a>
          </li>
          <li>
            <a className="navbar-ul2-li" href="/">
              Favorilerim
              <MdFavorite className="icons" />
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar" style={{ margin: "auto" }}>
        <ul className="navbar-ul">
          {menuItems.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className="navbar-li"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="navbar-menuItems"
                style={{
                  borderBottom:
                    isDrowpdownVisible && activeMenuId === item.id
                      ? "3px solid #bf4565"
                      : "transparent",
                }}
              >
                {item.name}
              </button>
              {isDrowpdownVisible && activeMenuId === item.id && (
                <Dropdown options={item.options} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
