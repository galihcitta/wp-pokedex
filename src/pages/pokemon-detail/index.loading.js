import React from "react";

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
import Skeleton from "../../components/skeleton";
// end component global import

const PokemonDetailLoading = () => {
    return (
        <Style>
            <Container noPadding>
                <Content>
                    <AvatarHeader.Loading></AvatarHeader.Loading>
                </Content>
                <DetailBanner.Loading></DetailBanner.Loading>
                <Content>
                    <Skeleton
                        style={{ marginBottom: 10 }}
                        width="70%"
                        height={15}
                    ></Skeleton>
                </Content>
                <HorizontalScroll>
                    <CardMoves.Loading
                        level={"1"}
                        width={70}
                        randomBackground={false}
                    ></CardMoves.Loading>
                    <CardMoves.Loading
                        level={"1"}
                        width={70}
                        randomBackground={false}
                    ></CardMoves.Loading>
                </HorizontalScroll>
                <Content>
                    <Skeleton
                        style={{ marginBottom: 10 }}
                        width="70%"
                        height={15}
                    ></Skeleton>
                </Content>

                <HorizontalScroll>
                    <CardMoves.Loading
                        level={false}
                        width={35}
                        wave={true}
                        randomBackground={true}
                    ></CardMoves.Loading>
                    <CardMoves.Loading
                        level={false}
                        width={35}
                        wave={true}
                        randomBackground={true}
                    ></CardMoves.Loading>
                </HorizontalScroll>
                <Stats.Loading></Stats.Loading>
            </Container>
        </Style>
    );
};

export default PokemonDetailLoading;
