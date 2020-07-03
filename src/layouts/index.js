import React from "react";
import Header from "../components/header";
import BodyContent from "../components/body-content";

import StyleLayouts from "./index.style";
const Layouts = ({
    children,
    style = { header: { withBackButton: false } },
}) => {
    return (
        <StyleLayouts>
            <BodyContent noPadding={!style?.header}>
                {style?.header && <Header {...style.header}></Header>}
                {children}
            </BodyContent>
        </StyleLayouts>
    );
};

export default Layouts;
