/*
- Mediante la libreria: axios
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "data" 
- Contenido del return data:
{
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
} 
*/

const axios = require("axios");

async function fnTest() {
  const url = 'https://jsonplaceholder.typicode.com/posts/2';
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error)
    throw new Error('server error');
  }
}


module.exports = fnTest;