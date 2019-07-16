//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(20);
  const[homeTeam, setHomeTeam] = useState('Lions')
  const[awayTeam, setAwayTeam] = useState('Tigers')
  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore} homeTeam={homeTeam} awayTeam={awayTeam} />
        <BottomRow quarter={quarter} down={down} toGo={toGo}  ballOn={ballOn} />
      </section>
      <Buttons toGo={toGo} setToGo={setToGo} ballOn={ballOn} setBallOn={setBallOn} down={down} setDown={setDown} homeTeam={homeTeam} awayTeam={awayTeam} homeScore={homeScore} setHomeScore={setHomeScore} awayScore={awayScore} setAwayScore={setAwayScore} quarter={quarter} setQuarter={setQuarter} />
    </div>
  );
}

export default App;
