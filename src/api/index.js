import axios from "axios";
import localStorage from "../utils/local-storage";

const getAuthToken = options => {
    let result = {};
    if (!options.preFetch) {
        const dataUser = localStorage().get("auth");
        if (options.token && dataUser && dataUser.access_token) {
            result = {
                Authorization: "Bearer " + dataUser.access_token,
            };
        }
    }
    result["Content-Type"] = options.formData
        ? "multipart/form-data"
        : "application/json";
    return result;
};

const collectResponse = (response, options, status) => {
    if (!response) {
        return false;
    }

    return {
        response: response.data,
        type: response.status,
        message: options.message[response.status],
        key: options.key,
        group: options.group,
        ...status,
    };
};

const serviceApi = async options => {
    let axiosConfig = {
        baseURL: process.env.REACT_APP_BASE_URL,
        timeout: 10000,
    };

    axiosConfig.headers = getAuthToken(options);
    const instance = axios.create(axiosConfig);
    return await instance(options)
        .then(res => {
            return collectResponse(res, options, {
                success: true,
                error: false,
            });
        })
        .catch(err => {
            return collectResponse(err.response, options, {
                success: false,
                error: true,
            });
        });
};

export default serviceApi;
