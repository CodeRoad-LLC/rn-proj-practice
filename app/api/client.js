import {create} from 'apisauce';
import cache from '../utility/cache';


const apiClient = create({
    baseURL: 'http://192.168.1.34:9000/api'
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {

    const response = await get(url, params, axiosConfig);

    if(response.ok) {
        cache.store(url, response.data);
        console.log("stored successful");
        return response;
    }

    const data = await cache.get(url);
    console.log("try to get data from cache");
    //console.log(data);
    return data ? {ok: true, data} : response;
}


export default apiClient;