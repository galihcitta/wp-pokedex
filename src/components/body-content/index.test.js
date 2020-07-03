import React from "react";
import BodyContent from "./index";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<BodyContent data-test="BodyContent-test-wrapper" />);
});

describe("Body Content Component", () => {
    it("renders and create snapshot <BodyContent />", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    });
});
