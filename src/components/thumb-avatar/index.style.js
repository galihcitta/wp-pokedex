import styled from "styled-components";
import PropTypes from "prop-types";

const StyleThumbAvatar = styled.div`
    align-items: center;
    border-radius: ${props => props.theme.thumbAvatar.radius[props.radius]};
    display: flex;
    height: ${props => props.theme.thumbAvatar.size[props.size]};
    justify-content: center;
    width: ${props => props.theme.thumbAvatar.size[props.size]};
    img {
        border-radius: ${props => props.theme.thumbAvatar.radius[props.radius]};
    }
`;

StyleThumbAvatar.defaultProps = {
    size: "md",
    radius: "circle",
};

StyleThumbAvatar.propTypes = {
    /**
      `type` for type of thumb avatar
      */
    radius: PropTypes.oneOf(["box", "circle", "rounded"]),
    /**
      `size` for size of thumb avatar
      */
    size: PropTypes.oneOf(["lg", "md", "sm"]),
};

export default StyleThumbAvatar;
