import getScoreStars from "./cardFunctions";

describe("Given a getScoreStars function", () => {
  describe("When it receives a score of 3", () => {
    test("Then it should return '⭐⭐⭐' ", () => {
      const expectedStars = "⭐⭐⭐";
      const score = "3";

      const stars = getScoreStars(score);

      expect(stars).toBe(expectedStars);
    });
  });
});
