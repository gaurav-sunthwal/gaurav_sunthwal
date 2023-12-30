import "../Styles/footer.css";
import { TbExternalLink } from "react-icons/tb";

import { Link } from "react-router-dom";
function footer() {
  return (
    <>
      
      <footer>
        <div className="Item">
          <div className="leftItem">
            <h3>© Build By Team of Gaurav</h3>
          </div>
          <div className="rightItam">
            <Link to={"https://www.instagram.com/gaurav_sunthwal"}>
              Instagram <TbExternalLink className="footerIcons" />
            </Link>
            <Link to={"https://www.linkedin.com/in/gaurav-sunthwal/"}>
              Linkedin <TbExternalLink className="footerIcons" />
            </Link>
            <Link to={"https://discord.gg/Pb5E8WJw"}>
              Discord <TbExternalLink className="footerIcons" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
