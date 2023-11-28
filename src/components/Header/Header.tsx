import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => (
  <HeaderStyled className="main-header">
    <img
      className="main-header__logo"
      src="./images/flixpicks_logo.png"
      alt="flixpicks logo on black letters"
    />
    <Navigation />
  </HeaderStyled>
);

export default Header;
