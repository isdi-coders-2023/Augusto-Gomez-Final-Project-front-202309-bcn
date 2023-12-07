import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => (
  <LoadingStyled className="loading__container">
    <span className="loading__text">Loading . . .</span>
    <img
      src="images/loading.svg"
      alt="Loading icon"
      className="loading__icon"
      width="200"
      height="200"
    />
  </LoadingStyled>
);

export default Loading;
