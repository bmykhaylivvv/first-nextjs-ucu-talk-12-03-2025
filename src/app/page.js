"use client";

import { useState, useEffect } from "react";

import yuliaStyles from "./bohdan-styles.module.css";

export default function Home() {
  const [firstTurn, setFirstTurn] = useState(null);
  const [cells, setCells] = useState(["x", "x", "x"]);

  function onClickHandler(cellIndex) {
    console.log(`Clicked: ${cellIndex}`);

    const updateCells = cells.map((element, elementIndex) => {
      if (elementIndex === cellIndex) return "0";

      return element;
    });

    console.log("updateCells: ", updateCells);

    setCells(updateCells);
  }

  useEffect(() => {
    setFirstTurn('x')
  }, [])

  // [] -> run on component rendering
  // [arg1] => run on component rendering + run on 'arg1' change

  return (
    <div className={yuliaStyles.demoClass}>
      <div className={yuliaStyles.firstTurn}>First turn: {firstTurn}</div>
      <div>
        <div onClick={() => onClickHandler(0)}>{cells[0]}</div>
        <div onClick={() => onClickHandler(1)}>{cells[1]}</div>
        <div onClick={() => onClickHandler(2)}>{cells[2]}</div>
      </div>
    </div>
  );
}
