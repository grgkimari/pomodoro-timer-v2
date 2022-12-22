
const Timer =  (props) => {
    return(
        <div className="timer">
           <p>{props.timeLeft.minutes.toString().padStart(2,"0")} : {props.timeLeft.seconds.toString().padStart(2,"0")}</p> 
        </div>)
}

export default Timer