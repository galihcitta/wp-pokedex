import React from "react";
import CardList from "./index";
import dummyImage from "../../static/dumy-pokemon.png";

export default { title: "Components|Card List", component: CardList };

export const CardListDefault = () => {
    return <CardList></CardList>;
};
export const CardListWidthRadius = () => {
    return (
        <div>
            <CardList radius="box"></CardList>
            <CardList radius="rounded"></CardList>
            <CardList radius="circle"></CardList>
        </div>
    );
};
export const CardListWidthSize = () => {
    return (
        <div>
            <CardList radius="circle" size="lg"></CardList>
            <CardList radius="circle" size="md"></CardList>
            <CardList radius="circle" size="sm"></CardList>
        </div>
    );
};
export const CardListWidthName = () => {
    return <CardList radius="circle" size="lg" name="BELARUS"></CardList>;
};
export const CardListWidthImage = () => {
    return (
        <CardList
            image={dummyImage}
            radius="circle"
            size="lg"
            name="BELARUS"
        ></CardList>
    );
};
export const CardListLoading = () => {
    return (
        <CardList.Loading
            radius="circle"
            size="lg"
            name="BELARUS"
        ></CardList.Loading>
    );
};
