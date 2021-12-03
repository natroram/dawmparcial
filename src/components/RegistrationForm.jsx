import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const RegistrationForm = () => {
  const [info, setInfo] = useState(null);
  const [state, setState] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    const newUser = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      address: document.querySelector("#address").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
      cart: [],
    };

    const response = await fetch("/users.json");
    const data = await response.json();
    if (!data.some((element) => element === newUser)) {
      data.push(newUser);
      setInfo({
        message: "User Added Successfully!",
      });
    } else {
      setInfo({
        message: "An error ocurred",
      });
    }
  };

  useEffect(() => {
    if (info && info.message === "User Added Successfully!") {
      setState(true);
      console.log(info.message);
    } else if (info && info.message === "An error ocurred") {
      console.log(info.message);
    }
  }, [info]);

  return !state ? (
    <form id="registrationForm" onSubmit={register} className="row">
      <div className="col-12 col-md-6">
        <label htmlFor="firstname">Nombre</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          placeholder="Nombre*"
          required
        ></input>
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="lastname">Apellido</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          placeholder="Apellido*"
          required
        ></input>
      </div>
      <div className="col-12">
        <label htmlFor="address">Dirección</label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Dirección*"
          required
        ></input>
      </div>
      <div className="col-12">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Correo electrónico*"
          required
        ></input>
      </div>
      <div className="col-12">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Contraseña*"
          required
        ></input>
      </div>
      <div className="col-12">
        <button type="submit">Registrarme</button>
      </div>
    </form>
  ) : (
    <div>
      <h1>Te has registrado con exito!</h1>
      <Link to="/login">
        <button id="loginButton">Iniciar Sesión</button>
      </Link>
    </div>
  );
};
