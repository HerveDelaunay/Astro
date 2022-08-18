import data from "../../assets/data.json";
import "./Header.scss";
import Props from "./Type";
import PlanetData from "../PlanetDataType";
import { Link } from "react-router-dom";

const Header: React.FC<Props> = ({
  setPlanet,
  planetId,
  setInternalStructure,
  setSurfaceGeology,
  setOverview,
  mobileMenuOpened,
  setMobileMenuOpened,
}) => {
  const handleClick = (planet: PlanetData) => {
    setPlanet(data.indexOf(planet));
    setInternalStructure(false);
    setSurfaceGeology(false);
    setOverview(true);
  };
  const handleClickMenu = () => {
    if (mobileMenuOpened) {
      setMobileMenuOpened(false);
      return;
    }
    setMobileMenuOpened(true);
  };

  return (
    <div className="header">
      <a href="/" className="header__title">
        The Planets
      </a>
      <div className="header__planetNames">
        {data.map((planet) => (
          <Link
            to={`${planet.name}`}
            className={`planetLink ${
              window.location.pathname === `/${planet.name}`
                ? `planetLink--${planetId}`
                : `${planet.name}` === "Mercury" &&
                  window.location.pathname === "/"
                ? "planetLink--0"
                : ""
            }`}
            onClick={() => handleClick(planet)}
            key={data.indexOf(planet)}
          >
            {planet.name}
          </Link>
        ))}
      </div>
      {mobileMenuOpened ? (
        <button
          className="mobileMenuLogo--active"
          onClick={() => handleClickMenu()}
        ></button>
      ) : (
        <button
          className="mobileMenuLogo"
          onClick={() => handleClickMenu()}
        ></button>
      )}
      <div className="header__patternDivider"></div>
    </div>
  );
};

export default Header;
