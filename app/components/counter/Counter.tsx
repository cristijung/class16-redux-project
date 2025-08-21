'use client';
import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"; //usando o hook personalizado
//import type { AppState, AppDispatch } from "../../store/store"; // AppState não é mais necessário aqui, mas manterei para referência por enquanto
import { increment, decrement, incrementByAmount, reset } from "./CounterSlice";

export default function Counter() {  
  const count = useAppSelector((state) => state.counter.value);  
  const dispatch = useAppDispatch();

  return (
    <>
      <section className="container mx-auto">
        <div className="w-80 flex flex-col items-center justify-center p-8 bg-gray-800 rounded-lg shadow-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contador</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch(decrement())}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-300"
            >
              -
            </button>
            <span className="text-3xl font-bold">{count}</span>
            <button
              onClick={() => dispatch(increment())}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-300"
            >
              +
            </button>
            <button
              onClick={() => dispatch(incrementByAmount(5))}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300"
            >
              +5
            </button>
            <button
              onClick={() => dispatch(reset())}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300"
            >
              Resetar
            </button>
          </div>
        </div>
      </section>
    </>
  );
}