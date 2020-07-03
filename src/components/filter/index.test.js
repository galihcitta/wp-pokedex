import React from "react";
import Filter from "./index";

describe("Filterr Component", () => {
    it("renders and create snapshot <Filter />", () => {
        expect(toJson(<Filter name="Normal" width={50} />)).toMatchSnapshot();
    });
    it("renders and create snapshot <Filter />", () => {
        expect(
            toJson(<Filter.Loading name="Normal" width={50} />),
        ).toMatchSnapshot();
    });
    it("check width if not set <Filter />", () => {
        expect(shallow(<Filter name="Normal" />).prop("width")).toEqual(50);
    });

    it("check width if not set <Filter />", () => {
        let resultName;
        const onGetValue = (e, name) => {
            resultName = name;
        };
        shallow(<Filter onGetValue={onGetValue} name="Normal" />).simulate(
            "click",
        );
        expect(resultName).toEqual("Normal");
    });

    it("check width if not isActive <Filter />", () => {
        expect(shallow(<Filter name="Normal" />).prop("isActive")).toEqual(
            false,
        );
    });

    it("check width in style components <Filter />", () => {
        const tree = renderer.create(<Filter name="Normal" />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule("width", "50%");
    });

    it("check width in style components <Filter />", () => {
        const tree = renderer
            .create(<Filter activeValue="Normal" name="Normal" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule("background", "#f7f7f7");
    });

    it("check width in style components <Filter.Loading />", () => {
        const tree = renderer.create(<Filter.Loading />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule("width", "50%");
    });
});
