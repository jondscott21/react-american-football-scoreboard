import React from "react";
import "./App.css";

function Buttons(props) {
    const buttonClick = (team, score) => {
        if (team === props.awayTeam) {
            props.setAwayScore(props.awayScore + score);
        } else {
            props.setHomeScore(props.homeScore + score);
        }
    }
    return (
        <section className="buttons">
            
            <div className="homeButtons">
                {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button dataset={props.homeTeam} onClick={() => buttonClick('Lions', 7)} className="homeButtons__touchdown">Home Touchdown</button>
                <button dataset={props.homeTeam} onClick={() => buttonClick('Lions', 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>
            <button onClick={() => props.setQuarter(props.quarter === 4 ? props.quarter - 3 : props.quarter + 1)} className="quarter-button">Quarter</button>
            <div className="awayButtons">
                <button dataset={props.awayTeam} onClick={() => buttonClick('Tigers', 7)} className="awayButtons__touchdown">Away Touchdown</button>
                <button dataset={props.awayTeam} onClick={() => buttonClick('Tigers', 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
            </div>
        </section>
    );
}

export default Buttons;