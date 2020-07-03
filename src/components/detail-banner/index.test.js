import React from "react";
import DetailBanner from "./index";

let element;
beforeEach(() => {
    element = <DetailBanner height={7} weight={69}></DetailBanner>;
});

describe("Detail Banner Component", () => {
    it("renders correct detail banner and snapshot element two <DetailBanner/>", () => {
        expect(toJson(mount(element))).toMatchSnapshot();
    });
    it("renders correct detail banner loading <DetailBanner.Loading/>", () => {
        expect(
            toJson(mount(<DetailBanner.Loading></DetailBanner.Loading>)),
        ).toMatchSnapshot();
    });

    it("renders correct detail banner have height <DetailBanner/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "height" })
                .text(),
        ).toEqual("0.7 m");
    });

    it("renders correct detail banner have weight <DetailBanner/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "weight" })
                .text(),
        ).toEqual("6.9 Kg");
    });
});
