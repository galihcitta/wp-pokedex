import React from "react";
import Abilities from "./index";

export default { title: "Components|Abilities", component: Abilities };

export const AbilitesDefault = () => {
    return (
        <Abilities
            data={[
                {
                    ability: {
                        name: "chlorophyll",
                        url: "https://pokeapi.co/api/v2/ability/34/",
                    },
                    is_hidden: true,
                    slot: 3,
                },
                {
                    ability: {
                        name: "overgrow",
                        url: "https://pokeapi.co/api/v2/ability/65/",
                    },
                    is_hidden: false,
                    slot: 1,
                },
            ]}
        ></Abilities>
    );
};
export const AbilitesLoading = () => {
    return <Abilities.Loading></Abilities.Loading>;
};
