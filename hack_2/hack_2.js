/*
- Mediante la libreria: axios
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "response" global de la petición 
*/
const axios = require("axios");

async function fnTest() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await axios.post(url, { id: 101 });
        return response;
    } catch (error) {
        console.error(error)
        throw new Error('server error');
    }
}

module.exports = fnTest;