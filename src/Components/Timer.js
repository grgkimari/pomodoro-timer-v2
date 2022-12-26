const Timer = (props) => {
  return (
    <div className="timer">
      <p id="timer-label">{props.sessionMode ? "Session." : "Break."}</p>
      <p id="time-left">
        {props.timeLeft.minutes.toString().padStart(2, "0")}:
        {props.timeLeft.seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Timer;
