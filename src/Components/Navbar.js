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

  function handleMouseEnter(id) {
    setIsDropdownVisible(true);
    setActiveMenuId(id);
  }
  function handleMouseLeave() {
    setIsDropdownVisible(false);
    setActiveMenuId(null);
  }

  return (
    <div className="navbar">
      <h1 className="navbar-brandName">SupreIce</h1>
      <ul className="navbar-ul">
        {menuItems.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className="navbar-li"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="navbar-menuItems">{item.name}</button>
            {isDrowpdownVisible && activeMenuId === item.id && (
              <Dropdown options={item.options} />
            )}
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
