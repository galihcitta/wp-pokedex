import React from "react";
import Content from "./index";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Content data-test="content-test-wrapper" />);
});

describe("Header Menu Lang Component", () => {
    it("renders and create snapshot <Content />", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    });
});
