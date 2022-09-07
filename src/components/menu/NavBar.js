import { useContext, useEffect } from "react";
import { NewContextProvider } from "../../context/ContextProvider";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { productLocalStorage, handleGetItemsLocalStorage } =
    useContext(NewContextProvider);

  useEffect(() => {
    handleGetItemsLocalStorage();
  }, []);

  return (
    <>
      <Header>
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
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1228px;
  padding-left: 64px;
  padding-right: 64px;
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
`;
