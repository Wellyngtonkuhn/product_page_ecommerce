import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import styled from "styled-components";
import Wine from "../assets/wine.png";
import Nariz from "../assets/nariz.png";
import Lingua from "../assets/lingua.png";

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
              <img src={Wine} alt="Wine" />
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
              <FreDelivery>
                VAT included. Free delivery on orders €30+
              </FreDelivery>
            </ShoppingProduct>

            <TastingNotes>
              <div>
                <h2>tasting notes</h2>
              </div>
              <div>
                <img src={Nariz} alt="nariz" />
                <p>green fruit</p>
                <span></span>
                <p>peppery</p>
                <span></span>
                <p>citrus</p>
              </div>
              <div>
                <img src={Lingua} alt="lingua" />
                <p>acidc</p>
                <span></span>
                <p>floral</p>
                <span></span>
                <p>lime</p>
              </div>
            </TastingNotes>
            <Characteristics>
              <div>
                <h2>Characteristics</h2>
              </div>
              <CharacteristicsContent>
                <DivItems>
                  <img
                    src="https://www.datocms-assets.com/30257/1613736774-wine-characteristic-body-icon.svg"
                    alt="glassWine"
                  />

                  <ul>
                    <li style={{ background: "#1c8c64" }}></li>
                    <li style={{ background: "#1c8c64" }}></li>
                    <li style={{ background: "#1c8c64" }}></li>
                    <li style={{ background: "#ccc" }}></li>
                    <li style={{ background: "#ccc" }}></li>
                  </ul>

                  <div>
                    <h3>Body</h3>
                    <p>Medium</p>
                  </div>
                </DivItems>
                <DivItems>
                  <img
                    src="https://www.datocms-assets.com/30257/1613736811-wine-characteristic-aroma-icon.svg"
                    alt="Aroma"
                  />

                  <ul>
                    <li style={{ background: "#1c8c64" }}></li>
                    <li style={{ background: "#1c8c64" }}></li>
                    <li style={{ background: "#1c8c64" }}></li>
                    <li style={{ background: "#ccc" }}></li>
                    <li style={{ background: "#ccc" }}></li>
                  </ul>
                  <div>
                    <h3>Aroma</h3>
                    <p>Medium</p>
                  </div>
                </DivItems>
                <DivItems>
                  <img
                    src="https://www.datocms-assets.com/30257/1613736837-wine-characteristic-acidity-icon.svg"
                    alt="Acidity"
                  />

                  <ul>
                    <li style={{ background: "#1c8c64" }}></li>
                    <li style={{ background: "#1c8c64" }}></li>
                    <li style={{ background: "#1c8c64" }}></li>
                    <li style={{ background: "#1c8c64" }}></li>
                    <li style={{ background: "#ccc" }}></li>
                  </ul>

                  <div>
                    <h3>Acidity</h3>
                    <p>Medium High</p>
                  </div>
                </DivItems>
              </CharacteristicsContent>
              <Occasion>
                <div>
                  <h2>Whats the Occasion</h2>
                </div>
                <div>
                  <div>
                    <p>Aperitif</p>
                    <img
                      src="https://www.datocms-assets.com/30257/1603470616-aperitif-icon.svg"
                      alt="aperitif"
                    />
                  </div>
                  <div>
                    <p>Drink While Cooking</p>
                    <img
                      src="https://www.datocms-assets.com/30257/1616532260-drink-while-cooking-icon.svg"
                      alt="Icon cooking"
                    />
                  </div>
                  <div>
                    <p>Family Night</p>
                    <img
                      src="https://www.datocms-assets.com/30257/1616532179-family-night-icon.svg"
                      alt="Icon Family Night"
                    />
                  </div>
                </div>
              </Occasion>

              <TheGrapes>
                <h2>The Grapes</h2>
                <div>
                  <img
                    src="https://www.datocms-assets.com/30257/1616608812-gruner-veltliner.png?auto=format&dpr=1&w=36 1x,
https://www.datocms-assets.com/30257/1616608812-gruner-veltliner.png?auto=format&dpr=1.5&w=36 1.5x,
https://www.datocms-assets.com/30257/1616608812-gruner-veltliner.png?auto=format&dpr=2&w=36 2x,
https://www.datocms-assets.com/30257/1616608812-gruner-veltliner.png?auto=format&dpr=3&w=36 3x"
                    alt="grape"
                  />
                  <p>gruner veltliner</p>
                </div>
              </TheGrapes>
            </Characteristics>
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
  margin-left: -126px;
  flex: 1 1;
  display: flex;
  align-items: center;
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
    padding: 15px;
    text-align: center;
    border-radius: 2px;
    border: 1px solid #cacaca;
  }
`;

const AddMoreItem = styled.div`
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
  cursor: pointer;
  border-radius: 2px;
  transition: all ease 0.5s;
  :hover {
    background-color: #8f8f8f;
  }
`;

const FreDelivery = styled.p`
  text-align: end;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  color: #2d2d2d;
`;

const TastingNotes = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

const Characteristics = styled.div`
  margin-top: 40px;
  h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    color: #2d2d2d;
  }
`;

const CharacteristicsContent = styled.div`
  display: flex;
  gap: 15px;
`;

const DivItems = styled.div`
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

const Occasion = styled.div`
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

const TheGrapes = styled.div`
  margin-top: 40px;
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

    p {
      font-weight: 500;
      line-height: 32px;
      text-transform: uppercase;
      color: #8f8f8f;
      margin-left: 12px;
    }
  }
`;
