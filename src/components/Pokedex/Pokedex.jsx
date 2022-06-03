import "./App.css";
import poke from "./pokeExample";
import { PokedexPart } from "./components/test";
import {
  SideGreenTerminalDisplay,
  SideOrangeRightButton,
  SideOrangeLeftButton,
  MainRedIndicator,
  MainDisplayScreen,
  MainYellowButton,
  MainBlueButton,
} from "./components/PokedexInterfaces";

const Pokedex = ({ pokemon }) => {
  return (
    <div id="app">
      <div className="content">
        <svg
          version="1.1"
          id="Calque_1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1100 600"
          xmlSpace="preserve"
          className="test"
        >
          <g id="XMLID_1_">
            <PokedexPart />
            <MainYellowButton />
            <MainBlueButton />
            <MainDisplayScreen />

            <image
              href={pokemon.sprites.front_default}
              transform="matrix(2, 0, 0, 2, 166, 153)"
            />

            <MainRedIndicator />
            <path
              id="XMLID_98_"
              className="st36"
              d="M238.2,145.1c0.1,2.2-1,3.7-3,3.8c-1.9,0.2-4.1-1.7-4.1-3.5c0-1.7,1.6-3.3,3.5-3.5
		C236.9,141.9,238.1,142.9,238.2,145.1z"
            />
            <path
              id="XMLID_99_"
              className="st37"
              d="M259,145.2c0.1,1.7-1.6,3.6-3.3,3.8c-1.7,0.2-3.6-1.4-3.7-3.2c-0.2-2.4,1-3.7,3.4-3.8
		C257.4,142,258.8,143.2,259,145.2z"
            />
            <path
              id="XMLID_100_"
              className="st38"
              d="M357.2,451.4c-4.6-0.1-8.7-3.9-8.6-8c0.1-4.5,4.4-8.7,8.8-8.7c5.4,0,9.1,3.7,9.1,8.9
		C366.4,448.3,362.5,451.6,357.2,451.4z"
            />
            <path
              id="XMLID_101_"
              className="st39"
              d="M143.4,19.9c17.3-1.3,30.8,16.4,30.9,30c0.1,17.8-15.9,32.3-31.1,31.6
		c-17.5-0.8-30.9-13.5-31-31C112.1,33.6,126.9,18.7,143.4,19.9z"
            />
            <SideGreenTerminalDisplay />
            <text>
              <textPath
                xlinkHref="#XMLID_112_"
                startOffset="50%"
                textAnchor="middle"
              >
                {poke.name}
              </textPath>
            </text>
            <SideOrangeRightButton />
            <SideOrangeLeftButton />
            <path
              id="XMLID_122_"
              className="st42"
              d="M134.8,40.9c-1.7,0-3.3,0.2-5,0c-2.9-0.3-4.4-2.6-3.6-5.3c2.3-7.6,13.4-13.3,21-10.7
		c3.2,1.1,4.9,3.4,5.8,6.3c1,3.4,0,5.1-3.2,6.9C146.6,39.7,140.3,40.9,134.8,40.9z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Pokedex;
