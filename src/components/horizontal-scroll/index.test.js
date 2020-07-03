import React from "react";
import HorizontalScroll from "./index";

let element;
let elementShallow;
beforeEach(() => {
    element = (
        <HorizontalScroll>
            <div test-id={"data-one"}>data</div>
        </HorizontalScroll>
    );
    elementShallow = shallow(element);
});

describe("HorizontalScroll Component", () => {
    it("renders correct and create snapshot <HorizontalScroll/>", () => {
        expect(toJson(elementShallow)).toMatchSnapshot();
    });
    it("renders correct and check children component <HorizontalScroll/>", () => {
        expect(
            elementShallow.children().find({ "test-id": "data-one" }).length,
        ).toEqual(1);
    });
});
