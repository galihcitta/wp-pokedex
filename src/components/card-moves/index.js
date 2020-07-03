import React from "react";
import PropTypes from "prop-types";

import StyleCardMoves from "./index.style";
import CardMovesLoading from "./index.loading";
import waveImage from "../../static/wave-image.svg";

const CardMoves = props => {
    const { name, level, randomBackground, width, wave } = props;
    const randomColourOne = "#50a1d8".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
    });
    const randomColourTwo = "#000000".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
    });
    return (
        <StyleCardMoves
            width={width}
            randomBackground={randomBackground}
            style={{
                background: randomBackground
                    ? `linear-gradient(135deg, 
                        ${randomColourOne} 0, 
                        ${randomColourTwo} 100%)`
                    : "#fff",
            }}
        >
            {level && <span className="moves__level">LVL {level}</span>}
            <div className="moves__content">
                <div className="moves__label">MOVES NAME</div>
                <div className="moves__name">
                    <span>{name}</span>
                </div>
            </div>
            {wave && (
                <div className="moves__image">
                    <img src={waveImage} alt="" />
                </div>
            )}
        </StyleCardMoves>
    );
};

CardMoves.defaultProps = {
    name: "",
    level: false,
    randomBackground: false,
    width: 75,
    wave: false,
};
CardMoves.propTypes = {
    /**
      `name` for name of card
      */
    name: PropTypes.string,
    /**
      Use `level` for level of moves by default false
      */
    level: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
    ]),
    /**
      Use `randomBackground` for set randombackground is true or false
      */
    randomBackground: PropTypes.bool,
    /**
      Use `wave` for set wave bacground is true or false
      */
    wave: PropTypes.bool,
    /**
      Use `width` for set width of card components
      */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

CardMoves.Loading = CardMovesLoading;

export default CardMoves;
