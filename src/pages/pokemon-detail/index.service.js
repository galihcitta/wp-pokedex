// begin reducer
import { servicesAction } from "../../reducer";
// end reducer

const service = {
    pokemonDetail: ({ dispatch, slug }) => {
        servicesAction(dispatch).reduxFetch({
            url: `pokemon/${slug}`,
            method: "GET",
            reducer: "service",
            key: "pokemonDetail",
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
    pokemonDetailClear: ({ dispatch }) => {
        servicesAction(dispatch).reduxClear({
            reducer: "service",
            type: "CLEAR",
            key: "pokemonDetail",
            group: "pokemon",
        });
    },
};

export default service;
