import routesList from "../routes-list";

describe("test app", () => {
    it("routesList snapshoot", () => {
        expect(routesList).toMatchSnapshot();
    });
});
