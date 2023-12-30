import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="card">
        <div className="alartCard">
          <h1>404! Page Not Found </h1>
          <Link to="/">
            <button className="btn">Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
