import React from "react";
import Filter from "../../components/filter";
import { Text } from "../../components/typography";
import HorizontalScroll from "../../components/horizontal-scroll";
import Container from "../../components/container";

import service from "./index.service";

// //begin global import
import CommonFetchData from "../../common/fetch-data";
//end global import

const Style = {
    marginTop: 20,
    paddingBottom: 0,
    marginBottom: 20,
    backgroundColor: "#fff",
    position: "sticky",
    top: 58,
    borderRadius: 4,
    zIndex: 1,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTop: "3px solid #4a4a4a",
    boxShadow: "0 4px 12px 0 rgba(0,0,0,0.05)",
};

const HomePageFilter = ({
    onGetValueFilter = () => {},
    activeValue = false,
}) => {
    return (
        <Container style={Style}>
            <Text.BodyOne fontWeight="bold">
                Filter Pokemon By Type
            </Text.BodyOne>
            <CommonFetchData
                service={{
                    serviceFunction: service.pokemonFilterList,
                    isReady: true,
                    reducer: "service",
                    key: "pokemonFilter",
                    group: "pokemon",
                }}
                renderLoading={() => (
                    <HorizontalScroll
                        noPaddingTop
                        style={{ margin: 0, paddingTop: 0 }}
                    >
                        <Filter.Loading></Filter.Loading>
                        <Filter.Loading></Filter.Loading>
                        <Filter.Loading></Filter.Loading>
                    </HorizontalScroll>
                )}
                renderSuccess={response => {
                    return (
                        <HorizontalScroll
                            noPaddingTop
                            style={{ margin: 0, paddingTop: 0 }}
                        >
                            {response?.results &&
                                response?.results.length > 0 &&
                                response?.results.map((item, key) => {
                                    return (
                                        <Filter
                                            activeValue={activeValue}
                                            onGetValue={onGetValueFilter}
                                            key={key}
                                            name={item.name}
                                            width={45}
                                        ></Filter>
                                    );
                                })}
                        </HorizontalScroll>
                    );
                }}
                renderFailed={() => <div>something wrong</div>}
            ></CommonFetchData>
        </Container>
    );
};

export default HomePageFilter;
