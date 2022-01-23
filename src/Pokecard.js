import { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  static defaultProps = {
    id: 4,
    name: "Charmander",
    type: "fire",
    base_experience: 62,
  };

  render() {
    const { id, name, type, base_experience, idx } = this.props;

    return (
      <div className="Pokecard" key={idx}>
        <h2 className="Pokecard-name">{name}</h2>
        <img
          className="Pokecard-img"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.normalizeId(
            id
          )}.png`}
        />
        <div className="Pokecard-props">
          <p className="Pokecard-type">Type: {type}</p>
          <p className="Pokecard-exp">Exp: {base_experience}</p>
        </div>
      </div>
    );
  }

  normalizeId(id) {
    return String(id).padStart(3, "0");
  }
}

export default Pokecard;
