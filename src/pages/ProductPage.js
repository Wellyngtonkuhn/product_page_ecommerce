import { useState, useEffect, useContext } from "react";
import { NewContextProvider } from "../context/ContextProvider";

import Wine from "../assets/wine.png";
import Nariz from "../assets/nariz.png";
import Lingua from "../assets/lingua.png";
import {
  AddMoreItem,
  ButtonAddToCart,
  Characteristics,
  CharacteristicsContent,
  DivItems,
  FreDelivery,
  Main,
  Occasion,
  ProducDescription,
  ProductDetails,
  ProductImage,
  ProductName,
  ProductOrigem,
  ProductSection,
  ShoppingProduct,
  SubTitle,
  TastingNotes,
  TheGrapes,
  Title,
} from "./styleProductPage";

export default function ProductPage() {
  const [itemCounter, setIttemCounter] = useState(1);
  const productName = "Wachua";
  const price = 18.99;

  const { handleAddProductToLocalStorage } = useContext(NewContextProvider);

  const handleCounterItemAdd = () => {
    setIttemCounter(itemCounter + 1);
  };

  const handleCounterItemSub = () => {
    if (itemCounter > 1) {
      setIttemCounter(itemCounter - 1);
    }
  };

  useEffect(() => {
    document.title = "Wachau - Rainer Wess | Lexir";
  }, []);

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
            <SubTitle>{productName}</SubTitle>
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
              <ButtonAddToCart
                onClick={() =>
                  handleAddProductToLocalStorage(
                    itemCounter,
                    productName,
                    price
                  )
                }
              >
                <span>Add to cart</span>
                <span>€{price}</span>
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
                    src="https://www.datocms-assets.com/30257/1616608812-gruner-veltliner.png?auto=format&dpr=1&w=36 1x,https://www.datocms-assets.com/30257/1616608812-gruner-veltliner.png?auto=format&dpr=1.5&w=36 1.5x,https://www.datocms-assets.com/30257/1616608812-gruner-veltliner.png?auto=format&dpr=2&w=36 2x,https://www.datocms-assets.com/30257/1616608812-gruner-veltliner.png?auto=format&dpr=3&w=36 3x"
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
