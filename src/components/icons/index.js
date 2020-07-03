import styled from "styled-components";
import burgerMenu from "../../static/icons/ic-burger-menu.svg";
import pokeBall from "../../static/icons/ic-poke-ball.svg";
import logo from "../../static/icons/ic-logo.svg";
import arrowLeft from "../../static/icons/ic-arrow-left.svg";

const iconList = {
    burgerMenu: burgerMenu,
    pokeBall: pokeBall,
    logo: logo,
    arrowLeft: arrowLeft,
};

const Icons = styled.i`
    background-color: transparent;
    background-image: url(${props => iconList[props.name]});
    background-position: center center;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 18px 16px;
    background-size: 30px 30px;
    display: block;
    font-size: 0;
    height: 30px;
    margin: auto;
    text-indent: -99999px;
    width: 30px;
`;

export default Icons;
