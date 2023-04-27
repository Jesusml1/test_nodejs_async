/*
- Mediante la libreria: axios
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/
const axios = require("axios");

async function fnTest() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    try {
        const response = await axios.put(url, { id: 1 });
        return response;
    } catch (error) {
        console.error(error)
        throw new Error('server error');
    }
}

module.exports = fnTest;