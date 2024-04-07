
// Esta funcion se encarga de comparar el codigo del usuario con la respuesta que está en el backend
export function fusionAndCompare(value1, value2) {
  if (typeof value1 !== typeof value2) {
    return false;
  }

  if (typeof value1 !== "object") {
    return value1 === value2;
  }

  if (Array.isArray(value1)) {
    if (value1.length !== value2.length) {
      return false;
    }
    for (let i = 0; i < value1.length; i++) {
      if (!fusionAndCompare(value1[i], value2[i])) {
        return false;
      }
    }
    return true;
  }

  if (typeof value1 === "object" && !Array.isArray(value1)) {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (!fusionAndCompare(value1[key], value2[key])) {
        return false;
      }
    }
    return true;
  }
}


// Esta funcion cuenta las lineas utilizadas para la consola de los resultados
export function countLines(text) {
  return text.split("\n").length;
}


//Esta funcion transforma los tipos de los datos que llegan del servidor
export const transformData = (value) => {
  if (value.startsWith('[')) {
    const newValue = JSON.parse(value)
    return newValue
  }
  else {
    if (!isNaN(value) && !isNaN(parseInt(value))) {
      return parseInt(value);
    }
    if (!isNaN(value) && !isNaN(parseFloat(value))) {
      return parseFloat(value);
    }
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    return value;
  }
}
