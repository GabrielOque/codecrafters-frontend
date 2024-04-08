import React from 'react';
import './App.css';

const OutputTestComponent = ({ resultTest }) => {
    return (
        <div className="relative text-2xl w-1/2">
            <p className={`bg-gray-800 text-white font-bold rounded-md px-4 py-2 pl-16 relative ${resultTest ? 'show' : ''}`}>
                {resultTest ? '¡Enhorabuena! Las pruebas se han completado con éxito!' : '¡Ups! Parece que algo salió mal en las pruebas!'}
                {resultTest && <span className="hallelujah">🎉</span>}
                {resultTest && <i className="text-3xl fa-solid fa-check text-green-500 absolute top-1/2 transform -translate-y-1/2 left-4" />}
                {!resultTest && <i className="text-3xl fa-solid fa-x text-green-500 absolute top-1/2 transform -translate-y-1/2 left-4" />}
            </p>
        </div>
    );
};

export default OutputTestComponent;


