import React from "react";
import PropTypes from "prop-types";

import FitlerStyle from "./index.style";

import Skeleton from "../../components/skeleton";

const FilterLoading = ({ width = 50 }) => {
    return (
        <FitlerStyle width={width}>
            <div className="filter__content">
                <div className="filter__title">
                    <span>
                        <Skeleton></Skeleton>
                    </span>
                </div>
            </div>
        </FitlerStyle>
    );
};

FilterLoading.defaultProps = {
    width: 50,
};

FilterLoading.propTypes = {
    width: PropTypes.number,
};

export default FilterLoading;
