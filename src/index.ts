import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
    // Non long polling example
    // await callWithStateSearch('idaho', 'DLA LLC');

    // Long polling example
    // await callWithStateSearch('delaware', 'SUPERIOR BUILDING SERVICES, INC.');

    // Try with retry id
    await callWithRetryId('69aa1aac-0b1d-4b3b-8ec8-017dba7a8375');

})();

// Call API with state search
async function callWithStateSearch(state: string, businessName: string) {
    const url = `https://apigateway.cobaltintelligence.com/search?searchQuery=${businessName}&state=${state}`

    const axiosResponse = await axios.get(url, {
        headers: {
            'x-api-key': process.env.cobaltIntApiKey
        }
    });

    console.log('Axios response', axiosResponse.data);
}


// Call with retry id
// Retry id is used for long polling
async function callWithRetryId(retryId: string) {
    const url = `https://apigateway.cobaltintelligence.com/search?retryId=${retryId}`

    const axiosResponse = await axios.get(url, {
        headers: {
            'x-api-key': process.env.cobaltIntApiKey
        }
    });

    console.log('Axios response', axiosResponse.data);

}