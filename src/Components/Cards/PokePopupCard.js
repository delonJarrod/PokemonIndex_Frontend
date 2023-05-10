import React, { useState, useEffect } from "react";
import Loader from "../Loader/PokemonLoader.js";
import SimpleLoader from "../Loader/PokeSimpleLoader.js";

function PokePopupCard({ PokeId, PokeName, PokeType, show }) {
  const [PokeStats, SetStats] = useState([]);
  const [PokeEvolution, SetPokeEvolution] = useState([]);
  const [PokeMoves, SetPokeMoves] = useState([]);
  const [PokeImage, SetPokeImage] = useState(
    "https://wallpaperaccess.com/download/pokemon-pokeball-24936"
  );
  const [PokeLoaderStats, SetPokeLoaderStats] = useState(false);
  const [PokeLoaderEvolution, SetPokeLoaderEvolution] = useState(false);
  const [PokeLoaderPokeMoves, SetPokeLoaderPokeMoves] = useState(false);

  let API = "https://localhost:44398";

  useEffect(() => {
    //Getting Pokemon Image
    fetch(API + "/Post_Open_AI_Image?Text=" + PokeName, {
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
    fetch(API + "/Post_Pokemon_Stats?name=" + PokeName, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(PokeName),
    })
      .then((response) => response.json())
      .then((data) => {
        SetStats(data);
        SetPokeLoaderStats(false);
      })
      .catch((error) => {});

    //Getting pokemon next Evolution
    SetPokeLoaderEvolution(true);
    fetch(API + "/Post_Pokemon_Evolution?name=" + PokeName, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(PokeName),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        SetPokeEvolution(data.evolutions[0]);
        SetPokeLoaderEvolution(false);
      })
      .catch((error) => {
        SetPokeLoaderEvolution(false);
      });

    SetPokeLoaderPokeMoves(true);
    fetch(API + "/Post_Pokemon_Moves?PokeID=" + PokeId, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(PokeName),
    })
      .then((response) => response.json())
      .then((data) => {
        SetPokeMoves(data);
        SetPokeLoaderPokeMoves(false);
      })
      .catch((error) => {});
  }, []);

  function close() {
    show(false);
    SetPokeImage("https://wallpaperaccess.com/download/pokemon-pokeball-24936");
  }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-100 bg-opacity-75 flex flex-col items-center justify-center">
      <div className=" bg-white items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 overflow-auto no-scrollbar">
        <div className="flex flex-col ">
          <img class="" src={PokeImage} alt="" />

          <div className="grid grid-cols-1 p-5">
            <div className="grid grid-cols-2">
              <p>PokeId: {PokeId}</p>

              <p>
                Type:
                <span>
                  {PokeType.map((item) => (
                    <span className="overflow-auto no-scrollbar">{item},</span>
                  ))}
                </span>
              </p>
              <br />
            </div>
            <p className="text-lg">{PokeName}</p>
            <br />
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              <h2 className="text-xl bold text-grey-900">
                Pokemon Power Stats
              </h2>
              <br />
              {PokeLoaderStats == false && (
                <div className="grid grid-cols-2 ">
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

            <br />
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              {PokeLoaderEvolution == false && (
                <div>
                  {PokeEvolution && (
                    <div>
                      <h2 className="text-xl bold text-grey-900">
                        Pokemon Next Evolution
                      </h2>
                      <br />
                      <div className="grid grid-cols-2 ">
                        <p>Evolves Into:</p>
                        <p>{PokeEvolution.pokemonName}</p>
                        <p>Rare Candy Required:</p>
                        <p> {PokeEvolution.candyRequired}</p>
                        <p>PokeID:</p>
                        <p>{PokeEvolution.pokemonId}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div>
                {PokeLoaderEvolution && (
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
                          <h1 className="text-lg bold text-grey-900">
                            Charged Moves
                          </h1>
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            {PokeMoves.chargedMoves.map((item) => (
                              <p>
                                {"-> "}
                                {item}.
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                      <br />
                      {PokeMoves.eliteChargedMoves && (
                        <div>
                          <h1 className="text-lg bold text-grey-900">
                            Elite Charged Moves
                          </h1>
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            {PokeMoves.eliteChargedMoves.map((item) => (
                              <p>
                                {"-> "}
                                {item}.
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                      <br />
                      {PokeMoves.fastMoves && (
                        <div>
                          <h1 className="text-lg bold text-grey-900">
                            Fast Moves
                          </h1>
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            {PokeMoves.fastMoves.map((item) => (
                              <p>
                                {"-> "}
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      <br />
                      {PokeMoves.eliteFastMoves && (
                        <div>
                          <h1 className="text-lg bold text-grey-900">
                            Elite Fast Moves
                          </h1>
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            {PokeMoves.eliteFastMoves.map((item) => (
                              <p>
                                {"-> "}
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
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
        <div>
          <button
            onClick={close}
            class=" w-full rounded-b-lg text-center text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PokePopupCard;
