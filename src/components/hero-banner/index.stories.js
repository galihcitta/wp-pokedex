import React from "react";
import HeroBanner from "./index";

export default { title: "Components|Hero Banner", component: HeroBanner };

export const HeroBannerDefault = () => {
    return <HeroBanner total={120} unique={20} />;
};
