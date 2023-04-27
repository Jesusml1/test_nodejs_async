/*
- Mediante la libreria: axios
- Hacer una petición de tipo: PATCH
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/

const axios = require("axios");

async function fnTest() {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const props = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
  try {
    const response = await axios.patch(url, { id: 1, ...props });
    return response;
  } catch (error) {
    console.error(error)
    throw new Error('server error');
  }
}

module.exports = fnTest;