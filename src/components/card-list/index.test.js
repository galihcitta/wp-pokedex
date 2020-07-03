import React from "react";
import CardList from "./index";

describe("Card List Component", () => {
    it("renders and create snapshot <CardList />", () => {
        expect(
            toJson(
                shallow(<CardList radius="circle" size="lg" name="BELARUS" />),
            ),
        ).toMatchSnapshot();
    });
});
