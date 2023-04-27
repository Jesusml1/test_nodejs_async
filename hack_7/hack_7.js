/*
- Mediante la libreria: axios
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts/id
- Return: "data" 
- Contenido del return data:
{
  "userId": 3,
  "id": 30,
  "title": "a quo magni similique perferendis",
  "body": "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
} 
 NOTA: se envia el "id" por parámetro con valor 30
*/


const axios = require("axios");
async function fnTest(id) {
  const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error)
    throw new Error('server error');
  }
}

module.exports = fnTest;