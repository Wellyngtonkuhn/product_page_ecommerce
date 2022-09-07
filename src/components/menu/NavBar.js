import { useContext, useEffect } from "react";
import { NewContextProvider } from "../../context/ContextProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import {
  CartItems,
  Header,
  Logo,
  MenuBurger,
  MenuOptions,
  Nav,
  Options,
  Ul,
} from "./styleNavBar";

export default function Navbar() {
  const { productLocalStorage, handleGetItemsLocalStorage } =
    useContext(NewContextProvider);

  useEffect(() => {
    handleGetItemsLocalStorage();
  }, []);

  return (
    <>
      <Header>
        <MenuBurger>
          <div>
            <a>
              <FontAwesomeIcon icon={faBars} />
            </a>
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
