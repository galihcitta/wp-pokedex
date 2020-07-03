import React from "react";
import Grid from "./index";

export default { title: "Components|Grid", component: Grid };

export const GridDefault = () => {
    return (
        <Grid imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png">
            <Grid.Col lg={12} sm={12} xs={12} md={12}>
                <div
                    style={{
                        display: "block",
                        padding: 20,
                        background: "#ddd",
                    }}
                ></div>
            </Grid.Col>
        </Grid>
    );
};
export const GridSix = () => {
    return (
        <Grid imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png">
            <Grid.Col lg={6} sm={6} xs={6} md={6}>
                <div
                    style={{
                        display: "block",
                        padding: 20,
                        background: "#ddd",
                    }}
                ></div>
            </Grid.Col>
            <Grid.Col lg={6} sm={6} xs={6} md={6}>
                <div
                    style={{
                        display: "block",
                        padding: 20,
                        background: "#ddd",
                    }}
                ></div>
            </Grid.Col>
        </Grid>
    );
};
export const GridThree = () => {
    return (
        <Grid imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png">
            <Grid.Col lg={3} sm={3} xs={3} md={3}>
                <div
                    style={{
                        display: "block",
                        padding: 20,
                        background: "#ddd",
                    }}
                ></div>
            </Grid.Col>
            <Grid.Col lg={3} sm={3} xs={3} md={3}>
                <div
                    style={{
                        display: "block",
                        padding: 20,
                        background: "#ddd",
                    }}
                ></div>
            </Grid.Col>
            <Grid.Col lg={3} sm={3} xs={3} md={3}>
                <div
                    style={{
                        display: "block",
                        padding: 20,
                        background: "#ddd",
                    }}
                ></div>
            </Grid.Col>
            <Grid.Col lg={3} sm={3} xs={3} md={3}>
                <div
                    style={{
                        display: "block",
                        padding: 20,
                        background: "#ddd",
                    }}
                ></div>
            </Grid.Col>
        </Grid>
    );
};
export const GridFour = () => {
    return (
        <Grid imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png">
            <Grid.Col lg={4} sm={4} xs={4} md={4}>
                <div
                    style={{
                        display: "block",
                        padding: 20,
                        background: "#ddd",
                    }}
                ></div>
            </Grid.Col>
            <Grid.Col lg={4} sm={4} xs={4} md={4}>
                <div
                    style={{
                        display: "block",
                        padding: 20,
                        background: "#ddd",
                    }}
                ></div>
            </Grid.Col>
            <Grid.Col lg={4} sm={4} xs={4} md={4}>
                <div
                    style={{
                        display: "block",
                        padding: 20,
                        background: "#ddd",
                    }}
                ></div>
            </Grid.Col>
        </Grid>
    );
};
export const GridFourAndThree = () => {
    return (
        <div>
            <Grid imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png">
                <Grid.Col lg={3} sm={3} xs={3} md={3}>
                    <div
                        style={{
                            display: "block",
                            padding: 20,
                            background: "#ddd",
                        }}
                    ></div>
                </Grid.Col>
                <Grid.Col lg={3} sm={3} xs={3} md={3}>
                    <div
                        style={{
                            display: "block",
                            padding: 20,
                            background: "#ddd",
                        }}
                    ></div>
                </Grid.Col>
                <Grid.Col lg={3} sm={3} xs={3} md={3}>
                    <div
                        style={{
                            display: "block",
                            padding: 20,
                            background: "#ddd",
                        }}
                    ></div>
                </Grid.Col>
                <Grid.Col lg={3} sm={3} xs={3} md={3}>
                    <div
                        style={{
                            display: "block",
                            padding: 20,
                            background: "#ddd",
                        }}
                    ></div>
                </Grid.Col>
            </Grid>
            <Grid imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png">
                <Grid.Col lg={4} sm={4} xs={4} md={4}>
                    <div
                        style={{
                            display: "block",
                            padding: 20,
                            background: "#ddd",
                        }}
                    ></div>
                </Grid.Col>
                <Grid.Col lg={4} sm={4} xs={4} md={4}>
                    <div
                        style={{
                            display: "block",
                            padding: 20,
                            background: "#ddd",
                        }}
                    ></div>
                </Grid.Col>
                <Grid.Col lg={4} sm={4} xs={4} md={4}>
                    <div
                        style={{
                            display: "block",
                            padding: 20,
                            background: "#ddd",
                        }}
                    ></div>
                </Grid.Col>
            </Grid>
        </div>
    );
};
