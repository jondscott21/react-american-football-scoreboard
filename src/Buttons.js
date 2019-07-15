import React from "react";
import "./App.css";

function Buttons(props) {
    return (
        <section className="buttons">
            <button onClick={ () => props.setQuarter(props.quarter === 4 ? props.quarter - 3 : props.quarter + 1)} className="quarter-button">Quarter</button>
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={ () => props.setHomeScore(props.homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={ () => props.setHomeScore(props.homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={ () => props.setAwayScore(props.awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={ () => props.setAwayScore(props.awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    ); 
}

export default Buttons;