import React, { useState, useEffect } from "react";
import PokeBattleCard from "../Cards/PokeBattleCard";
import PokeText from "../Cards/PokeText.js";
import PokeJson from "../../Json/PokeTypeEffectiveness.json";
import MovesType from "../../Json/Moves.json";

function Battle({
  close,
  Pokemon1,
  Pokemon2,
  PokeBattlesType,
  PokeBattlesType2,
}) {
  const [PokeHp, SetPokeHp] = useState(100);
  const [PokeHpOp, SetPokeHpOp] = useState(100);
  const [Round, SetRound] = useState(1);
  const [PokeAmplifier, SetPokeAmplifier] = useState(0);
  const [PokePower, SetPokePower] = useState(
    Math.floor(Math.random() * 35) + 15
  );
  const [Poke2Amplifier, SetPoke2Amplifier] = useState(0);
  const [DisableButton, SetDisableButton] = useState(true);
  const [DisableButtonFighter, SetDisableButtonFighter] = useState(false);
  const [Winner, SetWinner] = useState();
  const [PokeAttack, SetPokeAttack] = useState([]);
  const [BattleText, SetBattleText] = useState("Begin!!!");

  // Main function to handle battle each battle phase
  function Battle(move, PokeName, Fighter) {
    TypeEffectiveness(move, Fighter);
    const point = BattleCalc();
    let battleText = "";

    if ([0, 10, 20, 30].includes(point)) {
      battleText = PokeName.PokeName + " Missed!";
      Missed(Fighter);
    } else if (point >= 50) {
      battleText = PokeName.PokeName + " Used " + move + ", Critical Hit";
      HpCalc(Fighter, PokeName, point);
    } else if (point >= 35) {
      battleText =
        PokeName.PokeName + " Used " + move + ", It was super effective";
      HpCalc(Fighter, PokeName, point);
    } else {
      battleText = PokeName.PokeName + " Used " + move + ", It was effective";
      HpCalc(Fighter, PokeName, point);
    }

    SetBattleText(battleText);
    SetRound((prevRound) => prevRound + 1);
  }

  // Function to get Type Effectiveness of each move
  function TypeEffectiveness(Move, Fighter) {
    const getMove = MovesType.find((x) => x.name === Move);
    if (getMove) {
      const getType = getMove.type;
      if (PokeJson.hasOwnProperty(getType)) {
        const matchingObject = PokeJson[getType];
        let point = 0;
        const PokeBattlesTypeArray =
          Fighter === 1 ? PokeBattlesType : PokeBattlesType2;

        for (let key in matchingObject) {
          if (
            matchingObject.hasOwnProperty(key) &&
            PokeBattlesTypeArray.includes(key)
          ) {
            const value = matchingObject[key];
            point += value;
            // Additional code logic for when a matching key is found
          }
        }

        SetPokeAmplifier(point);
      }
    }
  }
  // Function ton calc the new pokepower
  function BattleCalc() {
    if (PokeAmplifier < 0) {
      return PokePower - Math.floor(Math.random() * 10);
    } else if (PokeAmplifier <= 1) {
      return PokePower - Math.floor(Math.random() * 10);
    } else if (PokeAmplifier <= 2) {
      return PokePower + Math.floor(Math.random() * 20) + 10;
    } else {
      return PokePower + Math.floor(Math.random() * 30) + 20;
    }
  }

  function HpCalc(Fighter, PokeName, point) {
    if (Fighter === 1) {
      const newHP = Math.max(PokeHpOp - point, 0);
      if (newHP === 0) {
        SetWinner(PokeName.PokeName + " is the winner");
      }
      SetPokeHpOp(newHP);
      SetDisableButton(false);
      SetDisableButtonFighter(true);
    }

    if (Fighter === 2) {
      const newHP = Math.max(PokeHp - point, 0);
      if (newHP === 0) {
        SetWinner(PokeName.PokeName + " is the winner");
      }
      SetPokeHp(newHP);
      SetDisableButton(true);
      SetDisableButtonFighter(false);
    }
  }

  function Missed(Fighter) {
    if (Fighter === 1) {
      SetDisableButton(false);
      SetDisableButtonFighter(true);
    }

    if (Fighter === 2) {
      SetDisableButton(true);
      SetDisableButtonFighter(false);
    }
  }

  function CloseBattle() {
    close(false);
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full z-50 overflow-hidden bg-gray-100 bg-opacity-75 flex flex-col items-center justify-center overflow-auto no-scrollbar md:scrollbar">
      <div className="p-8 bg-gray-100 items-center border border-gray-200 rounded-lg shadow md:flex-row overflow-auto no-scrollbar md:scrollbar">
        <div className="grid-cols-1 text-right">
          <h1>Round #{Round}</h1>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 md:p-5 md:gap-20 ">
          <div className="text-center pt-5 pb-5">
            <p className="text-2xl font-bold">
              {Pokemon1.PokeName ? Pokemon1.PokeName : "???"}{" "}
            </p>
            <PokeBattleCard
              PokeName={Pokemon1}
              PokeHp={PokeHp}
              Battle={Battle}
              SetPokeAttack={SetPokeAttack}
              Fighter={1}
              Round={Round}
              DisableButton={DisableButton}
              DisableButtonFighter={DisableButtonFighter}
              Winner={Winner}
            />
          </div>

          <div className="grid grid-cols-1">
            <div className="flex justify-center items-center">
              <h1 className="text-2xl font-bold">{Winner && Winner}</h1>
            </div>
            <div className="flex justify-center items-center h-10 md:h-auto">
              {" "}
              {/* Add this div with flex classes */}
              <img
                alt="VS"
                src="https://freepngimg.com/thumb/symbol/97383-versus-pic-png-file-hd.png"
                style={{ height: "100px" }}
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="md:flex-row max-w-sm">
                <p className="break-words whitespace-normal">
                  <PokeText text={BattleText} speed={30} />
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-5 pb-5">
            <p className="text-2xl font-bold">
              {Pokemon2.PokeName ? Pokemon2.PokeName : "???"}{" "}
            </p>
            <PokeBattleCard
              PokeName={Pokemon2}
              PokeHpOp={PokeHpOp}
              Battle={Battle}
              SetPokeAttack={SetPokeAttack}
              Fighter={2}
              Round={Round}
              DisableButton={DisableButton}
              DisableButtonFighter={DisableButtonFighter}
              Winner={Winner}
            />
          </div>
        </div>
        <button
          onClick={CloseBattle}
          class=" w-full rounded-b-lg text-center text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Battle;
