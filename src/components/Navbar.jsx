import React from "react";

const Navbar = () => {
  return (
    <div className="w-full font-bold text-white text-3xl mb-3 py-3 bg-zinc-800 px-20">
      <ul className="text-amber-500 flex justify-between items-center">
        <li className="w-1/2 cursor-pointer">CodeCrafters</li>
        <div className="w-1/2 lg:block hidden">
          <div className="w-full flex justify-between items-center">
            <li className="cursor-pointer">Niveles</li>
            <li className="cursor-pointer">Puntuaciones</li>
            <li className="cursor-pointer">Resueltos</li>
            <li>
              <button className="bg-amber-500 rounded-lg px-3 py-1 text-xl font-bold my-5 text-white">
                Iniciar sesion
              </button>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
