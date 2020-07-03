import React from "react";
import PropTypes from "prop-types";

import SkeletonStyle from "./index.style";

const Skeleton = ({
    height = 10,
    width = "100%",
    circle = false,
    style = {},
}) => {
    return (
        <SkeletonStyle
            style={style}
            circle={circle}
            width={width}
            height={height}
        ></SkeletonStyle>
    );
};

Skeleton.defaultProps = {
    height: 10,
    width: "100%",
    circle: false,
    style: {},
};
Skeleton.propTypes = {
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
    /**
      `style` for set up style skeleton
      */
    style: PropTypes.object,
};

export default Skeleton;
