import React, { useState, useEffect } from "react";
import Pokemon from "../Views/Pokemon.js";
import Loader from "../Loader/PokemonLoader.js";

function Index() {
  const [PokeLoader, SetPokeLoader] = useState(false);
  const [Year, SetYear] = useState(null);
  const [cardData, SetcardData] = useState([]);
  const [cardClear, SetCardClear] = useState([]);

  let API = "https://localhost:44398";

  useEffect(() => {
    const d = new Date();
    SetYear(d.getFullYear());
    SetPokeLoader(true);
    fetch(API + "/Get_Pokemon_Names_And_Type", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        SetcardData(data);
        SetCardClear(data);
        SetPokeLoader(false);
        SetCardClear = { SetCardClear };
        SetcardData = { SetcardData };
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <div class="bg-gray-100 pb-10">
        <header class="bg-white shadow">
          <nav class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="text-2xl font-bold text-gray-800">Pokemon Index</div>
              <div class="flex items-center">
                <a
                  class="text-gray-800 hover:text-gray-600 hover:underline px-3 py-2"
                  href="#Home"
                >
                  Home
                </a>
                <a
                  class="text-gray-800 hover:text-gray-600 hover:underline px-3 py-2"
                  href="#Pokemon"
                >
                  All Pokemon
                </a>
              </div>
            </div>
          </nav>
        </header>

        <section id="Home" class="text-gray-700 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded-full"
                alt="hero"
                src="https://images3.alphacoders.com/118/1187753.png"
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Master the World of Pokémon: Your Ultimate Online Resource for
                Pokémon Index and Stats
              </h1>
              <p class="mb-8 leading-relaxed text-sm">
                Welcome to the ultimate online resource for all things Pokémon!
                Our website is dedicated to providing you with a comprehensive
                index of all the Pokémon out there, along with detailed
                information on their stats, abilities, moves, and more. Whether
                you're a seasoned Pokémon trainer or just starting out on your
                journey, our website is the perfect companion to help you catch
                'em all!
              </p>
              <p class="mb-8 leading-relaxed text-sm">
                Our database is constantly updated with the latest information
                on all Pokémon, from the original Kanto region to the newest
                additions in Galar. You can search for Pokémon by name, type, or
                region, and our user-friendly interface makes it easy to find
                the information you need. Plus, our community of Pokémon fans is
                always adding new tips, tricks, and strategies to help you
                become a better trainer.
              </p>
              <p class="mb-8 leading-relaxed text-sm">
                Whether you're looking to build the ultimate team of Pokémon for
                battling, trying to catch every single one for completion's
                sake, or just curious to learn more about your favorite Pokémon,
                our website has everything you need. So come join the Pokémon
                community today and let's catch 'em all together!
              </p>
            </div>
          </div>
        </section>

        <section id="Pokemon" class="text-gray-700 body-font">
          <Pokemon
            pokeLoader={SetPokeLoader}
            cardData={cardData}
            cardClear={cardClear}
            SetcardData={SetcardData}
          />
        </section>

        {PokeLoader && (
          <section id="Loader">
            <Loader />
          </section>
        )}

        <footer class="bg-white">
          <div class="container mx-auto px-6 py-4">
            <div class="mt-4 border-t-2 border-gray-300 flex flex-col items-center">
              <div class="sm:w-2/3 text-center py-4">
                <p class="text-sm text-gray-500 font-bold mb-2">
                  © {Year} by Delon J Naidoo
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Index;
