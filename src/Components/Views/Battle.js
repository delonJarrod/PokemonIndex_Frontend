import React, { useState, useEffect } from "react";
import PokeBattleCard from "../Cards/PokeBattleCard";
import PokeText from "../Cards/PokeText.js";

function Battle({ close, Pokemon1, Pokemon2 }) {
  const [PokeHp, SetPokeHp] = useState(100);
  const [PokeHpOp, SetPokeHpOp] = useState(100);
  const [Round, SetRound] = useState(1);
  const [DisableButton, SetDisableButton] = useState(true);
  const [DisableButtonFighter, SetDisableButtonFighter] = useState(false);
  const [Winner, SetWinner] = useState();
  const [PokeAttack, SetPokeAttack] = useState([]);
  const [BattleText, SetBattleText] = useState("Begin!!!");

  function Battle(move, PokeName, Fighter) {
    const randomNumber = Math.floor(Math.random() * 20) + 5;

    if (Fighter === 1) {
      let newHP = PokeHpOp - randomNumber;
      if (newHP <= 0) {
        newHP = 0;
        SetWinner(PokeName.PokeName + " Is the winner");
      }
      SetBattleText(PokeName.PokeName + " Used " + move + ", It was effective");
      SetPokeHpOp(newHP);
      SetDisableButton(false);
      SetDisableButtonFighter(true);
    }

    if (Fighter === 2) {
      let newHP = PokeHp - randomNumber;
      if (newHP <= 0) {
        newHP = 0;
        SetWinner(PokeName.PokeName + " Is the winner");
      }
      SetBattleText(PokeName.PokeName + " Used " + move + ", It was effective");
      SetPokeHp(newHP);
      SetDisableButton(true);
      SetDisableButtonFighter(false);
    }
    SetRound((prevRound) => prevRound + 1);
  }

  function CloseBattle() {
    close(false);
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full z-50 overflow-hidden bg-gray-100 bg-opacity-75 flex flex-col items-center justify-center">
      <div className="p-8 bg-white items-center border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
        <div className="grid-cols-1 text-right">
          <h1>Round #{Round}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-20">
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
            />
          </div>

          <div className="grid grid-cols-1">
            <div className="flex justify-center items-center">
              <h1 className="text-2xl font-bold">{Winner && Winner}</h1>
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
            <div className="flex justify-center items-center">
              {" "}
              <PokeText text={BattleText} speed={50} />
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
