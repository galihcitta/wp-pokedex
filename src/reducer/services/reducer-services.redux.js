import types from "./reducer-services.type";
import initialState from "./reducer-services.state";

export const servicesState = initialState;

const resultReduxFn = (state, action) => {
    return {
        ...state,
        [action.group]: {
            ...state[action.group],
            [action.key]: { ...action },
        },
    };
};

export const servicesRedux = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SUCCESS:
            return resultReduxFn(state, action);
        case types.CREATED:
            return resultReduxFn(state, action);
        case types.BAD_REQUEST:
            return resultReduxFn(state, action);
        case types.UNAUTHORIZED:
            return resultReduxFn(state, action);
        case types.NO_CONTENT:
            return resultReduxFn(state, action);
        case types.NOT_FOUND:
            return resultReduxFn(state, action);
        case types.CONFLICT:
            return resultReduxFn(state, action);
        case types.INTERNAL_SERVICE_ERROR:
            return resultReduxFn(state, action);

        case types.CLEAR:
            return {
                ...state,
                [action.group]: {
                    ...state[action.group],
                    [action.key]: action.defaultData,
                },
            };
        default:
            return state;
    }
};
