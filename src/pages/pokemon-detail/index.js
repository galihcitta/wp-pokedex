import React from "react";

import PokemonDetailContent from "./index.content";
import PokemonDetailLoading from "./index.loading";
import service from "./index.service";

//begin global import
import CommonFetchData from "../../helper";
//end global import

const PokemonDetail = ({
    match: {
        params: { slug },
    },
}) => {
    return (
        <CommonFetchData
            service={{
                serviceFunction: service.pokemonDetail,
                serviceClear: service.pokemonDetailClear,
                slug: slug,
                isReady: true,
                reducer: "service",
                key: "pokemonDetail",
                group: "pokemon",
            }}
            renderLoading={() => <PokemonDetailLoading></PokemonDetailLoading>}
            renderSuccess={response => {
                return (
                    <PokemonDetailContent
                        resultData={response}
                    ></PokemonDetailContent>
                );
            }}
            renderFailed={() => <div>something wrong</div>}
        ></CommonFetchData>
    );
};

export default PokemonDetail;
