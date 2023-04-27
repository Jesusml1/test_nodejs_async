const axios = require("axios");

/*
- Mediante la libreria: axios
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/users/1
- Return: "response" global de la petición 
*/

async function fnTest() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        throw new Error('Data could not be fetched');
    }
}

module.exports = fnTest;