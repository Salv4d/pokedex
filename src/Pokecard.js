import { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience, idx } = this.props;
    const POKE_API =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

    return (
      <div className="Pokecard" key={idx}>
        <h2 className="Pokecard-name">{name}</h2>
        <img
          className="Pokecard-img"
          src={`${POKE_API}${this.normalizeId(id)}.png`}
          alt={`${name}`}
        />
        <div className="Pokecard-props">
          <p className="Pokecard-type">Type: {this.capitalize(type)}</p>
          <p className="Pokecard-exp">Exp: {base_experience}</p>
        </div>
      </div>
    );
  }

  normalizeId(id) {
    return String(id).padStart(3, "0");
  }

  capitalize(word) {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  }
}

export default Pokecard;
