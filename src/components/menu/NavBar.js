import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
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
  height: 64px;
  max-width: 1228px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 64px;
  padding-right: 64px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
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
  a {
    cursor: pointer;
  }
`;