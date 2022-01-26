import { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const cards = this.props.pokemon.map(
      ({ id, name, type, base_experience }, idx) => (
        <Pokecard
          id={id}
          name={name}
          type={type}
          base_experience={base_experience}
          key={idx}
        />
      )
    );
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-title">Pokedex</h1>
        <div className="Pokedex-cards">{cards}</div>
      </div>
    );
  }
}

export default Pokedex;
