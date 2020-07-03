import React from "react";
import CardMoves from "./index";

export default { title: "Components|Card Movies", component: CardMoves };

export const CardMoviesDefault = () => {
    return <CardMoves></CardMoves>;
};
export const CardMoviesWithName = () => {
    return <CardMoves name="element-one"></CardMoves>;
};
export const CardMoviesWithRandomBackground = () => {
    return <CardMoves randomBackground name="element-one"></CardMoves>;
};

export const CardMoviesWithSizeOfWidth = () => {
    return (
        <CardMoves width={35} randomBackground name="element-one"></CardMoves>
    );
};
export const CardMoviesLoading = () => {
    return <CardMoves.Loading></CardMoves.Loading>;
};
export const CardMoviesLoadingWithRandomBackground = () => {
    return <CardMoves.Loading randomBackground></CardMoves.Loading>;
};
