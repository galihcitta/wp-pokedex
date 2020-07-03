import React from "react";
import PropTypes from "prop-types";

import { StyleSpinner } from "./index.style";

const Spinner = ({ color = "aquamarine" }) => {
    return (
        <StyleSpinner color={color}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </StyleSpinner>
    );
};

Spinner.defaultProps = {
    color: "aquamarine",
};
Spinner.propTypes = {
    /**
      `color` for color for loading spinner
      */
    color: PropTypes.oneOf([
        "aquamarine",
        "ice-blue",
        "turquoise-2",
        "dark-grey",
        "teal-1",
        "teal-2",
        "seafoam-blue",
        "deep-teal",
        "bluegreen",
        "off-white",
        "turquoise-1",
        "pale-peach",
        "robin-s-egg-blue",
        "wheat",
        "mango",
        "butterscotch",
        "tangerine-1",
        "tangerine-2",
        "pumpkin-orange",
        "deep-orange",
        "black-38",
        "black-87",
        "black-54",
        "scarlet",
        "white",
    ]),
};

export default Spinner;
