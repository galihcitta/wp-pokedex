import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
    background: #fff;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% 0.1rem;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    font-weight: normal;
    left: 0;
    padding: 7px 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 777;
`;

export const HeaderBadge = styled.div`
    background-color: #ea212d;
    border: solid 2px #fff;
    border-radius: 12px;
    color: #fff;
    font-size: 10px;
    font-size: 10px;
    font-style: initial;
    font-weight: 700;
    line-height: 1.6;
    padding: 0 6px;
    position: absolute;
    right: 14px;
    text-align: center;
    top: 6px;
    transform: translate(60%, -30%);
`;

export const HeaderLogo = styled(Link)`
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 4px;
    padding: 0.375rem 0.75rem;
    text-decoration: none;

    > i {
        margin-right: 7px;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 450px;
    @media (max-width: 450px) {
        width: 100%;
    }
`;
