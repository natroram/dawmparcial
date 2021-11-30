import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useRef, useEffect } from "react";
const Navigation = ({ userIsLogin }) => {
  const isMountedRef = useRef(true);
  useEffect(
    () => () => {
      isMountedRef.current = false;
    },
    []
  );

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand" href="#page-top">
            Bunheads' Sweets
          </a>{" "}
        </div>

        <div
          className="navbar-collapse collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tienda">Shop</Link>
            </li>
            <li>
              <Link to="/noticias">News</Link>
            </li>
            <li>
              <Link to="/equipo">Team</Link>
            </li>
            <li>
              <Link to="/contactanos">Contact</Link>
            </li>
            {userIsLogin ? (
              <>
                {console.log("userIsLogin from Navigation" + userIsLogin)}
                <li>
                  <Link to="/usuario">Profile</Link>
                </li>
                <li>
                  <Link to="/carrito">Cart</Link>
                </li>{" "}
              </>
            ) : (
              <>
                {" "}
                {console.log("userIsLogin from Navigation" + userIsLogin)}
                <li className="sinEfecto">
                  <Link to="/login">
                    <button id="loginButton">Iniciar Sesión</button>
                  </Link>
                </li>
                <li className="sinEfecto">
                  <Link to="/registro">
                    <button id="signupButton">Registrarse</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  userIsLogin: state.appReducer.userIsLogin,
});

export default connect(mapStateToProps)(Navigation);
