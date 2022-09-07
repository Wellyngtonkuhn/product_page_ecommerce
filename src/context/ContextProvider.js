import { useState, createContext } from "react";

export const NewContextProvider = createContext();

export default function ContextProvider({ children }) {
  const [productLocalStorage, setProductLocalStorage] = useState({
    ProductName: "",
    Price: 0,
    Amount: 0,
  });

  const handleAddProductToLocalStorage = (itemCounter, productName, price) => {
    localStorage.setItem(
      "Product:",
      JSON.stringify({
        ProductName: productName,
        Price: price,
        Amount: itemCounter + productLocalStorage?.Amount || itemCounter,
      })
    );
    setProductLocalStorage({
      ProductName: productName,
      Price: price,
      Amount: itemCounter + productLocalStorage?.Amount || itemCounter,
    });
  };

  const handleGetItemsLocalStorage = () => {
    setProductLocalStorage(JSON.parse(localStorage.getItem("Product:")));
  };

  return (
    <>
      <NewContextProvider.Provider
        value={{
          productLocalStorage,
          setProductLocalStorage,
          handleAddProductToLocalStorage,
          handleGetItemsLocalStorage,
        }}
      >
        {children}
      </NewContextProvider.Provider>
    </>
  );
}
