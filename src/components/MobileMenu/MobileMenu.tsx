import "./MobileMenu.scss";
import Props from "./Type";
import data from "../../../src/assets/data.json";
import PlanetData from "../PlanetDataType";
import { Link } from "react-router-dom";

const MobileMenu: React.FC<Props> = ({
  setMobileMenuOpened,
  planetId,
  setPlanet,
}) => {
  const handleClick = (planet: PlanetData) => {
    setPlanet(data.indexOf(planet));
    setMobileMenuOpened(false);
  };
  return (
    <div className="mobileMenu">
      <div className="mobileMenu__buttons">
        {data.map((planet) => (
          <Link
            to={`${planet.name}`}
            className="mobileMenu__button"
            onClick={() => handleClick(planet)}
          >
            <span
              className={`mobileButton__logo mobileButton__logo--${data.indexOf(
                planet
              )}`}
            ></span>
            <div className="mobileButton__content">
              <div className="mobileButton__title">{planet.name}</div>
              <span className="mobileButton__chevron"></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
