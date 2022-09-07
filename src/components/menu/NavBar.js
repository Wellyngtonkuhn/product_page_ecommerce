import { useContext, useEffect } from "react";
import { NewContextProvider } from "../../context/ContextProvider";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

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

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 64px;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  padding-left: 64px;
  padding-right: 64px;
  background-color: #ffffff;
  box-shadow: 0px 0px 19px -4px rgb(0 0 0 / 20%);
  @media (max-width: 1050px) {
    right: unset;
  }
`;

const MenuBurger = styled.nav`
  a {
    cursor: pointer;
  }
  @media (max-width: 1050px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 1051px) {
    display: none;
  }
`;

const Nav = styled.nav`
  @media (max-width: 1050px) {
    display: none;
  }

  @media (min-width: 1051px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 1228px;
    margin: auto;
    padding-left: 64px;
    padding-right: 64px;
  }

  @media (min-width: 1850px) {
    padding: 0 128px;
  }
`;

const Logo = styled.div``;

const MenuOptions = styled.div`
  display: flex;
  gap: 40px;
`;

const Ul = styled.ul`
  display: flex;
  gap: 50px;
  li {
    list-style: none;
    a {
      text-decoration: none;
      text-transform: uppercase;
      color: #2d2d2d;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const Options = styled.div`
  display: flex;
  gap: 15px;
  position: relative;
  a {
    cursor: pointer;
  }
`;

const CartItems = styled.div`
  position: absolute;
  top: -10px;
  right: -15px;
  padding: 5px 7px;
  border-radius: 10px;
  border: 1px solid #fff;
  background: #1c8c64;
  color: #fff;
  font-size: 12px;
  line-height: 8px;

  @media (max-width: 1050px) {
    position: absolute;
    top: 14px;
    right: 45px;
    padding: 6px 7px;
    border-radius: 20px;
    border: 1px solid #fff;
    background: #1c8c64;
    color: #fff;
    font-size: 12px;
    line-height: 8px;
  }
`;
