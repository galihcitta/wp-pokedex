import React from "react";
import PropTypes from "prop-types";

import StyleThumbAvatar from "./index.style";
import defaultImage from "../../static/image/dummy-square.jpg";

const ThumbAvatar = props => {
    const { image } = props;
    return (
        <StyleThumbAvatar {...props}>
            <img className="image__pokemon" src={image} alt="" />
        </StyleThumbAvatar>
    );
};

ThumbAvatar.defaultProps = {
    image: defaultImage,
    size: "md",
    radius: "circle",
};
ThumbAvatar.propTypes = {
    /**
      `image` for image of thumb avatar
      */
    image: PropTypes.string,
    /**
      `type` for type of thumb avatar
      */
    radius: PropTypes.oneOf(["box", "circle", "rounded"]),
    /**
      `size` for size of thumb avatar
      */
    size: PropTypes.oneOf(["lg", "md", "sm"]),
};

export default ThumbAvatar;
