import getScoreStars from "./cardFunctions";

describe("Given a getScoreStars function", () => {
  describe("When it receives a score 0, 1, 2, 3 ,4 and 5", () => {
    test("Then it should return '⭐' '⭐⭐' '⭐⭐⭐' '⭐⭐⭐⭐' '⭐⭐⭐⭐⭐' and '🤮'", () => {
      const stars = ["🤮", "⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

      stars.forEach((star, starPosition) => {
        expect(getScoreStars(starPosition.toString())).toEqual(star);
      });
    });
  });
});
