import React, { useState } from "react";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { fusionAndCompare, countLines } from "../helpers";

const CodeEditorLive = ({
  initialConfig,
  values,
  answer,
  description,
  title,
}) => {
  const data = values;
  const [code, setCode] = useState(initialConfig);
  const [output, setOutput] = useState("");
  const [originalData, setOriginalData] = useState();

  const handleRunCode = () => {
    try {
      let capturedOutput = "";
      const originalLog = console.log;
      console.log = (message) => {
        if (typeof message === "object" || Array.isArray(message)) {
          capturedOutput += JSON.stringify(message, null, 2);
          setOriginalData(message);
        } else {
          capturedOutput += `${message}`;
          setOriginalData(message);
        }
      };

      eval(code);

      console.log = originalLog;

      setOutput(capturedOutput);
    } catch (error) {
      console.error("Error al ejecutar el código:", error);
    }
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
        <div className="w-full text-center mb-2 mt-3">
          <i className="fas fa-arrow-down text-4xl text-amber-500 cursor-pointer inline-block animate-bounce" />
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <LiveProvider code={code} noInline>
          <LiveEditor
            onChange={setCode}
            className="bg-gray-800 rounded-lg p-4"
          />
          <button
            className="bg-amber-500 rounded-lg px-3 py-1 text-xl font-bold my-5"
            onClick={handleRunCode}
          >
            Ejecutar
          </button>
          <div className="w-full flex gap-x-4">
            <div>
              <label className="text-amber-500 font-bold">Prueba</label>
              <textarea
                className="w-full bg-gray-800  p-2 mt-2 text-white"
                value={output}
                readOnly
                rows={Math.min(Math.max(countLines(output), 1), 20)}
                cols={50}
                style={{
                  maxHeight: "20em",
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#4A5568 #2D3748",
                }}
              />
            </div>
            <div>
              <label className="text-amber-500 font-bold">Correcto</label>
              <textarea
                className="w-full bg-gray-800 p-2 mt-2 text-white resize-none"
                value={
                  originalData
                    ? fusionAndCompare(originalData, answer)
                      ? output
                      : "No es correcto"
                    : ""
                }
                readOnly
                rows={Math.min(Math.max(countLines(output), 1), 20)}
                cols={50}
                style={{
                  maxHeight: "20em",
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#4A5568 #2D3748",
                }}
              />
            </div>
          </div>
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  );
};

export default CodeEditorLive;
