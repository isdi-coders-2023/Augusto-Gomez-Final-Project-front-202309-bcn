import LoadingStyled from "./LoadingStyled";

const Loading = () => (
  <LoadingStyled className="loading">
    <div className="loading__container">
      <span className="loading__text">Loading . . .</span>
      <img
        src="images/loading.svg"
        alt="Loading icon"
        className="loading__icon"
      />
    </div>
  </LoadingStyled>
);

export default Loading;
