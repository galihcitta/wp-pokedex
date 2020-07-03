import React from "react";
import Layouts from "./index";

let wrapper;

beforeEach(() => {
    wrapper = shallowWithTheme(
        <Layouts
            noPadding
            style={{
                header: {
                    withBackButton: true,
                },
            }}
            type="circle"
            size="lg"
        />,
    );
});

describe("Layouts Component", () => {
    it("renders and create snapshot <Layouts />", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("renders success <Layouts />", () => {
        expect(wrapper.exists()).toBe(true);
    });
});
