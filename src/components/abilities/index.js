import React from "react";
import PropTypes from "prop-types";

import AbilitiesLoading from "./index.loading";
import AbilitiesStyle from "./index.style";

const Abilities = props => {
    const { data } = props;
    return (
        <AbilitiesStyle>
            <div className="label-types">
                {data.length > 0 &&
                    data.map(item => {
                        return (
                            <div
                                test-id={"box-attribute"}
                                key={item.ability.name}
                                className={`label-types--box ${
                                    item.is_hidden ? "is_hidden" : ""
                                }`}
                            >
                                <span>{item.ability.name}</span>{" "}
                                <span>{item.slot}</span>
                            </div>
                        );
                    })}
            </div>
        </AbilitiesStyle>
    );
};

Abilities.Loading = AbilitiesLoading;

Abilities.defaultProps = {
    data: [],
};

Abilities.propTypes = {
    /**
       `data` for providde data abilities
       */
    data: PropTypes.array.isRequired,
};

export default Abilities;
