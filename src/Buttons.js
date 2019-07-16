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
    function getRandomInt(max, stateInt) {
        let tempNum = Math.floor(Math.random() * Math.floor(max));
        if (max === 50) {
            if((tempNum + stateInt) > 50) {
                return props.setBallOn((stateInt  + tempNum) - 50);
            } else {
                return props.setBallOn(stateInt + tempNum);
            }
        } else {
            if ((stateInt - tempNum) < 0 ) {
                console.log('if')
                return props.setToGo(stateInt = 10);
            } else {
                console.log('else')
                return props.setToGo(stateInt - tempNum);
            }
        }
    }
    return (
        <section className="buttons">
            <div>
                <button onClick={() => props.setDown(props.down === 4 ? props.down - 3 : props.down + 1)} className="quarter-button">Down</button>
                <button onClick={() => getRandomInt(5, props.toGo)} className="quarter-button">To Go</button>
                <button onClick={() => getRandomInt(50, props.ballOn)} className="quarter-button">Ball</button>
                <button onClick={() => props.setQuarter(props.quarter === 4 ? props.quarter - 3 : props.quarter + 1)} className="quarter-button">Quarter</button>
            </div>
            <div className="homeButtons">
                {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button dataset={props.homeTeam} onClick={() => buttonClick('Lions', 7)} className="homeButtons__touchdown">Home Touchdown</button>
                <button dataset={props.homeTeam} onClick={() => buttonClick('Lions', 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>
            
            <div className="awayButtons">
                <button dataset={props.awayTeam} onClick={() => buttonClick('Tigers', 7)} className="awayButtons__touchdown">Away Touchdown</button>
                <button dataset={props.awayTeam} onClick={() => buttonClick('Tigers', 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
            </div>
        </section>
    );
}

export default Buttons;