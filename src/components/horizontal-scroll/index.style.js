import styled from "styled-components";

export default styled.div`
    .horizontal-scroll {
        display: flex;
        margin: 12px 0;
        width: 100%;
        &--list {
            -webkit-overflow-scrolling: touch;
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding: 15px 0;
            width: 450px;
            ${({ noPaddingTop }) =>
                noPaddingTop &&
                `
                    padding-top: 0;
            `}
            @media (max-width: 450px) {
                width: 100%;
            }
        }
    }
`;
