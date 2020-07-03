import React from "react";
import DetailBannerStyles from "./index.style";

import Skeleton from "../skeleton";

const DetailBannerLoading = () => {
    return (
        <DetailBannerStyles>
            <div className="pokemon-size">
                <div className="pokemon-size--content">
                    <div className="pokemon-size--content-box">
                        <div className="icon">
                            <Skeleton width="30px" height={30}></Skeleton>{" "}
                        </div>
                        <div className="title" test-id="weight">
                            <Skeleton width="30px"></Skeleton>{" "}
                            <span>
                                <Skeleton width="20px"></Skeleton>
                            </span>
                        </div>
                    </div>
                    <div className="pokemon-size--content-box">
                        <div className="icon">
                            <Skeleton width="30px" height={30}></Skeleton>{" "}
                        </div>
                        <div className="title" test-id="height">
                            <Skeleton width="30px"></Skeleton>{" "}
                            <span>
                                <Skeleton width="20px"></Skeleton>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </DetailBannerStyles>
    );
};

export default DetailBannerLoading;
