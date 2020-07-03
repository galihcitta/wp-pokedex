import styled from "styled-components";

export default styled.div`
    background: #ffff;
    border-radius: 10px;
    display: flex;
    margin: 15px 0;
    width: 100%;

    .stats {
        &__container {
            display: flex;
            width: 100%;
        }
        &__list {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        &__list-row {
            align-items: center;
            border-bottom: 2px solid #f7f7f7;
            display: flex;
            justify-content: space-between;
            padding: 15px;
            width: 100%;
        }
        &__list-title {
            align-items: center;
            display: flex;
            flex-direction: column;
            width: 30px;
            > span {
                color: #616161;
                font-size: 12px;
                font-weight: bold;
                margin-top: 10px;
            }
        }
        &__list-icon {
            display: flex;
            width: 100%;
            > img {
                display: flex;
                width: 100%;
            }
        }
        &__list-point {
            display: inline-flex;
            justify-content: flex-end;
            width: 30px;
        }
        &__list-graph {
            background: #f7f7f7;
            border: 1px solid #f7f7f7;
            border-radius: 10px;
            display: flex;
            height: 12px;
            margin-left: 20px;
            position: relative;
            width: calc(100% - 100px);
            &__percent {
                background: red;
                border-radius: 10px;
                bottom: 0;
                left: 0;
                position: absolute;
                top: 0;
                transition: width 1s ease-in;
                width: 0;
                &.speed {
                    background: #2196f3;
                }
                &.special-defense {
                    background: #cddc39;
                }
                &.special-attack {
                    background: #ffeb3b;
                }
                &.defense {
                    background: #4caf50;
                }
                &.attack {
                    background: #f44336;
                }
                &.hp {
                    background: #00bcd4;
                }
            }
        }
    }
`;
