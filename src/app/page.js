import Filters from "./components/Filters/Filters.js";
import Navbar from "./components/Navbar/Navbar.js";
import ProductsView from "./components/ProductsView/ProductsView.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import "./globals.css"
export default function Home() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <div className="content">
      <Filters/>
      <ProductsView/>
      </div>
    </div>
  );
}
