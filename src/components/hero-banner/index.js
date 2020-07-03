import React from "react";
import PropTypes from "prop-types";

import HeroBannerStyles from "./index.style";

import WaveImage from "../../static/wave-image.svg";

const HeroBanner = props => {
    const { total, unique } = props;
    return (
        <HeroBannerStyles>
            <div className="hero-desc">
                <p test-id="total-pokemon">
                    <span>{total}</span> Pokemon
                </p>
                <p test-id="total-unique">
                    <span>{unique}</span> Unique Pokemon
                </p>
            </div>
            <img src={WaveImage} alt="" />
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
