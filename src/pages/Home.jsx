import React, { useState, useEffect } from "react";
import CodeEditorLive from "../components/CodeEditorLive";
import axios from "axios";
import { transformData } from "../helpers";

const Home = () => {
  const [challengers, setChallengers] = useState([]);
  const [inputValues, setInputValues] = useState({
    lavel: "",
    points: "",
    title: "",
    description: "",
    answer: "",
    initialConfig: "",
    values: ""
  })

  const createChallenge = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/challengers/create-challenger", inputValues);
      setChallengers([...challengers, response.data]);
    } catch (error) {
      console.error(error);
    }
  }
  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setInputValues({
      ...inputValues,
      [name]: value
    });
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/challengers/get-challengers");
        setChallengers(response.data);
      } catch (error) {
        console.error(error);
      }
    })()
  }, [])

  return (
    <div className="w-full  flex flex-col items-center  px-20 gap-x-20 mt-20">

      <input
        type="text"
        name="lavel"
        value={inputValues.lavel}
        onChange={handleInputChange}
        placeholder="Nivel"
      />
      <input type="text" name="points" value={inputValues.points} onChange={handleInputChange} placeholder="Puntos" />
      <input type="text" name="title" value={inputValues.title} onChange={handleInputChange} placeholder="Titulo" />
      <input type="text" name="description" value={inputValues.description} onChange={handleInputChange} placeholder="Descripcion" />
      <textarea name="answer" rows={10} value={inputValues.answer} onChange={handleInputChange} placeholder="Respuesta" />
      <textarea name="values" rows={10} value={inputValues.values} onChange={handleInputChange} placeholder="Valores" />
      <textarea value={inputValues.initialConfig} name="initialConfig" className="w-[300px]" rows={5} placeholder="Aqui se pone el codigo que se sube " onChange={handleInputChange} />
      <button className="bg-amber-500 rounded-lg px-3 py-1 text-xl font-bold my-5" onClick={createChallenge}>Subir</button>


      {challengers.reverse().map((challenge) => (
        <CodeEditorLive
          key={challenge._id}
          level={challenge.lavel}
          points={challenge.points}
          title={challenge.title}
          description={challenge.description}
          answer={transformData(challenge.answer)}
          initialConfig={challenge.initialConfig}
          values={transformData(challenge.values)}
        />
      ))}
    </div>
  );
};

export default Home;
