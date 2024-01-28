import fetch from 'node-fetch';

/**
 * Async function to perform a GET request
 * @param url target address to send the request
 * @returns {Promise<unknown>}  //TODO add explanation of returns
 */
async function getRequest(url) {
    try {
        // Send async GET request
        const response = await fetch(url);
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the JSON response adn return it
        return await response.json();
    } catch (error) {
        // Handle any errors
        console.error(`Error of GET request: ${url}`, error); //TODO add logger to log normally instead of console
        // Rethrow the error for further handling if necessary
        throw error;
    }
}

/**
 * Async function to perform a POST request
 * @param url - target address to send the request
 * @param payload - request body (JSON)
 * @returns {Promise<void>} //TODO add explanation of returns
 */
async function postRequest(url, payload) {
    try {
        // Set up the options for the request
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        };
        // Send async POST request
        const response = await fetch(url, options);
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the JSON response and return it
        return await response.json();
    } catch (error) {
        // Handle any errors
        console.error(`Error of POST request: ${url}`, error); //TODO add logger to log normally instead of console
        throw error; // Rethrow the error for further handling if necessary
    }
}

export {getRequest, postRequest};
