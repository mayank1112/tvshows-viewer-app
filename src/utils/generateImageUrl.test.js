import generateImageUrl from "./generateImageUrl";

describe("generateImageUrl", () => {
    it("generates correct URL", () => {
        const actual = generateImageUrl("#");
        const expected = "https://image.tmdb.org/t/p/w300#";
        expect(actual).toBe(expected);
    });
});