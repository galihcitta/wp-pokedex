import React from "react";
import PropTypes from "prop-types";

import Style from "./index.style";
import StatsLoading from "./index.loading";

import icSpDefense from "../../static/icons/ic-sp-defense.png";
import icSpAttack from "../../static/icons/ic-sp-attack.png";
import icAttack from "../../static/icons/ic-attack.png";
import icDefense from "../../static/icons/ic-defense.png";
import icHp from "../../static/icons/ic-health-point.png";
import icSpeed from "../../static/icons/ic-speed.png";

const Stats = props => {
    const { data } = props;
    const assetStats = {
        speed: {
            icon: icSpeed,
            name: "Speed",
        },
        "special-defense": { icon: icSpDefense, name: "Sp.Def" },
        "special-attack": { icon: icSpAttack, name: "Sp.Atk" },
        defense: { icon: icDefense, name: "Def" },
        attack: { icon: icAttack, name: "Attack" },
        hp: { icon: icHp, name: "HP" },
    };
    return (
        <Style>
            <div className="stats__container">
                <div className="stats__list">
                    {data.map(item => {
                        return (
                            <div
                                key={item.stat.name}
                                test-id={`stats-${item.stat.name}`}
                                className="stats__list-row"
                            >
                                <div className="stats__list-title">
                                    <div className="stats__list-icon">
                                        <img
                                            src={
                                                assetStats[item.stat.name].icon
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <span>
                                        {assetStats[item.stat.name].name}
                                    </span>
                                </div>
                                <div className="stats__list-graph">
                                    <div
                                        style={{
                                            width: `${(item.base_stat /
                                                data.reduce(
                                                    (a, b) => a + b.base_stat,
                                                    0,
                                                )) *
                                                100}%`,
                                        }}
                                        className={`
                                            stats__list-graph__percent 
                                            ${item.stat.name}
                                        `}
                                    ></div>
                                </div>
                                <div className="stats__list-point">
                                    {item.base_stat}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Style>
    );
};

Stats.Loading = StatsLoading;

Stats.defaultProps = {
    data: [],
};

Stats.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            base_stat: PropTypes.number.isRequired,
            effort: PropTypes.number.isRequired,
            stat: PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            }),
        }),
    ).isRequired,
};

export default Stats;
