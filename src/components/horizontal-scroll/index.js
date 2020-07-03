import React from "react";
import Style from "./index.style";
import type from "./index.type";

const HorizontalScroll = props => {
    const { children, style = {}, noPaddingTop = false } = props;
    return (
        <Style noPaddingTop={noPaddingTop} style={{ style }}>
            <div className="horizontal-scroll">
                <div className="horizontal-scroll--list">{children}</div>
            </div>
        </Style>
    );
};

HorizontalScroll.propTypes = type;

export default HorizontalScroll;
