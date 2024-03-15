export function fusionAndCompare(value1, value2) {
  // Verificar si los tipos de datos son iguales
  if (typeof value1 !== typeof value2) {
    return false;
  }

  // Caso: Variables primitivas
  if (typeof value1 !== "object") {
    return value1 === value2;
  }

  // Caso: Arrays
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

  // Caso: Objetos
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

export function countLines(text) {
  return text.split("\n").length;
}
