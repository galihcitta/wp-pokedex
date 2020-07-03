import React from "react";
import Icons from "./index";

describe("Icons Component", () => {
    it("renders and create snapshot <Icons />", () => {
        expect(toJson(<Icons name="burgerMenu" />)).toMatchSnapshot();
    });

    it("check width in style components <Filter />", () => {
        const tree = renderer.create(<Icons name="logo" />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule("background-image", "url(ic-logo.svg)");
    });
});
