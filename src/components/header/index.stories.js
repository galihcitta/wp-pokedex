import React from "react";
import { MemoryRouter } from "react-router";

import Header from "./index";

export default {
    title: "Layouts|Header",
    component: Header,
    parameters: {
        viewport: { defaultViewport: "dekstop" },
    },
};

export const HeaderDefault = () => {
    return (
        <MemoryRouter>
            <Header />
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                exercitationem tempore possimus odio eaque recusandae
                accusantium, officia rerum vero error nobis impedit? Nisi
                pariatur neque incidunt aspernatur, animi in perferendis!
            </div>
        </MemoryRouter>
    );
};
