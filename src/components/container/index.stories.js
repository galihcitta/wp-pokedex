import React from "react";
import Container from "./index";

export default { title: "Layouts|Container", component: Container };

export const ContainerDefault = () => {
    return (
        <Container>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            consequatur quasi ex hic recusandae, consequuntur possimus ratione
            vel natus autem soluta sapiente, minima, aspernatur non voluptate.
            Iusto tempora nobis pariatur.
        </Container>
    );
};
export const ContainerNoPadding = () => {
    return (
        <Container noPaddding>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            consequatur quasi ex hic recusandae, consequuntur possimus ratione
            vel natus autem soluta sapiente, minima, aspernatur non voluptate.
            Iusto tempora nobis pariatur.
        </Container>
    );
};
