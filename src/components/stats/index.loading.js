import React from "react";
import Style from "./index.style";

import Skeleton from "../skeleton";

const StatsLoading = () => {
    return (
        <Style>
            <div className="stats__container">
                <div className="stats__list">
                    <div className="stats__list-row">
                        <div className="stats__list-title">
                            <div className="stats__list-icon">
                                <Skeleton width="100%" height={30}></Skeleton>
                            </div>
                            <span>
                                <Skeleton width="30px" height={10}></Skeleton>
                            </span>
                        </div>
                        <div className="stats__list-graph"></div>
                        <div className="stats__list-point">
                            <Skeleton width="20px" height={10}></Skeleton>
                        </div>
                    </div>
                    <div className="stats__list-row">
                        <div className="stats__list-title">
                            <div className="stats__list-icon">
                                <Skeleton width="100%" height={30}></Skeleton>
                            </div>
                            <span>
                                <Skeleton width="30px" height={10}></Skeleton>
                            </span>
                        </div>
                        <div className="stats__list-graph"></div>
                        <div className="stats__list-point">
                            <Skeleton width="20px" height={10}></Skeleton>
                        </div>
                    </div>
                    <div className="stats__list-row">
                        <div className="stats__list-title">
                            <div className="stats__list-icon">
                                <Skeleton width="100%" height={30}></Skeleton>
                            </div>
                            <span>
                                <Skeleton width="30px" height={10}></Skeleton>
                            </span>
                        </div>
                        <div className="stats__list-graph"></div>
                        <div className="stats__list-point">
                            <Skeleton width="20px" height={10}></Skeleton>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    );
};

export default StatsLoading;
