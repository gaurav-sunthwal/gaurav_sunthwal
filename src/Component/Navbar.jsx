import "../Styles/Navbar.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// import { BiSolidUser } from "react-icons/bi";
// import { BsHandbag } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

// import "./Styles/Navbar.css";
function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible); // Toggle the visibility
  };
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <h1>Gaurav Sunthwal</h1>
            </Link>
          </div>

          <div className="manu">
            <ul>
              <li>
                <HashLink to={"/#home"} className="links">
                  Home
                </HashLink>
              </li>
              <li>
                <Link to={"/work"}>Work</Link>
              </li>
              <li>
                <Link to="/about">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="manuBurger" onClick={handleClick}>
            <AiOutlineMenu style={{ display: isVisible ? 'none' : 'block' }}/>
            <AiOutlineClose style={{ display: isVisible ? 'block' : 'none' }}/>
          </div>
        </div>
        {/* <div className="icons">
          <BiSolidUser />
          <AiOutlineHeart />
          <BsHandbag />
        </div> */}
        <div className="bargurManu" style={{ display: isVisible ? 'block' : 'none' }}>
          <h1>
            <Link to={"/"}>Home</Link>
          </h1>
          <h1>
            <Link to={"/About"}>About</Link>
          </h1>
          <h1>
            <Link to={"/Work"}>Work</Link>
          </h1>
          <h1>
            <Link to={"/Contacts"}>Contacts</Link>
          </h1>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
