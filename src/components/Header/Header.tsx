import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => (
  <HeaderStyled className="main-header">
    <img
      className="main-header__logo"
      src="images/flixpicks_logo.svg"
      alt="flixpicks logo on black letters"
      width="197"
      height="100"
    />
    <Navigation />
  </HeaderStyled>
);

export default Header;
