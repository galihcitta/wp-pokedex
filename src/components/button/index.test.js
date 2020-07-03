import React from "react";
import Button from "./index";

describe("Button Component", () => {
    it("renders and create snapshot <Button />", () => {
        expect(
            toJson(shallow(<Button block type="button"></Button>)),
        ).toMatchSnapshot();
    });

    it("check children have text <Button />", () => {
        expect(
            shallow(
                <Button block type="button">
                    Title
                </Button>,
            ).text(),
        ).toEqual("Title");
    });
    it("check children have text <Button />", () => {
        const tree = renderer
            .create(
                <Button block type="button">
                    Title
                </Button>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule("display", "block");
    });
    it("check children have text <Button />", () => {
        const tree = renderer
            .create(<Button type="button">Title</Button>)
            .toJSON();
        expect(tree).toHaveStyleRule("display", "inline-block");
    });
});
