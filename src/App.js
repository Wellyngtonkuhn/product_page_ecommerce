import ContextProvider from "./context/ContextProvider";

import Navbar from "./components/menu/NavBar";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />

        <ProductPage />

        <Footer />
      </ContextProvider>
    </>
  );
}
