import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
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

export const MenuBurger = styled.nav`
  @media (min-width: 1051px) {
    display: none;
  }

  @media (max-width: 1050px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    a {
      cursor: pointer;
    }
  }
`;

export const ShowMenuMobileContent = styled.div`
  @media (min-width: 1051px) {
    display: none;
  }
  @media (max-width: 1050px) {
    padding-top: 25px;
    margin-left: -64px;
    width: 100vw;
    height: 70vh;
    background-color: #fff;
    border-top: 1px solid #2d2d2d;
    opacity: ${(props) => (props.show ? 1 : 0)};
    nav {
      padding-left: 32px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    li {
      list-style: none;
      a {
        color: #2d2d2d;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        text-transform: uppercase;
        text-decoration: none;
      }
    }
    div:nth-child(3) {
      a {
        text-decoration: none;
        color: #2d2d2d;
      }
    }
  }
`;

export const Language = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 64px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    a {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
    }
  }
  p {
    color: #8f8f8f;
    padding-bottom: 64px;
  }
`;

export const Nav = styled.nav`
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

export const Logo = styled.div``;

export const MenuOptions = styled.div`
  display: flex;
  gap: 40px;
`;

export const Ul = styled.ul`
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

export const Options = styled.div`
  display: flex;
  gap: 15px;
  position: relative;
  a {
    cursor: pointer;
  }
`;

export const CartItems = styled.div`
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
