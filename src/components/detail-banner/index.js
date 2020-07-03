import React from "react";
import DetailBannerStyles from "./index.style";
import DetailBannerLoading from "./index.loading";
import type from "./index.type";

import heightWhite from "../../static/icons/ic-height-white.png";
import weightWhite from "../../static/icons/ic-weight-white.png";

const DetailBanner = props => {
    const { height, weight } = props;
    return (
        <DetailBannerStyles>
            <div className="pokemon-size">
                <div className="pokemon-size--content">
                    <div className="pokemon-size--content-box">
                        <div className="icon">
                            <img src={weightWhite} alt="" />
                        </div>
                        <div className="title" test-id="weight">
                            {weight / 10} <span>Kg</span>
                        </div>
                    </div>
                    <div className="pokemon-size--content-box">
                        <div className="icon">
                            <img src={heightWhite} alt="" />
                        </div>
                        <div className="title" test-id="height">
                            {height / 10} <span>m</span>
                        </div>
                    </div>
                </div>
            </div>
        </DetailBannerStyles>
    );
};

DetailBanner.Loading = DetailBannerLoading;
DetailBanner.propTypes = type;

export default DetailBanner;
