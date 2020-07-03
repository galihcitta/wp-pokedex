import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import HomePageFilter from "./index.filter";

// begin global components
import Container from "../../components/container";
import Content from "../../components/content";
import CardList from "../../components/card-list";
import InfiniteScroll from "../../components/infinite-scroll";
import HeroBanner from "../../components/hero-banner/index";
// end global components

// begin service
import { useStore } from "../../reducers";
import imagePath from "../../services/image-path";
import service from "./index.service";
// end service

const Home = () => {
    const { dispatch, state } = useStore();
    const [items, setItem] = useState([]);
    const [isFilter, setIsFilter] = useState("");
    const [params, setParams] = useState({
        offset: 0,
        limit: 10,
    });
    const [isLoading, setLoading] = useState(false);
    const mounted = useRef();

    useEffect(() => {
        const onGetResponseData = () => {
            const pokemonResult = state?.pokemon?.pokemonList?.data;

            setItem(prevState => [
                ...prevState,
                ...(isFilter.length > 0
                    ? pokemonResult?.pokemon?.length > 0 &&
                      pokemonResult?.pokemon.map(item => {
                          return { ...item.pokemon };
                      })
                    : pokemonResult?.results),
            ]);
        };
        if (!mounted.current) {
            mounted.current = true;
        } else {
            setLoading(prevState => {
                if (prevState) {
                    onGetResponseData();
                    return false;
                }
            });
        }

        // eslint-disable-next-line
    }, [state]);

    const handleLoadData = () => {
        if (!isLoading && !isFilter) {
            setTimeout(() => {
                getDataPokemon();
            }, 200);
        }
    };

    const getDataPokemon = () => {
        service.pokemonList({ dispatch, params: params });
        setParams({
            offset: params.offset + params.limit,
            limit: 10,
        });
        setLoading(true);
    };
    const getDataPokemonByType = name => {
        service.pokemonListByFilterType({ dispatch, slug: name });
        setParams({
            offset: 0,
            limit: 10,
        });
        setLoading(true);
    };

    const onGetValueFilter = (e, name) => {
        e.preventDefault();

        if (name === isFilter) {
            setIsFilter(false);
            getDataPokemon();
            setItem([]);
        } else {
            setIsFilter(name);
            setItem([]);
            getDataPokemonByType(name);
        }
        window.scrollTo(0, 0);
    };

    return (
        <Container noPadding>
            <HeroBanner total={120} unique={10}></HeroBanner>
            <HomePageFilter
                activeValue={isFilter}
                onGetValueFilter={onGetValueFilter}
            ></HomePageFilter>
            <Content>
                <InfiniteScroll
                    threshold={20}
                    isLoading={isLoading}
                    onLoadData={handleLoadData}
                    hasMore={false}
                    loadingComponent={<CardList.Loading></CardList.Loading>}
                >
                    {items.map(item => {
                        return (
                            <Link
                                to={`/pokemon-detail/${item.name}/`}
                                key={`${item.name}-${item.url}`}
                            >
                                <CardList
                                    image={imagePath(item.url)}
                                    radius="circle"
                                    size="lg"
                                    name={`${item.name}`}
                                ></CardList>
                            </Link>
                        );
                    })}
                </InfiniteScroll>
            </Content>
        </Container>
    );
};

export default Home;
