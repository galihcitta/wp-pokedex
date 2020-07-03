import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const ldsRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const StyleLoading = styled.div`
    .loading-background {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.38);
        z-index: 9999;
    }
    .loading-background-box {
        position: absolute;
        top: 30%;
    }
`;

const StyleSpinner = styled.div`
    .lds-ring {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        margin: 6px;
        border: 4px solid ${props => props.theme.color[props.color]};
        border-radius: 50%;
        animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.theme.color[props.color]} transparent
            transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
`;

StyleSpinner.defaultProps = {
    color: "aquamarine",
};

StyleSpinner.propTypes = {
    color: PropTypes.oneOf([
        "default",
        "pumpkin-orange",
        "bluegreen",
        "white",
        "aquamarine",
        "transparent",
        "scarlet",
        "ice-blue",
        "pale-peach",
    ]),
};

export { StyleSpinner };
