import HeaderStyled from "./HeaderStyled";

const Header = () => (
  <HeaderStyled className="main-header">
    <img
      className="main-header__logo"
      src="./images/flixpicks_logo.png"
      alt="flixpicks logo on black letters"
    />
  </HeaderStyled>
);

export default Header;
