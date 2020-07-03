import React from "react";
import PropTypes from "prop-types";

import IosArrowForward from "react-ionicons/lib/IosArrowForward";

// begin local import
import {
    CardListBoxStyle,
    CardListBoxLeftStyle,
    CardListBoxRightStyle,
} from "./index.style";
import CardListLoading from "./index.loading";
// end local import

// begin global import
import { Text } from "../typography";
import ThumbAvatar from "../thumb-avatar";
// end global import

// begin static import file
import defaultImage from "../../static/image/dummy-square.jpg";
// end static import file

const CardList = props => {
    const { radius, size, name, image } = props;

    return (
        <CardListBoxStyle>
            <CardListBoxLeftStyle>
                <ThumbAvatar
                    radius={radius}
                    size={size}
                    image={image}
                ></ThumbAvatar>
            </CardListBoxLeftStyle>
            <CardListBoxRightStyle>
                <Text.BodyTwo style={{ textTransform: "capitalize" }}>
                    {name}
                </Text.BodyTwo>
                <IosArrowForward fontSize="24px" color="#424242" />
            </CardListBoxRightStyle>
        </CardListBoxStyle>
    );
};

CardList.defaultProps = {
    image: defaultImage,
    name: "",
    size: "md",
    radius: "circle",
};

CardList.propTypes = {
    /**
       `type` for type of thumb avatar
       */
    radius: PropTypes.oneOf(["box", "circle", "rounded"]),
    /**
         `size` for size of thumb avatar
         */
    size: PropTypes.oneOf(["lg", "md", "sm"]),
    /**
      `name` for name of card
      */
    name: PropTypes.string,
    /**
      `image` for image of card
      */
    image: PropTypes.string,
};

CardList.Loading = CardListLoading;

export default CardList;
