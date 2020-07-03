import React from "react";
import PropTypes from "prop-types";

import GridCol from "./index.col";
import GridStyle from "./index.style";

const Grid = ({
    children,
    align = "normal",
    justify = "flex-start",
    className = "",
    withPaddingBottom = false,
    marginBottom = false,
}) => {
    return (
        <GridStyle
            withPaddingBottom={withPaddingBottom}
            marginBottom={marginBottom}
            className={className}
            align={align}
            justify={justify}
        >
            {children}
        </GridStyle>
    );
};

Grid.Col = GridCol;

Grid.defaultProps = {
    align: "normal",
    justify: "flex-start",
    withPaddingBottom: false,
    marginBottom: false,
    className: false,
};
Grid.propTypes = {
    /**
      `children` for element children
      */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.bool,
    ]).isRequired,
    /**
      Use `align` for set align-items in grid system
      */
    align: PropTypes.oneOf([
        "stretch",
        "normal",
        "center",
        "initial",
        "baseline",
        "inherit",
    ]),
    /**
      Use `justify` for set justify-content in grid system
      */
    justify: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "inherit",
        "initial",
    ]),
    /**
      `withPaddingBottom` for set withPaddingBottom in grid system
      */
    withPaddingBottom: PropTypes.bool,
    /**
      `marginBottom` for set marginBottom in grid system
      */
    marginBottom: PropTypes.bool,
    /**
      `className` for set classname in grid system
      */
    className: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default Grid;
