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

    let gameResult;

    if (this.props.isWinner) {
      gameResult = <h3 className="Pokedex-winner">["Winner!"]</h3>;
    } else {
      gameResult = <h3 className="Pokedex-loser">["Loser"]</h3>;
    }

    return (
      <div className="Pokedex">
        <h2 className="Pokedex-title">Pokedex Hand {this.props.hand}</h2>
        {gameResult}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">{cards}</div>
      </div>
    );
  }
}

export default Pokedex;
