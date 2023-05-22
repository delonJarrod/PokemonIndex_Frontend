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

  // User Effect
  useEffect(() => {
    // TypeEffectiveness();
  }, []);

  // Main function to handle battle each battle phase
  function Battle(move, PokeName, Fighter) {
    debugger;
    TypeEffectiveness(move, Fighter);
    // Type Effectiveness Logic
    var point = BattleCalc();

    if (point === 0 || point === 10 || point === 20 || point === 30) {
      SetBattleText(PokeName.PokeName + " Missed!");
    } else if (point >= 50) {
      SetBattleText(PokeName.PokeName + " Used " + move + ", Critical Hit");
    } else if (point >= 35) {
      SetBattleText(
        PokeName.PokeName + " Used " + move + ", It was super effective"
      );
    } else {
      SetBattleText(PokeName.PokeName + " Used " + move + ", It was effective");
    }

    // Type Effectiveness Logic End

    //Logic for Pokemon 1
    if (Fighter === 1) {
      let newHP = PokeHpOp - PokePower;
      if (newHP <= 0) {
        newHP = 0;
        SetWinner(PokeName.PokeName + " Is the winner");
      }
      SetPokeHpOp(newHP);
      SetDisableButton(false);
      SetDisableButtonFighter(true);
    }

    //Logic for Pokemon 2
    if (Fighter === 2) {
      let newHP = PokeHp - PokePower;
      if (newHP <= 0) {
        newHP = 0;
        SetWinner(PokeName.PokeName + " Is the winner");
      }
      SetPokeHp(newHP);
      SetDisableButton(true);
      SetDisableButtonFighter(false);
    }
    SetRound((prevRound) => prevRound + 1);
  }

  // Function to get Type Effectiveness of each move
  function TypeEffectiveness(Move, Fighter) {
    let point = 0;
    let getMove = MovesType.filter((x) => x.name === Move);
    let getType = getMove[0].type;

    if (PokeJson.hasOwnProperty(getType)) {
      let matchingObject = PokeJson[getType];
      for (let key in matchingObject) {
        if (Fighter === 1) {
          if (
            matchingObject.hasOwnProperty(key) &&
            PokeBattlesType.includes(key)
          ) {
            let value = matchingObject[key];
            point += value;
            console.log(`Key '${key}' exists in matching Types 1.`);
            console.log(`Value: ${value}`);
            // Additional code logic for when a matching key is found
          }
        } else {
          if (
            matchingObject.hasOwnProperty(key) &&
            PokeBattlesType2.includes(key)
          ) {
            let value = matchingObject[key];
            point += value;
            console.log(`Key '${key}' exists in matching Types 2.`);
            console.log(`Value: ${value}`);
            // Additional code logic for when a matching key is found
          }
        }
      }
    }
    SetPokeAmplifier(point);
  }
  // Function ton calc the new pokepower
  function BattleCalc() {
    debugger;
    var point;
    if (PokeAmplifier < 0) {
      point = PokePower - Math.floor(Math.random() * 10);
    } else if (PokeAmplifier > 0 && PokeAmplifier <= 1) {
      point = PokePower - Math.floor(Math.random() * 10);
    } else if (PokeAmplifier >= 1 && PokeAmplifier <= 2) {
      point = PokePower + Math.floor(Math.random() * 20) + 10;
    } else if (PokeAmplifier >= 2) {
      point = PokePower + Math.floor(Math.random() * 30) + 20;
    } else if (PokeAmplifier === 0) {
      point = 0;
    }
    return point;
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
