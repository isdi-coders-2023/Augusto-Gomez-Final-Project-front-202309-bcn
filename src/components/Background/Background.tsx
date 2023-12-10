import { useAppSelector } from "../../store/hooks";
import BackgroundStyled from "./BackgroundStyled";

const Background = () => {
  const { imageUrl, name } = useAppSelector(
    (state) => state.moviesState.selectedMovie,
  );

  return (
    <BackgroundStyled className="background">
      <img
        src={imageUrl}
        alt={`Background of ${name}`}
        className="background__image"
        width="320px"
        height="800px"
      />
      <div className="background__gradient"></div>
    </BackgroundStyled>
  );
};

export default Background;
