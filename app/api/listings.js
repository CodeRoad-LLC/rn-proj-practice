import client from './client';

const endpoint = '/listings';

const getListings = () => {
    return client.get(endpoint);
};

export default {
    getListings,

};