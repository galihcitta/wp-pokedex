import React from "react";
import Stats from "./index";

let element;
let totalStats;
beforeEach(() => {
    const stats = [
        {
            base_stat: 45,
            effort: 0,
            stat: {
                name: "speed",
                url: "https://pokeapi.co/api/v2/stat/6/",
            },
        },
        {
            base_stat: 65,
            effort: 0,
            stat: {
                name: "special-defense",
                url: "https://pokeapi.co/api/v2/stat/5/",
            },
        },
        {
            base_stat: 65,
            effort: 1,
            stat: {
                name: "special-attack",
                url: "https://pokeapi.co/api/v2/stat/4/",
            },
        },
        {
            base_stat: 49,
            effort: 0,
            stat: {
                name: "defense",
                url: "https://pokeapi.co/api/v2/stat/3/",
            },
        },
        {
            base_stat: 49,
            effort: 0,
            stat: {
                name: "attack",
                url: "https://pokeapi.co/api/v2/stat/2/",
            },
        },
        {
            base_stat: 45,
            effort: 0,
            stat: {
                name: "hp",
                url: "https://pokeapi.co/api/v2/stat/1/",
            },
        },
    ];
    totalStats = stats.reduce(
        (value, item) => value + (item.base_stat || 0),
        0,
    );
    element = <Stats data={stats}></Stats>;
});

describe("Stats Component", () => {
    it("renders correct Stats and snapshot element <Stats/>", () => {
        expect(toJson(shallow(element))).toMatchSnapshot();
    });
    it("renders correct Stats and snapshot element <Stats.Loading/>", () => {
        expect(
            toJson(shallow(<Stats.Loading></Stats.Loading>)),
        ).toMatchSnapshot();
    });

    it("check element length <Stats/>", () => {
        expect(
            mount(element).find({ className: "stats__list-row" }).length,
        ).toEqual(6);
    });

    it("check element stats Speed img <Stats/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "stats-speed" })
                .find("img")
                .prop("src"),
        ).toEqual("ic-speed.png");
    });

    it("check element stats HP img <Stats/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "stats-hp" })
                .find("img")
                .prop("src"),
        ).toEqual("ic-health-point.png");
    });

    it("check element stats Attack img <Stats/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "stats-attack" })
                .find("img")
                .prop("src"),
        ).toEqual("ic-attack.png");
    });

    it("check element stats Attack check title name <Stats/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "stats-attack" })
                .find("span")
                .text(),
        ).toEqual("Attack");
    });

    it("check element stats Attack check point <Stats/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "stats-attack" })
                .find({ className: "stats__list-point" })
                .text(),
        ).toEqual("49");
    });

    it("check element stats Attack check hasc class attack <Stats/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "stats-attack" })
                .find({ className: "stats__list-graph" })
                .children()
                .hasClass("attack"),
        ).toEqual(true);
    });

    it("check element stats Attack width graph <Stats/>", () => {
        const attackPoint = mount(element)
            .find({ "test-id": "stats-attack" })
            .find({ className: "stats__list-point" })
            .text();
        const percentage = `${(attackPoint / totalStats) * 100}%`;
        expect(
            mount(element)
                .find({ "test-id": "stats-attack" })
                .find({ className: "stats__list-graph" })
                .children()
                .props("style").style.width,
        ).toEqual(percentage);
    });
});
