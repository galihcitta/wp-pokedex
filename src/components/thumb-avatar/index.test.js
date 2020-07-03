import React from "react";
import ThumbAvatar from "./index";
import StyleThumbAvatar from "./index.style";

let wrapper;

beforeEach(() => {
    wrapper = shallowWithTheme(
        <ThumbAvatar
            data-test="thumb-avatar-test-wrapper"
            type="circle"
            size="lg"
        />,
    );
});

describe("Header Menu Lang Component", () => {
    it("renders and create snapshot <ThumbAvatar />", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("renders success <ThumbAvatar />", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("renders and check avatar thumb image is ready <ThumbAvatar />", () => {
        expect(wrapper.find("img").prop("src")).toEqual("dummy-square.jpg");
    });

    it("renders and check avatar thumb have size <ThumbAvatar />", () => {
        expect(wrapper.prop("size")).toEqual("lg");
    });

    it("renders and check avatar thumb have radius <ThumbAvatar />", () => {
        expect(wrapper.prop("radius")).toEqual("circle");
    });

    it("check style thumb avatar is have size <ThumbAvatar />", () => {
        expect(
            mountWithTheme(
                <div>
                    <StyleThumbAvatar></StyleThumbAvatar>
                </div>,
            )
                .children()
                .prop("size"),
        ).toEqual("md");
    });
    it("check style thumb avatar is have radius <ThumbAvatar />", () => {
        expect(
            mountWithTheme(
                <div>
                    <StyleThumbAvatar></StyleThumbAvatar>
                </div>,
            )
                .children()
                .prop("radius"),
        ).toEqual("circle");
    });
});
