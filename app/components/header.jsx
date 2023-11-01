import logoImage from "p/bxs-layer.svg";
import { Link } from "@remix-run/react";
const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="left-side">
          <Link className="link">
            <img className="logo" src={logoImage} alt="logo" />
          </Link>
          <nav className="nav">
            <Link className="link">live</Link>
            <Link className="link">push</Link>
            <Link className="link">link</Link>
            <Link className="link">shop</Link>
            <Link className="link">packs</Link>
            <Link className="link">help</Link>
            <Link className="link">more +</Link>
          </nav>
        </div>
        <div className="right-side">
          <nav className="nav">
            <Link className="link special">try live for free</Link>
            <Link className="link">account</Link>
            <Link className="link">log out</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
