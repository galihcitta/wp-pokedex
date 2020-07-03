import React, { useEffect, useState, Fragment } from "react";

// begin local import
import Style from "./index.style";
// end local import

// begin component global import
import AvatarHeader from "../../components/avatar-header";
import CardMoves from "../../components/card-moves";
import Container from "../../components/container";
import Content from "../../components/content";
import DetailBanner from "../../components/detail-banner";
import HorizontalScroll from "../../components/horizontal-scroll";
import Stats from "../../components/stats";
import { Text } from "../../components/typography";
// end component global import

// begin global function import
import formatMove from "../../utils/format-move";
// end global function import

const PokemonDetailContent = ({ resultData }) => {
    const [data, setData] = useState(false);

    useEffect(() => {
        setData(resultData);
    }, [resultData]);

    useEffect(() => {
        return () => {
            setData(false);
        };
    }, []);

    return (
        <Style>
            <Container noPadding>
                {data ? (
                    <Fragment>
                        <Content>
                            <AvatarHeader
                                image={data.sprites.front_default}
                                name={data.name}
                                abilities={data.abilities}
                            ></AvatarHeader>
                        </Content>
                        <DetailBanner
                            height={data.height}
                            weight={data.weight}
                        ></DetailBanner>

                        <Content>
                            <Text.BodyOne>
                                Moves learnt by level up
                            </Text.BodyOne>
                        </Content>

                        <HorizontalScroll>
                            {formatMove(resultData.moves, "level-up").map(
                                item => {
                                    return (
                                        <CardMoves
                                            level={"1"}
                                            width={70}
                                            key={item.move.name}
                                            randomBackground={false}
                                            name={item.move.name.replace(
                                                "-",
                                                " ",
                                            )}
                                        ></CardMoves>
                                    );
                                },
                            )}
                        </HorizontalScroll>
                        <Content>
                            <Text.BodyOne>Move Tutor moves</Text.BodyOne>
                        </Content>
                        <HorizontalScroll>
                            {formatMove(resultData.moves, "tutor").map(item => {
                                return (
                                    <CardMoves
                                        level={false}
                                        width={35}
                                        wave={true}
                                        key={item.move.name}
                                        randomBackground={true}
                                        name={item.move.name.replace("-", " ")}
                                    ></CardMoves>
                                );
                            })}
                        </HorizontalScroll>
                        <Content>
                            <Stats data={data.stats}></Stats>
                        </Content>
                    </Fragment>
                ) : (
                    false
                )}
            </Container>
        </Style>
    );
};

export default PokemonDetailContent;
