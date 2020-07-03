import styled from "styled-components";

export default styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: ${props =>
        props.randomBackground ? "2px 2px 6px 0px #cecece" : "unset"};
    flex: 0 0 auto;
    font-size: 12px;
    margin-bottom: 5px;
    margin-right: 10px;
    padding: 15px 10px 15px 10px;
    position: relative;
    width: ${props => props.width || 70}%;

    &:first-child {
        margin-left: 10px;
    }

    .moves {
        &__content {
            display: block;
            width: 100%;
        }

        &__level {
            background: pink;
            border-radius: 10px;
            font-size: 11px;
            font-weight: bold;
            padding: 4px 10px;
            position: absolute;
            right: 10px;
            top: 10px;
        }
        &__name {
            display: block;
            font-size: 20px;
            font-weight: 300;
            width: 100%;
            > span {
                color: ${props =>
                    props.randomBackground ? "#ffffff" : "#4a4a4a"};
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
            }
        }
        &__label {
            color: ${props => (props.randomBackground ? "#ffffff" : "#6f6f6f")};
            display: flex;
            font-size: 11px;
            font-weight: bold;
            margin-bottom: 7px;
        }

        &__image {
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            width: 100%;
            > img {
                display: block;
                width: 100%;
            }
        }
    }
`;
