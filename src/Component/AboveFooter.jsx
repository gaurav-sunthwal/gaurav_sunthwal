// import { AiOutlineArrowRight } from "react-icons/ai";
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-router-dom"
import "../Styles/AboutFooter.css"
function AboveFooter() {
    return (
       <>
            <footer>
                <div className="AboveFooter">
                    <div className="leftSec AboveFooterManu">
                        <h1>Let’s work together</h1>
                    </div>
                    <div className="downArrow">
                        <FiArrowDownRight/>
                    </div>
                    <div className="midSec AboveFooterManu">
                        <Link to={"/contact"}><h1 className="goToContact">Contact</h1></Link>
                    </div>
                    <div className="rightSec AboveFooterManu">
                        <h2>I'm currently available for new work. Let me know if you're looking for a digital designer. Let’s talk about the next big thing!</h2>
                    </div>
                </div>
            </footer>
       </>
    )
}

export default AboveFooter
