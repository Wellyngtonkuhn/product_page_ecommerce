import { useState } from "react";

import styled from "styled-components";
import Wine from "../assets/wine.png";

export default function ProductPage() {
  const [itemCounter, setIttemCounter] = useState(1);

  console.log(itemCounter);

  const handleCounterItemAdd = () => {
    setIttemCounter(itemCounter + 1);
  };

  const handleCounterItemSub = () => {
    if (itemCounter > 1) {
      setIttemCounter(itemCounter - 1);
    }
  };

  return (
    <>
      <Main>
        <ProductSection>
          <ProductImage>
            <div>
              <img src={Wine} />
            </div>
          </ProductImage>

          <ProductDetails>
            <Title>Rainer wass</Title>
            <SubTitle>Wachua</SubTitle>
            <ProductName>
              Gruner veltliner
              <span> 2018</span>
              <span> white</span>
            </ProductName>
            <ProductOrigem>
              <p>wachau, Autria</p>

              <p>12.5% ABV</p>
            </ProductOrigem>
            <ProducDescription>
              A fresh, citrusy Austrian white wine with floral and mineral
              notes, which has an incredible acidity to its palate. This Grüner
              Veltliner hails from the Wachau valley, a microclimate perfect for
              grape-growing.
            </ProducDescription>
            <ShoppingProduct>
              <div>
                <select defaultValue={"default"}>
                  <option disabled>Select a variant</option>
                  <option value={"default"}>750ML</option>
                </select>

                <AddMoreItem>
                  <button onClick={() => handleCounterItemSub()}>-</button>
                  <span>{itemCounter}</span>
                  <button onClick={() => handleCounterItemAdd()}>+</button>
                </AddMoreItem>
              </div>

              <ButtonAddToCart>
                <span>Add to cart</span>
                <span>$18,99</span>
              </ButtonAddToCart>
            </ShoppingProduct>
          </ProductDetails>
        </ProductSection>
      </Main>
    </>
  );
}

const Main = styled.main`
  max-width: 1228px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 64px;
  padding-right: 64px;
  margin-top: 64px;
`;

const ProductSection = styled.section`
  display: flex;
  gap: 50px;
`;

const ProductImage = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  margin-left: -126px;
  flex: 1 1;
  display: flex;
  justify-content: center;
  background-color: #eee;
  div {
    top: 2vh;
    width: 760px;
    height: 860px;
    text-align: center;
  }
  img {
    width: 200px;
    object-fit: contain;
    object-position: center center;
  }
`;

const ProductDetails = styled.div`
  padding-top: 60px;
`;
const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  color: #2d2d2d;
  text-transform: uppercase;
`;

const SubTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: "#2d2d2d";
  text-transform: uppercase;
`;

const ProductName = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  color: #8f8f8f;
  text-transform: uppercase;
`;

const ProductOrigem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    color: #2d2d2d;
    text-transform: uppercase;
  }
`;

const ProducDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 32px;
  color: #2d2d2d;
  text-align: justify;
`;

const ShoppingProduct = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  select {
    width: 75%;
    padding: 10px;
    text-align: center;
    border: 1px solid #cacaca;
  }
`;

const AddMoreItem = styled.div`
  width: 25%;
  border: 1px solid #cacaca;
  span {
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    color: #2d2d2d;
  }
  button {
    padding: 12px 16px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const ButtonAddToCart = styled.button`
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
  margin: 20px 0;
`;
