import React from "react";
import PropTypes from "prop-types";

const RowCol = props => {
    const { children, md, xs, sm, lg, style, className } = props;
    return (
        <div
            style={style}
            className={`${className} 
                col-md-${md} 
                col-sm-${sm} 
                col-lg-${lg}
                col-xs-${xs}`}
        >
            {children}
        </div>
    );
};

RowCol.defaultProps = {
    children: false,
    className: "",
    style: {},
    md: 12,
    xs: 12,
    sm: 12,
    lg: 12,
};
RowCol.propTypes = {
    /**
      `children` for element children
      */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.bool,
    ]).isRequired,
    /**
      Use `md` for set middle size in grid system
      */
    md: PropTypes.number,
    /**
      Use `lg` for set large size in grid system
      */
    lg: PropTypes.number,
    /**
      Use `sm` for set small size in grid system
      */
    sm: PropTypes.number,
    /**
      Use `xs for set xs size in grid system
      */
    xs: PropTypes.number,
    /**
      `className` for set classname in grid system
      */
    className: PropTypes.string,
    /**
      `style` for set style in grid system
      */
    style: PropTypes.object,
};

export default RowCol;
