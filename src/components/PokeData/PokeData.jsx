import { stringUtils } from "../../utils";
import "./PokeData.styles.css";
import { pokeDataUtils } from "./PokeData.utils";

const colorClassNames = {
  0: "bg-green",
  1: "bg-yellow",
  2: "bg-blue",
};

export const PokeData = ({ pokemon }) => {
  const { name, sprites, stats, types } = pokemon;

  const frontImage = pokeDataUtils.getImages(sprites);
  console.log({ pokemon });
  return (
    <div>
      <div className="header">
        <h2>{stringUtils.capitalize(name)}</h2>
        {types.map(({ type }, index) => (
          <span className={`type ${colorClassNames[index]}`}>{type.name}</span>
        ))}
      </div>

      <div className="content">
        <img
          src={frontImage}
          alt={`${name}-frontImage`}
          width="500"
          height="500"
        />
        <div className="detailsContent">
          <table className="abilityTable">
            <caption>Habilidades</caption>
            <thead>
              <tr>
                {stats.map(({ stat }) => (
                  <th>{stringUtils.capitalize(stat.name)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stats.map(({ base_stat }) => (
                <th>{base_stat}</th>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
