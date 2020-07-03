import React from "react";
import { HeadingText, Text } from "./index";

export default {
    title: "Components|Typography",
    component: { HeadingText, Text },
};

export const Heading = () => (
    <div>
        <HeadingText.One>Heading One</HeadingText.One>
        <HeadingText.Two>Heading Two</HeadingText.Two>
        <HeadingText.Three>Heading Three</HeadingText.Three>
        <HeadingText.Four>Heading Four</HeadingText.Four>
        <HeadingText.Five>Heading Five</HeadingText.Five>
        <HeadingText.Six>Heading Six</HeadingText.Six>
    </div>
);

export const TextTyphography = () => (
    <div>
        <div>
            <Text.SubtitleOne>Text Subtitle One</Text.SubtitleOne>
        </div>
        <div>
            <Text.SubtitleTwo>Text Subtitle Two</Text.SubtitleTwo>
        </div>
        <div>
            <Text.BodyOne>Text Body One</Text.BodyOne>
        </div>
        <div>
            <Text.BodyOne>Text Body Two</Text.BodyOne>
        </div>
        <div>
            <Text.Caption>Heading Six</Text.Caption>
        </div>
        <div>
            <Text.Overline>Heading Six</Text.Overline>
        </div>
    </div>
);
export const ColorTyphography = () => (
    <div>
        <HeadingText.One color="pumpkin-orange">pumpkin-orange</HeadingText.One>
        <div style={{ padding: 10, background: "#484848" }}>
            <HeadingText.Two color="ice-blue">ice-blue</HeadingText.Two>
        </div>
        <div style={{ padding: 10 }}>
            <HeadingText.Three color="deep-orange">
                deep-orange
            </HeadingText.Three>
        </div>
        <div style={{ padding: 10 }}>
            <HeadingText.Four color="turquoise-2">turquoise-2</HeadingText.Four>
        </div>
        <div style={{ padding: 10 }}>
            <HeadingText.Five color="aquamarine">aquamarine</HeadingText.Five>
        </div>
        <div style={{ padding: 10 }}>
            <HeadingText.Six color="deep-teal">deep-teal</HeadingText.Six>
        </div>
        <div style={{ padding: 10 }}>
            <Text.SubtitleOne color="bluegreen">bluegreen</Text.SubtitleOne>
        </div>
        <div style={{ padding: 10, background: "#484848" }}>
            <Text.SubtitleTwo color="off-white">off-white</Text.SubtitleTwo>
        </div>
        <div style={{ padding: 10 }}>
            <Text.BodyOne color="blacl-87">blacl-87</Text.BodyOne>
        </div>
        <div style={{ padding: 10 }}>
            <Text.BodyTwo color="dark-grey">dark-grey</Text.BodyTwo>
        </div>
        <div style={{ padding: 10, background: "#484848" }}>
            <Text.Overline color="pale-peach">pale-peach</Text.Overline>
        </div>
        <div style={{ padding: 10 }}>
            <Text.Caption color="tangerine-2">tangerine-2</Text.Caption>
        </div>
    </div>
);
