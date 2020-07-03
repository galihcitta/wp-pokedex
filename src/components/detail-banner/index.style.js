import styled from "styled-components";

export default styled.div`
    background: linear-gradient(135deg, #50a1d8 0, #297eb9 100%);
    border-radius: 10px;
    box-shadow: 2px 8px 26px 0 #c2dbed;
    height: 100px;
    height: 120px;
    margin-bottom: 30px;
    position: relative;
    position: relative;
    width: 100%;
    width: 100%;
    .pokemon-size {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        width: 100%;
        &--content {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: 100%;
            justify-content: space-between;
            justify-content: space-evenly;
            position: relative;
            width: 100%;

            &:before {
                background: white;
                bottom: 0;
                content: "";
                height: 70px;
                left: 50%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 1px;
            }

            .weight {
            }
            .height {
            }
            &-box {
                align-items: center;
                display: flex;
                flex-direction: row;
                height: 100%;
                justify-content: space-between;
                padding: 20px;

                .title {
                    color: #fff;
                    font-size: 35px;
                    font-weight: 300;
                    > span {
                        font-size: 13px;
                        font-weight: bold;
                    }
                }
                .icon {
                    margin-right: 10px;
                    width: 30px;
                }
            }
        }
    }
`;
