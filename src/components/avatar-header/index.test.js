import React from "react";
import AvatarHeader from "./index";
import dummyImage from "../../static/image/dummy-square.jpg";

let wrapper;
let wrap;
let component;

beforeEach(() => {
    component = (
        <AvatarHeader
            name="Burbasur"
            abilities={[
                {
                    ability: {
                        name: "chlorophyll",
                        url: "https://pokeapi.co/api/v2/ability/34/",
                    },
                    is_hidden: true,
                    slot: 3,
                },
                {
                    ability: {
                        name: "overgrow",
                        url: "https://pokeapi.co/api/v2/ability/65/",
                    },
                    is_hidden: false,
                    slot: 1,
                },
            ]}
            image={dummyImage}
        ></AvatarHeader>
    );
    wrapper = shallow(component);
    wrap = mount(component);
});

describe("Header Component", () => {
    it("renders and create snapshot <AvatarHeader />", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it("renders and create snapshot <AvatarHeader.Loading />", () => {
        expect(
            toJson(mount(<AvatarHeader.Loading></AvatarHeader.Loading>)),
        ).toMatchSnapshot();
    });
    it("renders loading <AvatarHeader.Loading />", () => {
        expect(
            mount(<AvatarHeader.Loading></AvatarHeader.Loading>).exists(),
        ).toBe(true);
    });

    it("renders success <AvatarHeader/>", () => {
        expect(wrapper.exists()).toBe(true);
    });
});
