import React from "react";
import HeroBanner from "./index";

describe("Hero Banner Component", () => {
    it("renders and create snapshot <HeroBanner />", () => {
        expect(
            toJson(<HeroBanner total={120} unique={20} />),
        ).toMatchSnapshot();
    });

    it("renders success <HeroBanner />", () => {
        expect(shallow(<HeroBanner total={120} unique={20} />).exists()).toBe(
            true,
        );
    });
    it("renders and check data total pokemon <HeroBanner />", () => {
        expect(
            shallow(<HeroBanner total={120} unique={20} />)
                .find({ "test-id": "total-pokemon" })
                .find("span")
                .text(),
        ).toEqual("120");
    });

    it("renders and check data total unique pokemon <HeroBanner />", () => {
        expect(
            shallow(<HeroBanner total={120} unique={20} />)
                .find({ "test-id": "total-unique" })
                .find("span")
                .text(),
        ).toEqual("20");
    });
});
