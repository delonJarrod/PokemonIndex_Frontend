import React from "react";

function PokemonLoader() {
  return (
    <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50%"
        height="50%"
        viewBox="0 0 100 100"
        className="animate-spin"
      >
        <path
          d="M 30 50
		a 1 1 1 0 1 40 0
		h-12.5
		a 1 1 1 0 0 -15 0
		z"
          fill="#f00"
          stroke="#222"
        ></path>
        <circle cx="50" cy="50" r="5" fill="#222" stroke="#222"></circle>
        <path
          d="M 30 50
		a 1 1 1 0 0 40 0
		h-12.5
		a 1 1 1 0 1 -15 0
		z"
          fill="#fff"
          stroke="#222"
        ></path>
      </svg>
    </div>
  );
}

export default PokemonLoader;
