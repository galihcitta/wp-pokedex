import React from "react";
import { HeadingText } from "../../components/typography";
import Container from "../../components/container";

const PageNotFound = () => {
    return (
        <Container>
            <HeadingText.Three block align="center">
                404
            </HeadingText.Three>
        </Container>
    );
};

export default PageNotFound;
