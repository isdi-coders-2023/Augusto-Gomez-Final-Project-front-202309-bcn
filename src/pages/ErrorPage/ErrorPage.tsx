import ErrorPageStyled from "./ErrorPageStyled";

const ErrorPage = () => (
  <ErrorPageStyled className="error-page">
    <h2 className="error-page__title">Page not found</h2>
    <img
      src="images/error-image.svg"
      alt="Cut cinema reel drawing"
      className="error-page__image"
      width="265"
      height="265"
    />
  </ErrorPageStyled>
);

export default ErrorPage;
