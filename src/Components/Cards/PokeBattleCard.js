import React, { useState, useEffect } from "react";
import SimpleLoader from "../Loader/PokeSimpleLoader.js";

function PokeBattleCard({
  PokeName,
  PokeHp,
  Battle,
  SetPokeAttack,
  PokeHpOp,
  Fighter,
  DisableButton,
  Round,
  DisableButtonFighter,
}) {
  const [PokeStats, SetStats] = useState([]);
  const [PokeMoves, SetPokeMoves] = useState([]);
  const [PokeImage, SetPokeImage] = useState(
    "https://wallpaperaccess.com/download/pokemon-pokeball-24936"
  );
  const [PokeLoaderStats, SetPokeLoaderStats] = useState(false);
  const [PokeLoaderPokeMoves, SetPokeLoaderPokeMoves] = useState(false);

  let API = "https://localhost:44398";

  const progressStyle = {
    width: Fighter === 1 ? `${PokeHp}%` : `${PokeHpOp}%`,
  };

  useEffect(() => {
    //Getting Pokemon Image
    fetch(API + "/Post_Open_AI_Image?Text=" + PokeName.PokeName, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(PokeName),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.created != 0) {
          SetPokeImage(data.url);
        } else {
          SetPokeImage(
            "https://wallpaperaccess.com/download/pokemon-pokeball-24936"
          );
        }
      })
      .catch((error) => {
        SetPokeImage(
          "https://wallpaperaccess.com/download/pokemon-pokeball-24936"
        );
      });

    //Setting Poke Loader to true
    SetPokeLoaderStats(true);
    //Getting Pokemon stats
    fetch(API + "/Post_Pokemon_Stats?name=" + PokeName.PokeName, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(PokeName.PokeName),
    })
      .then((response) => response.json())
      .then((data) => {
        SetStats(data);

        SetPokeLoaderStats(false);
        SetPokeAttack(data);
      })
      .catch((error) => {});

    SetPokeLoaderPokeMoves(true);
    fetch(API + "/Post_Pokemon_Moves_By_Name?PokeName=" + PokeName.PokeName, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(PokeName.PokeName),
    })
      .then((response) => response.json())
      .then((data) => {
        SetPokeMoves(data);
        SetPokeLoaderPokeMoves(false);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="grid-cols-1">
      <div className="bg-white items-center border border-gray-200 rounded-lg shadow overflow-auto no-scrollbar">
        <div className="flex flex-col ">
          <div className="grid grid-cols-1 p-5">
            <br />
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              <h2 className="text-xl bold text-grey-900">
                Pokemon Power Stats
              </h2>
              <br />
              {PokeLoaderStats == false && (
                <div className="grid grid-cols-2">
                  <p>HP </p>
                  <div className="bg-gray-300 h-6 rounded-full">
                    <div
                      class="bg-green-600 h-6 rounded-full dark:bg-green-500 text-white font-bold"
                      style={progressStyle}
                    >
                      {Fighter === 1 ? `${PokeHp}%` : `${PokeHpOp}%`}
                    </div>
                  </div>
                  <p>Attack:</p>
                  <p>{PokeStats.baseAttack}</p>
                  <p>Defense:</p>
                  <p> {PokeStats.baseDefense}</p>
                  <p>Stamina:</p>
                  <p>{PokeStats.baseStamina}</p>
                </div>
              )}
              <div>
                {PokeLoaderStats && (
                  <section id="Loader" className="text-center">
                    <SimpleLoader />
                  </section>
                )}
              </div>
            </div>

            {/*Pokemon Moves*/}

            <br />
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              {PokeLoaderPokeMoves == false && (
                <div>
                  {PokeMoves && (
                    <div>
                      <h2 className="text-xl bold text-grey-900">
                        Pokemon Moves
                      </h2>
                      <br />
                      {PokeMoves.chargedMoves && (
                        <div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {PokeMoves.chargedMoves.map((item) => (
                              <div>
                                {(DisableButton && Fighter === 2) ||
                                (DisableButtonFighter && Fighter === 1) ? (
                                  <button
                                    disabled
                                    class=" w-full rounded-lg text-center text-white bg-red-600 border-0 py-2 px-6 focus:outline-none rounded text-sm"
                                  >
                                    {item}
                                  </button>
                                ) : (
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      Battle(item, PokeName, Fighter);
                                    }}
                                    class=" w-full rounded-lg text-center text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-sm"
                                  >
                                    {item}
                                  </button>
                                )}
                              </div>
                            ))}

                            {PokeMoves.eliteChargedMoves.map((item) => (
                              <div>
                                {(DisableButton && Fighter === 2) ||
                                (DisableButtonFighter && Fighter === 1) ? (
                                  <button
                                    disabled
                                    class=" w-full rounded-lg text-center text-white bg-red-600 border-0 py-2 px-6 focus:outline-none rounded text-sm"
                                  >
                                    {item}
                                  </button>
                                ) : (
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      Battle(item, PokeName, Fighter);
                                    }}
                                    class=" w-full rounded-lg text-center text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-sm"
                                  >
                                    {item}
                                  </button>
                                )}
                              </div>
                            ))}
                            {PokeMoves.fastMoves.map((item) => (
                              <div>
                                {(DisableButton && Fighter === 2) ||
                                (DisableButtonFighter && Fighter === 1) ? (
                                  <button
                                    disabled
                                    class=" w-full rounded-lg text-center text-white bg-red-600 border-0 py-2 px-6 focus:outline-none rounded text-sm"
                                  >
                                    {item}
                                  </button>
                                ) : (
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      Battle(item, PokeName, Fighter);
                                    }}
                                    class=" w-full rounded-lg text-center text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-sm"
                                  >
                                    {item}
                                  </button>
                                )}
                              </div>
                            ))}

                            {PokeMoves.eliteFastMoves.map((item) => (
                              <div>
                                {(DisableButton && Fighter === 2) ||
                                (DisableButtonFighter && Fighter === 1) ? (
                                  <button
                                    disabled
                                    class=" w-full rounded-lg text-center text-white bg-red-600 border-0 py-2 px-6 focus:outline-none rounded text-sm"
                                  >
                                    {item}
                                  </button>
                                ) : (
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      Battle(item, PokeName, Fighter);
                                    }}
                                    class=" w-full rounded-lg text-center text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-sm"
                                  >
                                    {item}
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <br />
                    </div>
                  )}
                </div>
              )}
              <div>
                {PokeLoaderPokeMoves && (
                  <section id="Loader" className="text-center">
                    <SimpleLoader />
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeBattleCard;
