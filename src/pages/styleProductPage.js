import styled from "styled-components";

export const Main = styled.main`
  max-width: 1228px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 64px;
  padding-right: 64px;
  margin-top: 64px;

  @media (max-width: 1050px) {
    padding: 0;
  }
`;

export const ProductSection = styled.section`
  display: flex;
  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProductImage = styled.div`
  margin-left: -126px;
  display: flex;
  align-items: center;
  background-color: #eee;
  padding: 64px 0;
  div {
    width: 755px;
    text-align: center;
  }
  img {
    width: 200px;
    object-fit: contain;
    object-position: center center;
  }

  @media (max-width: 1050px) {
    margin-left: unset;
    width: 100%;
    img {
      width: 45px;
    }
  }
  @media (min-width: 1850px) {
    margin-left: unset;
  }
`;

export const ProductDetails = styled.div`
  padding-top: 50px;
  width: 440px;
  margin-left: 30px;

  @media (max-width: 1050px) {
    width: 100%;
    margin-left: unset;
    padding-left: 64px;
    padding-right: 64px;
  }
  @media (min-width: 1850px) {
    width: 30%;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  color: #2d2d2d;
  text-transform: uppercase;
`;

export const SubTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: "#2d2d2d";
  text-transform: uppercase;
`;

export const ProductName = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  color: #8f8f8f;
  text-transform: uppercase;
`;

export const ProductOrigem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    color: #2d2d2d;
    text-transform: uppercase;
  }
`;

export const ProducDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 32px;
  color: #2d2d2d;
  text-align: justify;
`;

export const ShoppingProduct = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  select {
    width: 75%;
    padding: 15px;
    text-align: center;
    border-radius: 2px;
    border: 1px solid #cacaca;
  }
`;

export const AddMoreItem = styled.div`
  border: 1px solid #cacaca;
  border-radius: 2px;
  span {
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    color: #2d2d2d;
    padding: 0 15px;
  }
  button {
    padding: 12px 16px;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 25px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const ButtonAddToCart = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  color: #fff;
  background-color: #2d2d2d;
  border: none;
  padding: 10px 10px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 2px;
  transition: all ease 0.5s;
  :hover {
    background-color: #8f8f8f;
  }
`;

export const FreDelivery = styled.p`
  text-align: end;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  color: #2d2d2d;
`;

export const TastingNotes = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: #2d2d2d;
    text-transform: uppercase;
  }
  div {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 32px;
      text-transform: uppercase;
      color: #2d2d2d;
      border-bottom: 1px solid #2d2d2d;
    }
  }
`;

export const Characteristics = styled.div`
  margin-top: 40px;
  h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    color: #2d2d2d;
  }
`;

export const CharacteristicsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const DivItems = styled.div`
  display: flex;
  margin-top: 12px;
  margin-right: 30px;
  img {
    height: 100%;
  }
  h2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #2d2d2d;
  }
  p {
    color: #c4c4c4;
  }
  ul {
    display: flex;
    transform: rotate(-90deg);
    margin-right: -20px;
    list-style: none;
    gap: 7px;
    margin-left: 20px;
    li {
      width: 4px;
      height: 16px;
    }
  }
`;

export const Occasion = styled.div`
  margin-top: 36px;
  h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #2d2d2d;
    margin-bottom: 8px;
  }
  div:nth-child(2) {
    display: flex;
    div {
      padding: 8px;
      display: flex;
      align-items: center;
      width: fit-content;
      background: #f9f9f9;
      border-radius: 4px;
      margin-left: 8px;
      p {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-transform: capitalize;
        color: #2d2d2d;
        margin-right: 5px;
      }
    }
  }
`;

export const TheGrapes = styled.div`
  margin-top: 40px;
  padding-bottom: 64px;
  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    text-transform: uppercase;
    color: #2d2d2d;
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 32px;
    img {
      width: 40px;
    }

    p {
      font-weight: 500;
      line-height: 32px;
      text-transform: uppercase;
      color: #8f8f8f;
      margin-left: 12px;
    }
  }
`;
