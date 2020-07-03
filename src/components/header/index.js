import React from "react";
import {
    HeaderStyle,
    HeaderContainer,
    HeaderBadge,
    HeaderLogo,
} from "./index.style";
import Button from "../button";
import Icons from "../icons";

const Header = ({ withBackButton = false }) => {
    return (
        <HeaderStyle>
            <HeaderContainer test-id="header-content">
                <HeaderLogo to="/">
                    {withBackButton && <Icons name="arrowLeft"></Icons>}
                    <Icons name="logo"></Icons>
                    POKEMON
                </HeaderLogo>
                <Button type="button">
                    <HeaderBadge>3</HeaderBadge>
                    <Icons name="pokeBall"></Icons>
                </Button>
            </HeaderContainer>
        </HeaderStyle>
    );
};
export default Header;
