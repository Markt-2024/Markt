import Navbar from "./components/Navbar/Navbar.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import "./globals.css"
export default function Home() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
    </div>
  );
}
