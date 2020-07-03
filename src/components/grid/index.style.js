import styled, { css } from "styled-components";

const createCSS = (type, column) => {
    let styles = "";
    for (let i = 1; i <= column; i += 1) {
        styles += `
         .col-${type}-${i} {
            box-sizing: border-box;
            min-height: 1px;
            position: relative;
            padding-left: 10px;
            padding-right: 10px;
            flex: 0 0 ${(100 / column) * i}%;
            max-width: ${(100 / column) * i}%;
            margin-left: 0%;
            margin-bottom:12px;
            right: auto;
            left: auto;
         }
       `;
    }

    return css`
        ${styles}
    `;
};
const GridStyle = styled.div`
    align-items: ${props => props.align};
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: ${props => `${props.justify}`};
    margin-left: -10px;
    margin-right: -10px;
    ${createCSS("lg", 12)};
    @media (max-width: 1024px) {
        ${createCSS("md", 12)};
    }
    @media (max-width: 760px) {
        ${createCSS("sm", 12)};
    }
    @media (max-width: 550px) {
        ${createCSS("xs", 12)};
    }
    ${({ marginBottom }) =>
        marginBottom &&
        `
         margin-bottom:15px;
  `}
`;
export default GridStyle;
