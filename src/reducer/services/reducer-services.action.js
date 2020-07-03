import service from "../../services";
import localStorage from "../../utils/local-storage";

const testing = (dispatch, value) => {
    dispatch(value);
};
const login = (dispatch, value) => {
    localStorage().save("auth", value.data);
    dispatch(value);
};

const clearData = (dispatch, value) => {
    dispatch(value);
};
const productPurchase = (dispatch, value) => {
    dispatch(value);
};

const fetch = async (dispatch, value) => {
    const result = await service(value);
    if (result) {
        dispatch({
            reducer: value.reducer,
            group: value.group,
            key: value.key,
            data: result.response,
            message: result.message,
            type: result.type,
            isError: result.error,
            isSuccess: result.success,
        });
    }
};

const servicesAction = dispatch => ({
    reduxFetch: value => {
        fetch(dispatch, value);
    },
    reduxClear: value => {
        clearData(dispatch, value);
    },
    reduxTesting: value => {
        testing(dispatch, value);
    },
    reduxLogin: value => {
        login(dispatch, value);
    },
    reduxProductPurchase: value => {
        productPurchase(dispatch, value);
    },
});

export default servicesAction;
