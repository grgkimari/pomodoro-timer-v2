import {INCREMENT_VALUE, DECREMENT_VALUE} from '../reducers'

const ValueSetter = (props) => {
    return (
        <div className="valueSetter" id={props.id}>
            <p className="valueTitle">{props.title}</p>
        <button className="valueSetterBtn plusBtn" onClick={() => props.dispatch({
            type : INCREMENT_VALUE,
            id : props.id
            })}>+</button>
        <p>{props.time}</p>
        <button className="valueSetterBtn minusBtn"
        onClick={() => props.dispatch({
            type : DECREMENT_VALUE,
            id : props.id
            })}
        >-</button>
    </div>
    )
}

export default ValueSetter