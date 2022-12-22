import './App.css';
import ValueSetter from './Components/ValueSetter'
import Timer from './Components/Timer';
import {useReducer} from 'react'
import {mainReducer, initialState, COUNT_DOWN, SET_INTERVAL} from './reducers'

function App() {
  
  const [state, dispatch] = useReducer(mainReducer, initialState)
  console.log("STATE = " + JSON.stringify(state))

  return (
    <div className="App">
      <div className="mod">
      <ValueSetter dispatch={dispatch} id="sessionTime" className="Session Time" time={state.session.sessionTime}></ValueSetter>

      <ValueSetter dispatch={dispatch} id="breakTime" className="Break Time" time={state.session.breakTime}></ValueSetter>
      </div>
      <div className = "actionPanel">
      <button id="startBtn" className="actionBtn" onClick={() => {
        if(state.interval === null){
          dispatch(
            {
              type : SET_INTERVAL,
              payload : setInterval(() => dispatch({type : COUNT_DOWN}), 1000)
            }
          )
        }
      }}>{state.interval === null ? "Start" : "Stop"}</button>
      <button id="resetBtn" className="actionBtn">Reset</button> 
      </div>
      <Timer timeLeft = {state.timeLeft}></Timer>
    </div>
  );
}

export default App;
