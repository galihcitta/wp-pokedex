import React from "react";
import Container from "./index";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Container data-test="container-test-mount" />);
});

describe("Container Component", () => {
    it("renders and create snapshot <Content />", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("check no padding", () => {
        expect(
            renderer
                .create(
                    <Container noPadding data-test="container-test-shallow" />,
                )
                .toJSON(),
        ).toHaveStyleRule("padding", "0");
    });

    it("check with padding", () => {
        expect(
            renderer
                .create(<Container data-test="container-test-shallow" />)
                .toJSON(),
        ).toHaveStyleRule("padding", "20px 15px 10px 15px");
    });
});
