import React, { Component } from "react";
// import "intersection-observer";
import InfiniteScroll from "./index";
import { stub } from "sinon";

global.scrollTo = jest.fn();
const spyScrollTo = jest.fn();

describe("Card Moves Component", () => {
    beforeEach(() => {
        Object.defineProperty(global.window, "scrollTo", {
            value: spyScrollTo,
        });

        Object.defineProperty(global.window, "scrollY", { value: 1 });
        spyScrollTo.mockClear();
    });

    it("check card-element have 10 element  <InfiniteScroll Check Children/>", () => {
        const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const handleLoadData = stub();
        const wrapper = mount(
            <div>
                <InfiniteScroll
                    threshold={20}
                    isLoading={false}
                    onLoadData={handleLoadData}
                    hasMore={false}
                    loadingComponent={<div test-id="loading">Loading</div>}
                >
                    {items.map(item => {
                        return (
                            <div key={item} className="card-element">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Quae consequatur saepe
                                quisquam rem explicabo odit facilis sit
                                repudiandae, nam labore molestiae quasi repellat
                                assumenda, optio culpa! Dolore deleniti
                                accusantium commodi.
                            </div>
                        );
                    })}
                </InfiniteScroll>
            </div>,
        );
        expect(wrapper.find(".card-element").length).toEqual(10);
    });

    it("when is loading true and show loading", () => {
        const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const onScroll = jest.fn();
        const wrapper = mount(
            <InfiniteScroll
                threshold={20}
                isLoading={true}
                onLoadData={onScroll}
                hasMore={true}
                loadingComponent={
                    <div id="loading" test-id="loading">
                        Loading
                    </div>
                }
            >
                {items.map(item => {
                    return (
                        <div key={item} className="card-element">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quae consequatur saepe quisquam rem explicabo
                            odit facilis sit repudiandae, nam labore molestiae
                            quasi repellat assumenda, optio culpa! Dolore
                            deleniti accusantium commodi.
                        </div>
                    );
                })}
            </InfiniteScroll>,
        );
        expect(wrapper.find("#loading").length).toEqual(1);
    });
});
