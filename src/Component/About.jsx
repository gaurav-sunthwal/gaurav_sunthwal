import "../Styles/About.css";
import me from "../Img/me.jpeg";
function About() {
  return (
    <>
      <div className="about">
        <div className="tital">
          <h1>About</h1>
        </div>
        <div className="aboutSec">
          <div className="imgText">
            <div className="homeImg">
              <img src={me} alt="" />
            </div>
            <div className="otherText-1">
              <p>
                I'm a digital product designer with 8 years of experience, based
                in Switzerland. I like to understand people to solve their
                problems and craft digital solutions that resonate.
              </p>
            </div>
            <div className="bigText animate__backInLeft">
              <h1>Designing emotional digital experiences that people love</h1>
            </div>
          </div>
        </div>
      </div>

      {/* bard work */}
    </>
  );
}

export default About;
