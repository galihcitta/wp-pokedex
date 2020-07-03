import React from "react";
import AvatarHeader from "./index";
import dummyImage from "../../static/dumy-pokemon.png";

export default { title: "Components|AvatarHeader", component: AvatarHeader };

export const AvatarHeaderDefault = () => {
    return <AvatarHeader></AvatarHeader>;
};
export const AvatarHeaderWithImage = () => {
    return <AvatarHeader image={dummyImage}></AvatarHeader>;
};

export const AvatarHeaderWithName = () => {
    return <AvatarHeader name="Burbasur" image={dummyImage}></AvatarHeader>;
};
export const AvatarHeaderWithAbilities = () => {
    return (
        <AvatarHeader
            name="Burbasur"
            abilities={[
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
            image={dummyImage}
        ></AvatarHeader>
    );
};
export const AvatarHeaderLoading = () => {
    return <AvatarHeader.Loading></AvatarHeader.Loading>;
};
