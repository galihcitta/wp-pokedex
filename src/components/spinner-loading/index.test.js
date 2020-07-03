import React from "react";
import Loading from "./index";
import { StyleSpinner } from "./index.style";

let element;
let spinner;
beforeEach(() => {
    spinner = <Loading.Spinner></Loading.Spinner>;
    element = <Loading isLoading={true}>{spinner}</Loading>;
    element = <Loading isLoading={true}>{spinner}</Loading>;
});

describe("Loading and spinner Component", () => {
    it("renders spinner loading and snapshot element <Loading/>", () => {
        expect(toJson(shallow(element))).toMatchSnapshot();
    });
    it("renders spinner loading props isloading false <Loading/>", () => {
        expect(
            mount(<Loading isLoading={false}></Loading>).prop("isLoading"),
        ).toEqual(false);
    });
    it("renders spinner loading and snapshot element  <spinner/>", () => {
        expect(shallow(spinner).prop("color")).toEqual("aquamarine");
    });
    it("renders spinner loading and snapshot element  <spinner/>", () => {
        expect(
            mountWithTheme(<StyleSpinner color="aquamarine"></StyleSpinner>)
                .find("div")
                .prop("color"),
        ).toEqual("aquamarine");
    });
});
