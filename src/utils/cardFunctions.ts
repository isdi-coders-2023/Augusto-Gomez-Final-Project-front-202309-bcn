const getScoreStars = (score: string) => {
  const roundedScore = Math.floor(+score);

  let stars = "";

  switch (roundedScore) {
    case 0:
      stars = "🤮";
      break;
    case 1:
      stars = "⭐";
      break;
    case 2:
      stars = "⭐⭐";
      break;
    case 3:
      stars = "⭐⭐⭐";
      break;
    case 4:
      stars = "⭐⭐⭐⭐";
      break;
    case 5:
      stars = "⭐⭐⭐⭐⭐";
      break;
  }

  return stars;
};

export default getScoreStars;
