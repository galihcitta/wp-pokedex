import PropTypes from "prop-types";

export const defaultPropsType = {
    renderLoading: () => {},
    renderFailed: () => {},
    renderSuccess: () => {},
    renderBeforeReady: () => {},
    service: {
        serviceFunction: () => {},
        params: {},
        data: {},
        isReady: false,
        group: "",
        key: "",
    },
};

export const interFace = {
    renderLoading: PropTypes.func.isRequired,
    renderFailed: PropTypes.func.isRequired,
    renderSuccess: PropTypes.func.isRequired,
    renderBeforeReady: PropTypes.func.isRequired,
    service: PropTypes.shape({
        serviceFunction: PropTypes.func.isRequired,
        params: PropTypes.object,
        data: PropTypes.object,
        isReady: PropTypes.bool,
        group: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
    }).isRequired,
};
