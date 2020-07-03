import styled from "styled-components";
// import PropTypes from 'prop-types';
import color from "../tokens/color";

const HeadingText = {
    One: styled.h1`
        color: ${props => color[props.color]};
        font-family: "Rubik", sans-serif;
        font-size: 60px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "bold"};
        letter-spacing: normal;
        line-height: normal;
    `,
    Two: styled.h2`
        color: ${props => color[props.color]};
        font-family: "Rubik", sans-serif;
        font-size: 45px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || 500};
        letter-spacing: normal;
        line-height: normal;
        text-align: ${props => props.align || "left"};
    `,
    Three: styled.h3`
        color: ${props => color[props.color]};
        font-family: "Rubik", sans-serif;
        font-size: 48.8px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: normal;
        line-height: normal;
        text-align: ${props => props.align || "left"};
    `,
    Four: styled.h4`
        color: ${props => color[props.color]};
        font-family: "Rubik", sans-serif;
        font-size: 34.5px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 0.25px;
        line-height: normal;
        text-align: ${props => props.align || "left"};
    `,
    Five: styled.h5`
        color: ${props => color[props.color]};
        font-family: "Muli", sans-serif;
        font-size: 24.4px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: normal;
        line-height: normal;
        text-align: ${props => props.align || "left"};
    `,
    Six: styled.h6`
        color: ${props => color[props.color]};
        font-family: "Muli", sans-serif;
        font-size: 20.3px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || 500};
        letter-spacing: 0.25px;
        line-height: normal;
        text-align: ${props => props.align || "left"};
    `,
};

const Text = {
    BodyOne: styled.p`
        color: ${props => color[props.color]};
        font-family: "Muli", sans-serif;
        font-size: 16.3px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 0.5px;
        line-height: 1.72;
        text-align: ${props => props.align || "left"};
    `,
    BodyTwo: styled.p`
        color: ${props => color[props.color]};
        font-family: "Muli", sans-serif;
        font-size: 14.2px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 0.25px;
        line-height: 1.41;
        text-align: ${props => props.align || "left"};
    `,
    SubtitleOne: styled.span`
        color: ${props => color[props.color]};
        display: ${props => (props.block ? "block" : "inline-block")};
        font-family: "Muli", sans-serif;
        font-size: 16.3px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 0.15px;
        line-height: 1.48;
        text-align: ${props => props.align || "left"};
    `,
    SubtitleTwo: styled.span`
        color: ${props => color[props.color]};
        display: ${props => (props.block ? "block" : "inline-block")};
        font-family: "Muli", sans-serif;
        font-size: 14.2px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 0.2px;
        line-height: 1.69;
        text-align: ${props => props.align || "left"};
    `,
    Overline: styled.h5`
        color: ${props => color[props.color]};
        font-family: "Muli", sans-serif;
        font-size: 12.2px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 2px;
        line-height: 1.31;
        text-align: ${props => props.align || "left"};
    `,
    Caption: styled.span`
        color: ${props => color[props.color]};
        display: ${props => (props.block ? "block" : "inline-block")};
        font-family: "Muli", sans-serif;
        font-size: 12.2px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 0.4px;
        line-height: 1.31;
        text-align: ${props => props.align || "left"};
    `,
};

export { Text, HeadingText };
