import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => (
  <NavigationStyled className="navigation-bar">
    <ul className="navigation-bar__container">
      <li className="navigation-bar__link-container">
        <NavLink className="navigation-bar__link" to={"/home"}>
          <span className="navigation-bar__text">Home</span>
          <img
            src="./images/homeIcon.svg"
            alt="House navigation icon"
            width="48"
            height="48"
            className="navigation-bar__icon"
          />
        </NavLink>
      </li>
      <li className="navigation-bar__link-container">
        <NavLink className="navigation-bar__link" to={""}>
          <span className="navigation-bar__text">Add movie</span>
          <img
            src="./images/addIcon.svg"
            alt="Add movie navigation icon"
            width="48"
            height="48"
            className="navigation-bar__icon"
          />
        </NavLink>
      </li>
    </ul>
  </NavigationStyled>
);

export default Navigation;
