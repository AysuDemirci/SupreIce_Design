import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp, IoMenuSharp } from "react-icons/io5";
import { MdFavorite, MdSearch } from "react-icons/md";
import CartDropdown from "./CartDropdown";
import SearchBox from "./SearchBox";

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

  const accountDetails = [
    {
      id: 8,
      favorite: "Tüm Siparişlerim",
    },
    {
      id: 9,
      favorite: "Değerlendirmelerim",
    },
    {
      id: 10,
      favorite: "Satıcı Mesajlarım",
    },
    {
      id: 11,
      favorite: "Cüzdanım",
    },
    {
      id: 12,
      favorite: "İndirim Kuponlarım",
    },
    {
      id: 13,
      favorite: "Kullanıcı Bilgilerim",
    },
    {
      id: 14,
      favorite: "Asistan",
    },
    {
      id: 15,
      favorite: "Çıkış Yap",
    },
  ];

  const [isDrowpdownVisible, setIsDropdownVisible] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [inputFocus, setInputFocus] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const inputRef = useRef(null);
  const [searchInput, setSearchInput] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isCartDropdownVisible, setIsCartDropdownVisible] = useState(false);

  function handleOpenDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  const handleCartMouseEnter = () => {
    setIsCartDropdownVisible(true);
  };
  const handleCartMouseLeave = () => {
    setIsCartDropdownVisible(false);
  };

  function handleShowNavbar() {
    setShowNavbar(!showNavbar);
  }

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
  function handleSearchInput() {
    setSearchInput(!searchInput);
  }

  const [inputText, setInputText] = useState("");
  const list = menuItems.map((a) => a.options).flat();
  const id = menuItems.map((a) => a.id);
  const data = list.map((a) => a.contents).flat();

  const [filterContent, setFilterContent] = useState(data);

  function inputHandler(e) {
    debugger;
    const searchTerm = e.target.value;
    setInputText(searchTerm);
    if (searchTerm !== "") {
      const filteredItems = data.filter((content) =>
        content.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterContent(filteredItems);
    } else {
      return "";
    }
  }

  return (
    <div className="all-component">
      <div style={{ display: "flex", height: "80px" }}>
        <h1 className="navbar-brandName">SupreIce</h1>
        {/* burası sayfa küçülünce açılan yer */}
        <div className="resp-searchBox">
          <MdSearch
            className="search-button"
            onClick={() => {
              handleSearchInput();
              handleOpenDropdown();
            }}
          />
          {searchInput && (
            <input
              className="searchInput-box"
              style={{
                width: "150px",
                transition: "width  0.3s",
              }}
              onChange={(e) => inputHandler(e)}
              value={inputText || ""}
            />
          )}

          {/* <div>
            <ul>
              {filterContent.map((a) => (
                <li key={id}>{a.content}</li>
              ))}
            </ul>
          </div> */}
        </div>
        {/* ana sayfa */}
        <input
          className="navbar-searchInput"
          placeholder="Ara..."
          ref={inputRef}
          style={{
            width: inputFocus ? "40%" : "30%",
            transition: "width  0.3s",
            borderBottomLeftRadius: inputFocus ? "0px" : "10px",
            borderBottomRightRadius: inputFocus ? "0px" : "10px",
          }}
          onFocus={handleFocus}
          value={inputText || ""}
          onChange={(e) => inputHandler(e)}
        />
        {inputFocus && (
          <div className="filterDropdown">
            <ul className="filterUl">
              {filterContent.map((a) => (
                <li key={id} className="filterLi">
                  {a.content}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div onClick={handleShowNavbar}>
        <IoMenuSharp className="menu-icon" />
      </div>
      <div
        className={`navbar ${showNavbar && "active"}`}
        style={{ margin: "auto" }}
      >
        <ul className="navbar-ul">
          {menuItems.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className="navbar-li"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="/"
                className="navbar-menuItems"
                style={{
                  textDecoration: "none",

                  borderBottom:
                    activeMenuId === item.id && inputFocus === false
                      ? "3px solid #bf4565"
                      : "transparent",
                  color:
                    activeMenuId === item.id && inputFocus === false
                      ? "#bf4565"
                      : "black",
                }}
              >
                {item.name}
              </a>

              {isDrowpdownVisible &&
                activeMenuId === item.id &&
                inputFocus === false && <Dropdown options={item.options} />}
            </li>
          ))}
        </ul>
        <div className="navbar-ul2-style">
          <ul className="navbar-ul-2">
            <li
              onMouseEnter={handleCartMouseEnter}
              onMouseLeave={handleCartMouseLeave}
            >
              <a className="navbar-ul2-li-drp navbar-ul2-li" href="/">
                Hesabım
                <IoPersonSharp className="icons" />
              </a>
              {isCartDropdownVisible && (
                <CartDropdown accountDetails={accountDetails} />
              )}
            </li>
            <li>
              <a className="navbar-ul2-li" href="/">
                Sepetim
                <FaShoppingCart className="icons" />
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
      </div>
    </div>
  );
}
