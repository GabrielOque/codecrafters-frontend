import React, { useState } from "react";
import { LiveProvider, LiveEditor } from "react-live";
import { fusionAndCompare } from "../helpers"
import TerminalComponent from "./TerminalComponent";
import OutputTestComponent from "./OutputTestComponent";
import RunButtonComponent from "./RunButtonComponent";


const CodeEditorLive = ({
  level,
  points,
  title,
  description,
  answer,
  initialConfig,
  values
}) => {

  const data = values;
  const [code, setCode] = useState(initialConfig);
  const [resultTest, setResultTest] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState(null);
  const [isCorrectTest, setIsCorrectTest] = useState(false);

  const handleRunCode = () => {
    try {
      console.log = (message) => {
        setConsoleOutput(message);
      };
      const returnFunction = eval(`(${code})(data)`)

      if (fusionAndCompare(returnFunction, answer)) {
        setResultTest(true);
        setIsCorrectTest(true);
      }
      else {
        setResultTest(false);
      }

    } catch (error) {
      setConsoleOutput(error.message);
    }
  };


  const handleBlur = (event) => {
    const editorValue = event.target.textContent;
    const lines = editorValue.split('\n');


    if (lines[lines.length - 1].trim() === '') {
      lines.pop();
    }

    const newValue = lines.join('\n');
    setCode(() => newValue);
  };

  return (
    <div className="mb-36 w-full flex flex-col items-center">
      <div className="lg:w-1/2 w-full text-white text-xl font-bold">
        <div className="flex w-full items-center mb-5">
          <h1 className="text-white font-bold text-5xl mr-3">{title}</h1>
          <img
            className="w-20 h-auto"
            src="https://i.pinimg.com/originals/3c/8f/be/3c8fbe3e0a44f5ca8f13060eb69128ed.gif"
            alt="this is a gift"
          />
        </div>
        <p>{description}</p>
        <div className="mt-2 text-amber-500">
          <p>Nivel: {level}</p>
          <p>Puntos: {points}</p>
        </div>
        <div className="w-full text-center mb-2 ">
          <i className="fas fa-arrow-down text-4xl text-amber-500 cursor-pointer inline-block animate-bounce" />
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <LiveProvider code={code} noInline>
          <div onBlur={handleBlur}>
            <LiveEditor style={{ fontFamily: 'monospace', fontSize: '1.6rem' }}
              className="bg-gray-800 rounded-lg p-4"
            />
          </div>
          <div>
            <RunButtonComponent handleRunCode={handleRunCode} topic="Ejecutar" isCorrectTest={isCorrectTest} />
          </div>
          <div className="w-full flex gap-x-4">
            <OutputTestComponent resultTest={resultTest} />
            <TerminalComponent consoleOutput={consoleOutput} />
          </div>
        </LiveProvider>
      </div>
    </div>
  );
};

export default CodeEditorLive;
