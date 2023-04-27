/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/
const fetch = require('cross-fetch');

async function fnTest() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const response = await fetch(url, {method: 'POST', data: {id: 101}});
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = fnTest;