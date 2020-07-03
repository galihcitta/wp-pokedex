import React, { createContext, useReducer, useContext } from "react";
import PropTypes from "prop-types";

// import reducer function
import { servicesState, servicesRedux } from "./services";

// combine initial states
const combineState = {
    ...servicesState,
};

// combine reducer
const combineReducer = {
    service: (state, actions) => servicesRedux(state, actions),
};

// reducer configure
const reducer = (state, actions) => {
    const update = combineReducer[actions.reducer](state, actions);
    return { ...state, ...update };
};

const StoreContext = createContext(combineState);

// store data use context
const useStore = () => {
    const { state, dispatch } = useContext(StoreContext);
    return { state, dispatch };
};

// store data in provider
const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, combineState);
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

StoreProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export { StoreProvider, useStore };
