import { useState } from "react";
import PokePop from "../Cards/PokePopupCard.js";

function PokeLandingCard({ form, pokeId, pokeName, pokeType }) {
  const [PokePopShow, SetPokePopShow] = useState(false);

  function showPokePop() {
    SetPokePopShow(true);
  }
  return (
    <div>
      <div
        onClick={showPokePop}
        className="border border-gray-100 shadow hover:shadow-lg bg-white cursor-pointer body-font"
      >
        <div className="p-5">
          <div className="grid grid-cols-1">
            <p className="mb-2 text-sm font-bold tracking-tight text-left">
              PokeID: {pokeId}
            </p>
            <p className="mb-2 text-sm font-bold tracking-tight text-left">
              Type:{" "}
              {pokeType.map((item) => (
                <span className="overflow-auto no-scrollbar">{item},</span>
              ))}
            </p>
          </div>
          <p className="mb-2 text-xl font-bold tracking-tight ">{pokeName}</p>
        </div>
        <div className="relative h-1/2 w-full">
          <img
            className=""
            src="https://wallpaperaccess.com/download/pokemon-pokeball-24936"
            alt=""
          />
        </div>
      </div>
      {PokePopShow && (
        <div>
          <PokePop
            PokeId={pokeId}
            PokeName={pokeName}
            PokeType={pokeType}
            show={SetPokePopShow}
          />
        </div>
      )}
    </div>
  );
}

export default PokeLandingCard;
