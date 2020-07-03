import { useState, useEffect } from "react";
import { useStore } from "../reducer";

const useDataFetching = ({
    serviceFunction = () => {},
    serviceClear = () => {},
    isReady = false,
    params,
    slug,
    data,
    group,
    key,
}) => {
    const { dispatch, state } = useStore();
    const [isLoading, setLoading] = useState(true);
    const [errorResponse, setError] = useState(false);
    const [messageResponse, setMessageResponse] = useState();
    const [resultsResponse, setResult] = useState(false);
    useEffect(() => {
        serviceFunction({ dispatch, params, slug, data });
        return () => {
            serviceClear({ dispatch });
            setResult(false);
        };
    }, [dispatch, serviceFunction, isReady, params, data, slug]);

    useEffect(() => {
        if (!resultsResponse) {
            conditionResponseService(state[group][key], isLoading);
        }
    }, [state, group, key, isLoading]);

    const conditionResponseService = (response, isLoading) => {
        if (response && isLoading) {
            const { isSuccess, isError, data, message } = response;

            if (isSuccess) {
                setResult(data);
            }
            setMessageResponse(message);
            setError(isError);
            setLoading(false);
        }
    };

    return {
        isReady,
        errorResponse,
        isLoading,
        resultsResponse,
        messageResponse,
    };
};

export default useDataFetching;
