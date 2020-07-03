import React from "react";
import Filter from "./index";

export default { title: "Components|Filter", component: Filter };

export const FilterDefault = () => {
    return <Filter name="Normal"></Filter>;
};
export const FilterActive = () => {
    return <Filter name="Normal" activeValue="Normal"></Filter>;
};
export const FilterLoading = () => {
    return <Filter.Loading></Filter.Loading>;
};
