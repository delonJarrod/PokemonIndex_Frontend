import React, { useState, useEffect } from "react";
import PokeLandingCards from "../Cards/PokeLandingCard.js";
import Battle from "../Views/Battle.js";

function Pokemon({ cardData, cardClear, SetCardClear, SetcardData }) {
  const [search, SetSearch] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);
  const [PokeBattles, SetPokeBattle] = useState("");
  const [PokeBattles2, SetPokeBattle2] = useState("");
  const [PokeBattlesType, SetPokeBattlesType] = useState();
  const [PokeBattlesType2, SetPokeBattlesType2] = useState();
  const [BattleCheck, SetBattleCheck] = useState(0);
  const [PokeBattle, SetPokePokeBattle] = useState(false);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  function changeSearch(e) {
    SetSearch(e.target.value);
    if (e.target.value === null || e.target.value === "") {
      SetcardData(cardClear);
    }
  }

  function Search(e) {
    e.preventDefault();
    if (!search) {
      SetcardData(cardClear);
    } else {
      var temp = cardData.filter(
        (x) =>
          x.pokemonName
            .toString()
            .toLowerCase()
            .includes(search.toString().toLowerCase()) ||
          x.pokemonId
            .toString()
            .toLowerCase()
            .includes(search.toString().toLowerCase()) ||
          x.type
            .toString()
            .toLowerCase()
            .includes(search.toString().toLowerCase())
      );
      SetcardData(temp);
    }
  }

  function battle() {
    SetPokePokeBattle(true);
  }
  return (
    <div class="bg-gray-100">
      <div id="type" class="text-gray-700 body-font md:pb-10">
        <div
          id="catergorySlider"
          className="mt-10"
          style={{ paddingLeft: "2%", paddingRight: "2%" }}
        >
          <div className="overflow-auto no-scrollbar md:scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h1 className="text-2xl text-2xl font-bold mb-10">
                  All Pokemon
                </h1>
              </div>
              <div>
                <form onSubmit={Search}>
                  <label
                    for="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Search Pokemon Name, Pokemon Type or Poke ID"
                      onChange={changeSearch}
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>

              {PokeBattles.PokeName && (
                <div className="text-center md:col-span-2 w-full p-8 bg-white items-center border border-gray-200 rounded-3xl shadow mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div>
                      {PokeBattles.PokeName && (
                        <div>
                          <h1 className="text-3xl font-bold tracking-tight italic">
                            {PokeBattles.PokeName}
                          </h1>
                          <span>
                            {PokeBattlesType.map((item) => (
                              <span className="overflow-auto no-scrollbar">
                                {item},
                              </span>
                            ))}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center items-center">
                      {" "}
                      {/* Add this div with flex classes */}
                      <img
                        alt="VS"
                        src="https://freepngimg.com/thumb/symbol/97383-versus-pic-png-file-hd.png"
                        style={{ height: "100px" }}
                      />
                    </div>
                    <div>
                      {PokeBattles2.PokeName && (
                        <div>
                          <h1 className="text-3xl font-bold tracking-tight italic">
                            {PokeBattles2.PokeName}
                          </h1>
                          <span>
                            {PokeBattlesType2.map((item) => (
                              <span className="overflow-auto no-scrollbar">
                                {item},
                              </span>
                            ))}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div></div>
                    <div>
                      <button
                        onClick={battle}
                        class=" w-full rounded-3xl text-center text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-sm"
                      >
                        Battle
                      </button>
                    </div>

                    <div></div>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {currentCards.map((item) => (
                <div key={item.Id}>
                  <PokeLandingCards
                    form={item.form}
                    pokeId={item.pokemonId}
                    pokeName={item.pokemonName}
                    pokeType={item.type}
                    SetPokeBattle={SetPokeBattle}
                    SetPokeBattle2={SetPokeBattle2}
                    SetPokeBattlesType={SetPokeBattlesType}
                    SetPokeBattlesType2={SetPokeBattlesType2}
                    SetBattleCheck={SetBattleCheck}
                    BattleCheck={BattleCheck}
                  />{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 overflow-auto no-scrollbar md:scrollbar gap-6">
        <button
          className={`${
            currentPage === 1 ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-700"
          } text-white font-bold py-2 px-4 rounded-l`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {/* <div className="flex gap-2">
                {cardData.length > 0 &&
                  Array(Math.ceil(cardData.length / cardsPerPage))
                    .fill()
                    .map((_, index) => (
                      <button
                        key={index}
                        className={`${
                          currentPage === index + 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white"
                        } font-bold py-2 px-4 rounded`}
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </button>
                    ))}
              </div> */}
        <button
          className={`${
            currentPage === Math.ceil(cardData.length / cardsPerPage)
              ? "bg-gray-300"
              : "bg-blue-500 hover:bg-blue-700"
          } text-white font-bold py-2 px-4 rounded-r`}
          onClick={nextPage}
          disabled={currentPage === Math.ceil(cardData.length / cardsPerPage)}
        >
          {">"}
        </button>
      </div>
      {PokeBattle && (
        <section id="Battle">
          <Battle
            close={SetPokePokeBattle}
            Pokemon1={PokeBattles}
            Pokemon2={PokeBattles2}
            PokeBattlesType={PokeBattlesType}
            PokeBattlesType2={PokeBattlesType2}
          />
        </section>
      )}
    </div>
  );
}

export default Pokemon;
