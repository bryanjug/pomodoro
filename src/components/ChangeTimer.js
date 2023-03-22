import React, {useState} from "react";

const ChangeTimer = ({setWorkTime, setRestTime}) => {
    const [workMinutes, setWorkMinutes] = useState(25);
	const [workSeconds, setWorkSeconds] = useState(0);
	const [restMinutes, setRestMinutes] = useState(5);
    const [restSeconds, setRestSeconds] = useState(0);
    const [alertStyle, setAlertStyle] = useState("alert alert-success changeTimerAlert alert-dismissible displayNone");
    const [confirmedText, setConfirmedText] = useState("");

    function submitTimes() {
        var workingMinutes = (workMinutes * 60000);
        var workingSeconds = (workSeconds * 1000);
        var workingTotal = workingMinutes + workingSeconds;

        var restingMinutes = (restMinutes * 60000);
        var restingSeconds = (restSeconds * 1000);
        var restingTotal = restingMinutes + restingSeconds;

        setWorkTime(workingTotal);
        setRestTime(restingTotal);
        setConfirmedText("Times have been changed!");
    }

    function hideAlert() {
        setAlertStyle("alert alert-success changeTimerAlert alert-dismissible displayNone");
    }
    
    return (
        <div>
            <div className="changeTimer container">
                <div className="row">
                    <div className="col-12 text-light workingTitle">
                        <b>Working Time</b>
                    </div>
                    <div className="col-6 timerLeftSection">
                        <p className="text-light">Minutes</p>
                        <input type="number" placeholder="25" onChange={e => setWorkMinutes(e.target.value)} />
                    </div>
                    <div className="col-6 timerRightSection">
                        <p className="text-light">Seconds</p>
                        <input type="number" placeholder="00" onChange={e => setWorkSeconds(e.target.value)} />
                    </div>
                    <div className="col-12 text-light restingTitle">
                        <b>Resting Time</b>
                    </div>
                    <div className="col-6 timerLeftSection">
                        <p className="text-light">Minutes</p>
                        <input type="number" placeholder="5" onChange={e => setRestMinutes(e.target.value)} />
                    </div>
                    <div className="col-6 timerRightSection">
                        <p className="text-light">Seconds</p>
                        <input type="number" placeholder="00" onChange={e => setRestSeconds(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <button className="changeTimerButton setTimerButton" onClick={submitTimes}>Set Timer</button>
                    </div>
                </div>
            </div>
            <div className="col-12 confirmedTimeChange">
                {confirmedText}
            </div>
        </div>
    );
}

export default ChangeTimer;