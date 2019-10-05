import get from "./get";

global.fetch = require('jest-fetch-mock');

describe("get", () => {
    it("calls fetch to retrieve data from server", () => {
        get('#');
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});