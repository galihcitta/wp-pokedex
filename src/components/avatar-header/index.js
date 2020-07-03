import React from "react";
import PropTypes from "prop-types";

// begin local import
import AvatarHeaderStyle from "./index.style";
import AvatarHeaderLoading from "./index.loading";
// end local import

// begin component global import
import Abilities from "../abilities";
// end component global import

const AvatarHeader = ({ image, name, abilities }) => {
    return (
        <AvatarHeaderStyle>
            <div className="avatar__header">
                <div className="avatar__header__left">
                    <div className="avatar__header top">
                        <div className="avatar__header__avatar">
                            <img src={image} alt={name} />
                        </div>
                        <span className="avatar__header__title">{name}</span>
                    </div>
                    <Abilities data={abilities}></Abilities>
                </div>
            </div>
        </AvatarHeaderStyle>
    );
};

AvatarHeader.Loading = AvatarHeaderLoading;

AvatarHeader.defaultProps = {
    image: "",
    name: "",
    abilities: [],
};

AvatarHeader.propTypes = {
    /**
       `name` for use name in components
       */
    name: PropTypes.string,
    /**
       `image` for use name in components
       */
    image: PropTypes.string,
    /**
       `abilities` for use name in components
       */
    abilities: PropTypes.array,
};

export default AvatarHeader;
