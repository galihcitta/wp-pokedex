import React from "react";
import Skeleton from "./index";

export default {
    title: "Loading|Skeleton",
    component: Skeleton,
};

export const SkeletonDefault = () => <Skeleton></Skeleton>;

export const SkeletonWithWidth = () => <Skeleton width="50%"></Skeleton>;

export const SkeletonWithHeight = () => <Skeleton height={40}></Skeleton>;

export const SkeletonWithCircle = () => (
    <Skeleton circle width="40px" height={40}></Skeleton>
);

export const SkeletonWithStyle = () => (
    <Skeleton style={{ border: "2px solid red" }} height={40}></Skeleton>
);
