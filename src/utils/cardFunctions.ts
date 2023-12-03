const getScoreStars = (score: string) => {
  const roundedScore = Math.floor(+score);

  const stars = Array.from({ length: roundedScore }, () => "⭐").join("");

  return stars;
};

export default getScoreStars;
