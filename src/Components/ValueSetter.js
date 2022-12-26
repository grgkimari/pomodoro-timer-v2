import {INCREMENT_VALUE, DECREMENT_VALUE} from '../reducers'

const ValueSetter = (props) => {
    return (
        <div className="valueSetter" id={props.id}>

            <p className="valueTitle" id={props.titleID}>{props.title}</p>
        <button className="valueSetterBtn plusBtn" 
        id={props.id === "sessionTime" ? "session-increment" : "break-increment"}
         onClick={() => props.dispatch({
            type : INCREMENT_VALUE,
            id : props.id
            })}>+</button>
        <p
        id={props.id === "sessionTime" ? "session-length" : "break-length"}
        >{props.time}</p>
        <button className="valueSetterBtn minusBtn"
        id={props.id === "sessionTime" ? "session-decrement" : "break-decrement"}
        onClick={() => props.dispatch({
            type : DECREMENT_VALUE,
            id : props.id
            })}
        >-</button>
    </div>
    )
}

export default ValueSetter