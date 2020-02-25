module.exports = function parseStringAsArray(arrayAsString) {
  // Função de logica separa na pasta utils
  // Aonde transforma uma string em array cortando após virgula
  return arrayAsString.split(",").map(tech => tech.trim());
};
