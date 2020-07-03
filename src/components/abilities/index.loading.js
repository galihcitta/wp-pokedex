import React from "react";

import Skeleton from "../skeleton";

import AbilitiesStyle from "./index.style";

const AbilitiesLoading = () => {
    return (
        <AbilitiesStyle>
            <div className="label-types">
                <div
                    test-id={"box-attribute"}
                    className={`label-types--box is_hidden`}
                >
                    <span>
                        <Skeleton width="120px"></Skeleton>
                    </span>
                    <span>
                        <Skeleton width="40"></Skeleton>
                    </span>
                </div>
                <div test-id={"box-attribute"} className={`label-types--box`}>
                    <span>
                        <Skeleton width="150px"></Skeleton>
                    </span>
                    <span>
                        <Skeleton width="40"></Skeleton>
                    </span>
                </div>
            </div>
        </AbilitiesStyle>
    );
};

export default AbilitiesLoading;
