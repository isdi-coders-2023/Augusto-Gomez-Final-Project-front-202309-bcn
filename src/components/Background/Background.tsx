import { useAppSelector } from "../../store/hooks";

const Background = () => {
  const { imageUrl, name } = useAppSelector(
    (state) => state.moviesState.selectedMovie,
  );

  return (
    <div className="background">
      <img
        src={imageUrl}
        alt={`Background of ${name}`}
        className="background__image"
        width="320px"
        height="800px"
      />
    </div>
  );
};

export default Background;
