import styled from "styled-components";

export default styled.div`
    display: flex;
    width: 100%;
    .label-types {
        display: flex;
        flex-wrap: wrap;
        margin: 10px 0;
        width: 100%;
        &--box {
            align-items: center;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            display: flex;
            font-family: "Poppins", sans-serif;
            font-size: 12px;
            font-weight: 300;
            justify-content: space-between;
            margin-bottom: 5px;
            margin-right: 5px;
            padding: 7px 15px;
            padding: 10px;
            &.is_hidden {
                opacity: 0.5;
            }
            > span {
                &:last-child {
                    align-items: center;
                    background: rgba(214, 214, 214, 0.16);
                    border: 1px solid #dcdcdc;
                    border-radius: 50%;
                    color: #4a4a4a;
                    display: inline-flex;
                    height: 22px;
                    justify-content: center;
                    margin-left: 8px;
                    width: 22px;
                }
            }
        }
    }
`;
