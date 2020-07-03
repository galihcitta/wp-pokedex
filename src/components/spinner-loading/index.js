import React from "react";
import Spinner from "./index.spinner";
import { StyleLoading } from "./index.style.js";

const Loading = ({ isLoading = false, children }) => {
    if (!isLoading) {
        return false;
    }
    return (
        <StyleLoading>
            <div className="loading-background">
                <div className="loading-background-box">{children}</div>
            </div>
        </StyleLoading>
    );
};

Loading.Spinner = Spinner;

export default Loading;
