import React from "react";
import CodeEditorLive from "../components/CodeEditorLive";

const Home = () => {
  const test = `const arrayData = (data) =>{
    return data
  }

  console.log(arrayData(data))
  `;

  const test2 = `const write = (data) =>{
    //Pon aqui el codigo que falta
  }

  write(data)
  `;

  const test3 = `const multiplica = (data) =>{
    //Pon aqui el codigo que falta
  }

  multiplica(data)
  `;

  const test4 = `const objeto = {
    clave1: 'valor1',
    clave2: 'valor2',
    clave3: 'valor3'
  };
  
  console.log("Imprime el objeto")`;

  return (
    <div className="w-full  flex flex-col items-center  px-20 gap-x-20 mt-20">

      <CodeEditorLive
        level={1}
        points={100}
        title={`Imprimir objeto`}
        description={`Solo debes de imprimir el objeto`}
        answer={{
          "clave1": "valor1",
          "clave2": "valor2",
          "clave3": "valor3"
        }}
        initialConfig={test4}
        values={{
          "clave1": "valor1",
          "clave2": "valor2",
          "clave3": "valor3"
        }}
      />
      <CodeEditorLive
        level={1}
        points={100}
        title={`Reversa el array`}
        description={`Recibe un array de caracteres, su tareas es sacar por la consola este array pero en sentido contrario`}
        answer={[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3]}
        initialConfig={test}
        values={[-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
      />
      <CodeEditorLive
        level={1}
        points={100}
        title={`Solo debes escribir`}
        description={`En este solo debes de hacer un console.log, y sacar la data que viene d ela funcion`}
        answer={"Lo lograste!"}
        initialConfig={test2}
        values={"Lo lograste!"}
      />
      <CodeEditorLive
        level={1}
        points={100}
        title={`Solo debes de saber multiplicar`}
        description={`data es un objeto que tiene dos propiedades, una llamada array1 y la otra llmada numero
        ,tu tarea es multiplicar el numero por cada uno de los elementos del array y sacar el resultado por consola en un array,
        es decir cada posicion multiplicada por el numero`}
        answer={[5, 10, 15, 20, 25, 30]}
        initialConfig={test3}
        values={{ array1: [1, 2, 3, 4, 5, 6], numero: 5 }}
      />
    </div>
  );
};

export default Home;
