import generateRating from "./generateRating";

describe("generateRating", () => {
    it("generates correct rating value for our component", () => {
        const actual = generateRating(10);
        const expected = 5;
        expect(actual).toBe(expected);
    });
});