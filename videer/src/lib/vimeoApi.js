import axios from 'axios';

const ApiUrl = 'https://api.vimeo.com';
let accessToken = 'NzQwYzcyNGRiMDk0YTEzY2Q1ZGM2MDU2YzNkMWZjNTVmZWQwOGRiYjpJZ1E0a3V3dUptNzRMZ2dOZFlkaFVZS1BsRVRHSEoxamQrL1k3YzY5Wm5YZUNFZVpOTmRxbGxudkVZcld3WWFmVEc1aUdlcjhSOXlGaWJ5U2tpZXNWQzR0eklJL0xRZlhDUFI4OVRqdEFab2VsQkRySnZWUU5mZkVranhJaFNPdw==';

const client = axios.create({
    baseURL: ApiUrl,
    responseType: 'json'
});

client.defaults.headers.common['Authorization'] = 'basic ' + accessToken;

/**
 * Request Wrapper with default success/error actions
 */
const request = function(options) {
    const onSuccess = function(response) {
        console.debug('Request Successful!', response);
        return response.data;
    };

    const onError = function(error) {
        console.error('Request Failed:', error.config);

        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);

        }
        else {
            // Something else happened while setting up the request
            // triggered the error
            console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    };

    return client(options)
        .then(onSuccess)
        .catch(onError);
};

export default request;
