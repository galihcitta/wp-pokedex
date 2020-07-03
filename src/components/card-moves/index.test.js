import React from "react";
import CardMoves from "./index";

let elementOne;
let elementOneLoop;
let elementTwo;
beforeEach(() => {
    elementOne = (
        <CardMoves
            width={35}
            randomBackground={true}
            name={"element-one"}
        ></CardMoves>
    );
    elementOneLoop = mount(
        <div>
            <CardMoves
                test_id="1"
                key="1"
                width={35}
                randomBackground={true}
                name={"element-one"}
            ></CardMoves>
            <CardMoves
                test_id="2"
                key="2"
                width={35}
                randomBackground={true}
                name={"element-two"}
            ></CardMoves>
        </div>,
    );
    elementTwo = <CardMoves level={11} name={"element-two"}></CardMoves>;
});

describe("Card Moves Component", () => {
    it("renders correct card move and snapshot element two <CardMoves/>", () => {
        expect(toJson(shallow(elementTwo))).toMatchSnapshot();
    });
    it("renders correct card move loading and snapshot element two <CardMoves.Loading/>", () => {
        expect(
            toJson(shallow(<CardMoves.Loading></CardMoves.Loading>)),
        ).toMatchSnapshot();
    });

    it("check elementOne name label  <CardMoves/>", () => {
        expect(
            shallow(elementOne)
                .find({ className: "moves__label" })
                .text(),
        ).toEqual("MOVES NAME");
    });

    it("check elementOne name label  <CardMoves/>", () => {
        expect(
            shallow(elementOne)
                .find({ className: "moves__label" })
                .text(),
        ).toEqual("MOVES NAME");
    });

    it("check elementOne check pokemon name <CardMoves/>", () => {
        expect(
            shallow(elementOne)
                .find({ className: "moves__name" })
                .find("span")
                .text(),
        ).toEqual("element-one");
    });

    it("check elementOneLoops check pokemon name <CardMoves/>", () => {
        let styleList = [];
        elementOneLoop.find("CardMoves").forEach(node => {
            styleList.push(node.children().prop("style"));
        });

        expect(styleList[1].background !== styleList[0].background).toEqual(
            true,
        );
    });

    it("check two check background default is #fff <CardMoves/>", () => {
        expect(shallow(elementTwo).prop("style")).toHaveProperty(
            "background",
            "#fff",
        );
    });

    it("check two check level <CardMoves/>", () => {
        expect(
            shallow(elementTwo)
                .find({ className: "moves__level" })
                .text(),
        ).toEqual("LVL 11");
    });

    it("check two check width <CardMoves/>", () => {
        expect(renderer.create(elementOne).toJSON()).toHaveStyleRule(
            "width",
            "35%",
        );
    });

    it("check two check box shadow is unset <CardMoves/>", () => {
        expect(renderer.create(elementTwo).toJSON()).toHaveStyleRule(
            "box-shadow",
            "unset",
        );
    });
    it("check element two wave image is show <CardMoves/>", () => {
        expect(
            shallow(
                <CardMoves
                    width={35}
                    wave
                    randomBackground={true}
                    name={"element-one"}
                ></CardMoves>,
            )
                .find(".moves__image")
                .find("img")
                .prop("src"),
        ).toEqual("wave-image.svg");
    });

    it("check element two does'nt have name <CardMoves/>", () => {
        expect(
            shallow(<CardMoves></CardMoves>)
                .find("span")
                .text(),
        ).toEqual("");
    });

    it("check element two does'nt have name <CardMoves/>", () => {
        expect(
            shallow(<CardMoves></CardMoves>).prop("randomBackground"),
        ).toEqual(false);
    });

    it("check element two check box width is default <CardMoves/>", () => {
        expect(renderer.create(elementTwo).toJSON()).toHaveStyleRule(
            "width",
            "75%",
        );
    });
});
