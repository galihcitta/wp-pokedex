import React from "react";
import PropTypes from "prop-types";

import HeroBannerStyles from "./index.style";



const HeroBanner = props => {
    const { total, unique } = props;
    return (
        <HeroBannerStyles>
            <div className="hero-desc">
               
            </div>
        </HeroBannerStyles>
    );
};

HeroBanner.defaultProps = {
    total: 0,
    unique: 0,
};

HeroBanner.propTypes = {
    /**
      `total` for total pokemon you have
      */
    total: PropTypes.number.isRequired,
    /**
      `unique` for total unique pokemon you have
      */
    unique: PropTypes.number.isRequired,
};
export default HeroBanner;
