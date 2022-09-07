import { useContext, useEffect, useState } from "react";
import { NewContextProvider } from "../../context/ContextProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faUser,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import {
  CartItems,
  Header,
  Language,
  Logo,
  MenuBurger,
  MenuOptions,
  Nav,
  Options,
  ShowMenuMobileContent,
  Ul,
} from "./styleNavBar";

export default function Navbar() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const { productLocalStorage, handleGetItemsLocalStorage } =
    useContext(NewContextProvider);

  useEffect(() => {
    handleGetItemsLocalStorage();
  }, []);

  const handleShowMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };
  console.log(showMenuMobile);

  return (
    <>
      <Header>
        <MenuBurger>
          <div>
            {showMenuMobile ? (
              <a onClick={handleShowMenuMobile}>
                <FontAwesomeIcon icon={faX} />
              </a>
            ) : (
              <a onClick={handleShowMenuMobile}>
                <FontAwesomeIcon icon={faBars} />
              </a>
            )}
          </div>
          <div>
            <a>
              <img
                src="https://www.datocms-assets.com/30257/1614688752-logo-black.svg"
                alt="Lexir_Logo"
              />
            </a>
          </div>
          <div>
            <a>
              <FontAwesomeIcon icon={faBasketShopping} />
            </a>
            {productLocalStorage && (
              <CartItems>
                <p>{productLocalStorage.Amount}</p>
              </CartItems>
            )}
          </div>
        </MenuBurger>

        <ShowMenuMobileContent show={showMenuMobile}>
          <nav>
            <ul>
              <li>
                <a href="">Spirits</a>
              </li>
              <li>
                <a href="">Wine</a>
              </li>
              <li>
                <a href="">Brands</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Business Buyers</a>
              </li>
            </ul>

            <Language>
              <div>
                <a>FRANCE</a>
                <img
                  src="https://www.datocms-assets.com/30257/1627334739-icons8-france.svg"
                  alt="France"
                />
              </div>
              <p>English</p>
            </Language>
            <div>
              <a href="#">LOG IN</a>
            </div>
          </nav>
        </ShowMenuMobileContent>

        <Nav>
          <Logo>
            <a>
              <img
                src="https://www.datocms-assets.com/30257/1614688752-logo-black.svg"
                alt="Lexir_Logo"
              />
            </a>
          </Logo>

          <MenuOptions>
            <Ul>
              <li>
                <a href="">Spirits</a>
              </li>
              <li>
                <a href="">Wine</a>
              </li>
              <li>
                <a href="">Brands</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Business Buyers</a>
              </li>
            </Ul>

            <Options>
              <a>EN</a>
              <a>
                <FontAwesomeIcon icon={faUser} />
              </a>
              <a>
                <FontAwesomeIcon icon={faBasketShopping} />
              </a>
              {productLocalStorage && (
                <CartItems>
                  <p>{productLocalStorage.Amount}</p>
                </CartItems>
              )}
            </Options>
          </MenuOptions>
        </Nav>
      </Header>
    </>
  );
}
