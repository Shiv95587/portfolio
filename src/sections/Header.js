import Hero from "../Hero";
import NavBar from "../components/NavBar";
import "../css/Header.css";
export default function Header() {
  return (
    <header id="header">
      <div className="container">
        <NavBar />
      </div>
      <Hero />
    </header>
  );
}
