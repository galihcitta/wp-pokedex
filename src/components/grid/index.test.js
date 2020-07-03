import React from "react";
import Grid from "./index";
import GridCol from "./index.col";
import GridStyle from "./index.style";

describe("Grid Component", () => {
    it("renders and create snapshot <Grid />", () => {
        expect(
            toJson(
                <Grid>
                    <Grid.Col md={12} sm={12} xs={12} lg={12}></Grid.Col>
                </Grid>,
            ),
        ).toMatchSnapshot();
    });
    it("renders shallow is success <Grid />", () => {
        expect(
            shallow(
                <Grid>
                    <Grid.Col md={12} sm={12} xs={12} lg={12}></Grid.Col>
                </Grid>,
            ).exists(),
        ).toBe(true);
    });

    it("renders and create snapshot only col grid <GridCol />", () => {
        expect(
            mount(<GridCol md={12} sm={12} xs={12} lg={12}></GridCol>),
        ).toMatchSnapshot();
    });

    it("renders and create snapshot only col grid <GridCol />", () => {
        expect(mount(<GridStyle></GridStyle>)).toMatchSnapshot();
    });

    it("renders and create grid check is default value for col<GridCol />", () => {
        expect(
            shallow(
                <Grid>
                    <Grid.Col></Grid.Col>
                </Grid>,
            )
                .find("RowCol")
                .prop("md"),
        ).toEqual(12);
    });
    it("renders and create snapshot only col grid <GridCol />", () => {
        expect(
            shallow(
                <Grid>
                    <Grid.Col md={12} sm={12} xs={12} lg={12}></Grid.Col>
                </Grid>,
            )
                .find("RowCol")
                .prop("md"),
        ).toEqual(12);
    });
    it("check align default is normal <Grid />", () => {
        expect(
            shallow(
                <Grid>
                    <Grid.Col md={12} sm={12} xs={12} lg={12}></Grid.Col>
                </Grid>,
            ).prop("align"),
        ).toEqual("normal");
    });
    it("check align set center <Grid />", () => {
        expect(
            shallow(
                <Grid align="center">
                    <Grid.Col md={12} sm={12} xs={12} lg={12}></Grid.Col>
                </Grid>,
            ).prop("align"),
        ).toEqual("center");
    });

    it("check justify is default flex-start <Grid />", () => {
        expect(
            shallow(
                <Grid>
                    <Grid.Col md={12} sm={12} xs={12} lg={12}></Grid.Col>
                </Grid>,
            ).prop("justify"),
        ).toEqual("flex-start");
    });
    it("check justify is set center <Grid />", () => {
        expect(
            shallow(
                <Grid justify="center">
                    <Grid.Col md={12} sm={12} xs={12} lg={12}></Grid.Col>
                </Grid>,
            ).prop("justify"),
        ).toEqual("center");
    });
    it("check justify is set center <Grid />", () => {
        expect(
            shallow(
                <Grid justify="center">
                    <Grid.Col md={12} sm={12} xs={12} lg={12}></Grid.Col>
                </Grid>,
            ).prop("justify"),
        ).toEqual("center");
    });
});
