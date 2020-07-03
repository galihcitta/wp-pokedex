import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const pulse = keyframes`
    0% {
        background-color: rgba(241, 241, 241, 0.78);
    }
    50% {
        background-color: rgba(241, 241, 241, 0.3);
    }
    100% {
        background-color: rgba(241, 241, 241, 0.78);
    }
`;

const SkeletonStyle = styled.div`
    animation: ${pulse} 1s infinite ease-in-out;
    border-radius: ${props => (props.circle ? "50%" : 0)};
    height: ${props => props.height}px;
    margin: 10px 0;
    width: ${props => props.width};
`;

SkeletonStyle.defaultProps = {
    height: 10,
    width: "100%",
    circle: false,
};
SkeletonStyle.propTypes = {
    /**
      `height` for height skeleton
      */
    height: PropTypes.number,
    /**
      `width` for set up width skeleton
      */
    width: PropTypes.string,
    /**
      `circle` for set up if skeleton with radius `50%`
      */
    circle: PropTypes.bool,
};

export default SkeletonStyle;
