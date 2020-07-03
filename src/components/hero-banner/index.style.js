import styled from "styled-components";

const HeroBannerStyles = styled.div`
    background: linear-gradient(135deg, #50a1d8 0, #297eb9 100%);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 2px 8px 26px 0 #c2dbed;
    position: relative;
    width: 100%;
    img {
        display: block;
        margin-top: 60px;
        width: 100%;
    }
    .hero-desc {
        align-items: center;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        left: 0;
        padding: 20px;
        position: absolute;
        right: 0;
        top: 0;
        &--total {
        }
        &--right {
            width: 50%;
        }
        p {
            color: #fff;
            display: flex;
            flex-direction: column;
            font-weight: light;
            margin: 0;
            text-align: center;
            span {
                font-size: 40px;
                font-weight: light;
            }
        }
    }

    .hero-desc-circle {
        background: #fff;
        background-image: linear-gradient(
                90deg,
                transparent 50%,
                rgb(162, 236, 251) 50%
            ),
            linear-gradient(90deg, rgb(162, 236, 251) 50%, transparent 50%);
        border-radius: 50%;
        height: 70px;
        position: relative;
        width: 70px;
    }
`;

export default HeroBannerStyles;
