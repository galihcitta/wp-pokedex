import React from "react";
import { HeadingText, Text } from "./index";

describe("Header Menu Lang Component", () => {
    it("renders and create snapshot <Text.BodyOne />", () => {
        expect(
            toJson(mount(<Text.BodyOne fontWeight="bold"></Text.BodyOne>)),
        ).toMatchSnapshot();
    });

    it("renders and check fontWeight Bold <Text.Caption />", () => {
        expect(
            mount(<Text.Caption fontWeight="bold"></Text.Caption>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and create snapshot <Text.BodyTwo />", () => {
        expect(
            toJson(mount(<Text.Caption fontWeight="bold"></Text.Caption>)),
        ).toMatchSnapshot();
    });

    it("renders and check fontWeight Bold <Text.BodyTwo />", () => {
        expect(
            mount(<Text.Caption fontWeight="bold"></Text.Caption>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and check fontWeight Bold <Text.BodyOne />", () => {
        expect(
            mount(<Text.BodyOne fontWeight="bold"></Text.BodyOne>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and create snapshot <Text.BodyTwo />", () => {
        expect(
            toJson(mount(<Text.BodyOne fontWeight="bold"></Text.BodyOne>)),
        ).toMatchSnapshot();
    });

    it("renders and check fontWeight Bold <Text.BodyTwo />", () => {
        expect(
            mount(<Text.BodyOne fontWeight="bold"></Text.BodyOne>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });

    it("renders and check fontWeight Bold <Text.BodyOne />", () => {
        expect(
            mount(<Text.BodyTwo fontWeight="bold"></Text.BodyTwo>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and create snapshot <Text.BodyTwo />", () => {
        expect(
            toJson(mount(<Text.BodyTwo fontWeight="bold"></Text.BodyTwo>)),
        ).toMatchSnapshot();
    });

    it("renders and check fontWeight Bold <Text.BodyTwo />", () => {
        expect(
            mount(<Text.BodyTwo fontWeight="bold"></Text.BodyTwo>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });

    it("renders and check fontWeight Bold <Text.SubtitleOne />", () => {
        expect(
            mount(<Text.SubtitleOne fontWeight="bold"></Text.SubtitleOne>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and create snapshot <Text.SubtitleOne />", () => {
        expect(
            toJson(
                mount(<Text.SubtitleOne fontWeight="bold"></Text.SubtitleOne>),
            ),
        ).toMatchSnapshot();
    });

    it("renders and check block <Text.SubtitleTwo />", () => {
        expect(
            mount(<Text.SubtitleOne block></Text.SubtitleOne>).prop("block"),
        ).toEqual(true);
    });

    it("renders and check fontWeight Bold <Text.SubtitleTwo />", () => {
        expect(
            mount(<Text.SubtitleTwo fontWeight="bold"></Text.SubtitleTwo>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and create snapshot <Text.SubtitleTwo />", () => {
        expect(
            toJson(
                mount(<Text.SubtitleTwo fontWeight="bold"></Text.SubtitleTwo>),
            ),
        ).toMatchSnapshot();
    });

    it("renders and check fontWeight Bold <Text.SubtitleTwo />", () => {
        expect(
            mount(<Text.Overline fontWeight="bold"></Text.Overline>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and create snapshot <Text.Overline />", () => {
        expect(
            toJson(mount(<Text.Overline fontWeight="bold"></Text.Overline>)),
        ).toMatchSnapshot();
    });

    it("renders and check block <Text.Overline />", () => {
        expect(
            mount(<Text.Overline block></Text.Overline>).prop("block"),
        ).toEqual(true);
    });

    it("renders and check block <Text.Caption />", () => {
        expect(
            mount(<Text.Caption block></Text.Caption>).prop("block"),
        ).toEqual(true);
    });

    it("renders and check fontWeight Bold <Text.Caption />", () => {
        expect(
            mount(<Text.Caption fontWeight="bold"></Text.Caption>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and create snapshot <Text.Caption />", () => {
        expect(
            toJson(mount(<Text.Caption fontWeight="bold"></Text.Caption>)),
        ).toMatchSnapshot();
    });

    it("renders and check block <Text.Caption />", () => {
        expect(
            mount(<Text.Caption block></Text.Caption>).prop("block"),
        ).toEqual(true);
    });

    it("renders and check block <HeadingText.One />", () => {
        expect(
            mount(<HeadingText.One block></HeadingText.One>).prop("block"),
        ).toEqual(true);
    });

    it("renders and check fontWeight Bold <HeadingText.One />", () => {
        expect(
            mount(<HeadingText.One fontWeight="bold"></HeadingText.One>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and create snapshot <HeadingText.One />", () => {
        expect(
            toJson(
                mount(<HeadingText.One fontWeight="bold"></HeadingText.One>),
            ),
        ).toMatchSnapshot();
    });

    it("renders and check block <HeadingText.One />", () => {
        expect(
            mount(<HeadingText.One block></HeadingText.One>).prop("block"),
        ).toEqual(true);
    });
    it("renders and check block <HeadingText.Two />", () => {
        expect(
            mount(<HeadingText.Two block></HeadingText.Two>).prop("block"),
        ).toEqual(true);
    });

    it("renders and check fontWeight Bold <HeadingText.Two />", () => {
        expect(
            mount(<HeadingText.Two fontWeight="bold"></HeadingText.Two>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and create snapshot <HeadingText.Two />", () => {
        expect(
            toJson(
                mount(<HeadingText.Two fontWeight="bold"></HeadingText.Two>),
            ),
        ).toMatchSnapshot();
    });

    it("renders and check fontWeight Bold <HeadingText.Three />", () => {
        expect(
            mount(
                <HeadingText.Three fontWeight="bold"></HeadingText.Three>,
            ).prop("fontWeight"),
        ).toEqual("bold");
    });
    it("renders and create snapshot <HeadingText.Three />", () => {
        expect(
            toJson(
                mount(
                    <HeadingText.Three fontWeight="bold"></HeadingText.Three>,
                ),
            ),
        ).toMatchSnapshot();
    });

    it("renders and check block <HeadingText.Three />", () => {
        expect(
            mount(<HeadingText.Three block></HeadingText.Three>).prop("block"),
        ).toEqual(true);
    });

    it("renders and check fontWeight Bold <HeadingText.Four />", () => {
        expect(
            mount(<HeadingText.Four fontWeight="bold"></HeadingText.Four>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and create snapshot <HeadingText.Four />", () => {
        expect(
            toJson(
                mount(<HeadingText.Four fontWeight="bold"></HeadingText.Four>),
            ),
        ).toMatchSnapshot();
    });

    it("renders and check block <HeadingText.Four />", () => {
        expect(
            mount(<HeadingText.Four block></HeadingText.Four>).prop("block"),
        ).toEqual(true);
    });

    it("renders and check fontWeight Bold <HeadingText.Five />", () => {
        expect(
            mount(<HeadingText.Five fontWeight="bold"></HeadingText.Five>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and create snapshot <HeadingText.Five />", () => {
        expect(
            toJson(
                mount(<HeadingText.Five fontWeight="bold"></HeadingText.Five>),
            ),
        ).toMatchSnapshot();
    });

    it("renders and check block <HeadingText.Five />", () => {
        expect(
            mount(<HeadingText.Five block></HeadingText.Five>).prop("block"),
        ).toEqual(true);
    });

    it("renders and check fontWeight Bold <HeadingText.Six />", () => {
        expect(
            mount(<HeadingText.Six fontWeight="bold"></HeadingText.Six>).prop(
                "fontWeight",
            ),
        ).toEqual("bold");
    });
    it("renders and create snapshot <HeadingText.Six />", () => {
        expect(
            toJson(
                mount(<HeadingText.Six fontWeight="bold"></HeadingText.Six>),
            ),
        ).toMatchSnapshot();
    });

    it("renders and check block <HeadingText.Six />", () => {
        expect(
            mount(<HeadingText.Six block></HeadingText.Six>).prop("block"),
        ).toEqual(true);
    });
});
