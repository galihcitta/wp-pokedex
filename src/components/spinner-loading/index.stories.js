import React from "react";
import Spinner from "./index.spinner";

export default {
    title: "Loading|Spinner",
    component: Spinner,
};

export const SpinnerDefault = () => (
    <div>
        <Spinner></Spinner>
    </div>
);
export const SpinnerColor = () => {
    return (
        <div>
            <Spinner color="ice-blue"></Spinner>
            <Spinner color="turquoise-2"></Spinner>
            <Spinner color="dark-grey"></Spinner>
            <Spinner color="teal-1"></Spinner>
            <Spinner color="teal-2"></Spinner>
            <Spinner color="seafoam-blue"></Spinner>
            <Spinner color="deep-teal"></Spinner>
            <Spinner color="bluegreen"></Spinner>
            <Spinner color="wheat"></Spinner>
            <Spinner color="mango"></Spinner>
            <Spinner color="butterscotch"></Spinner>
            <Spinner color="pumpkin-orange"></Spinner>
            <Spinner color="deep-orange"></Spinner>
            <Spinner color="white"></Spinner>
            <Spinner color="scarlet"></Spinner>
        </div>
    );
};
