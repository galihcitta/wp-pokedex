import React from "react";
import PropTypes from "prop-types";

import FilterLoading from "./index.loading";
import FitlerStyle from "./index.style";

const Filter = ({
    name = "",
    width = 50,
    onGetValue = () => {},
    activeValue = "",
}) => {
    return (
        <FitlerStyle
            isActive={activeValue === name}
            onClick={e => onGetValue(e, name)}
            width={width}
        >
            <div className="filter__content">
                <div className="filter__title">
                    <span>{name}</span>
                </div>
            </div>
        </FitlerStyle>
    );
};

Filter.defaultProps = {
    activeValue: "",
    name: "",
    width: 50,
};
Filter.propTypes = {
    /**
      `name` for name of filter and value for filter
      */
    name: PropTypes.string,
    /**
      `activeValue` for activeValue get current filter active
      */
    activeValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
      `width` for set width filter components 
      */
    width: PropTypes.number,
};

Filter.Loading = FilterLoading;

export default Filter;
