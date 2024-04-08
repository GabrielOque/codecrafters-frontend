import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full font-bold text-white text-3xl mb-3 py-3 bg-zinc-800 px-20">
      <ul className="text-amber-500 flex justify-between items-center">
        <li className="w-1/2 cursor-pointer text-3xl ">
          <Link to="/home">
            <i className="fa-brands fa-node-js pr-4" />
            CodeCrafters
          </Link>

        </li>
        <div className="w-1/2 lg:block hidden">
          <div className="w-full flex justify-between items-center">
            <li className="cursor-pointer">
              <Link to="/levels">Niveles</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/points">Puntos</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/results">Resultados</Link>
            </li>
            <li>
              <Link to="/login">
                <button className="bg-amber-500 rounded-lg px-3 py-1 text-xl font-bold my-5 text-white">
                  Iniciar sesion
                </button>
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
