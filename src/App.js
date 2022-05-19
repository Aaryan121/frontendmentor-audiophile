import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductInfo from "./components/Productinfo";
import Footer from "./components/Footer";
import "./styles/Global.css";

function App() {
  return (
    <div>
      <div className="bgimg">
        <div className="margin">
          <Navbar />
          <Hero />
        </div>
      </div>
      <ProductInfo />
      <Footer />
    </div>
  );
}

export default App;
