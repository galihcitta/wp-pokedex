import React from "react";
import PageNotFound from "./page-not-found";

let wrapper;

beforeEach(() => {
    wrapper = shallowWithTheme(<PageNotFound />);
});

describe("PageNotFound Component", () => {
    it("renders and create snapshot <PageNotFound />", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("renders success <PageNotFound />", () => {
        expect(wrapper.exists()).toBe(true);
    });
});
