// begin reducer
import { servicesAction } from "../../reducer";
// end reducer

const service = {
    pokemonFilterList: ({ dispatch }) => {
        servicesAction(dispatch).reduxFetch({
            url: `type`,
            method: "GET",
            reducer: "service",
            key: "pokemonFilter",
            group: "pokemon",
            message: {
                200: {
                    mode: {
                        use: "alert",
                        type: "success",
                        timeOut: 3000,
                    },
                    text: "Success Get Ingredients",
                },
            },
        });
    },
    pokemonList: ({ dispatch, params }) => {
        servicesAction(dispatch).reduxFetch({
            reducer: "service",
            method: "GET",
            url: "/pokemon",
            group: "pokemon",
            key: "pokemonList",
            params: params,
            message: {
                200: {
                    mode: {
                        use: "alert",
                        type: "success",
                        timeOut: 3000,
                    },
                    text: "Success Get Ingredients",
                },
            },
        });
    },
    pokemonListByFilterType: ({ dispatch, slug }) => {
        servicesAction(dispatch).reduxFetch({
            reducer: "service",
            method: "GET",
            url: `/type/${slug}`,
            group: "pokemon",
            key: "pokemonList",
            message: {
                200: {
                    mode: {
                        use: "alert",
                        type: "success",
                        timeOut: 3000,
                    },
                    text: "Success Get Ingredients",
                },
            },
        });
    },
};

export default service;
