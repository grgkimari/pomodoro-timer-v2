import "./App.css";
import ValueSetter from "./Components/ValueSetter";
import Timer from "./Components/Timer";
import { useReducer } from "react";
import {
  mainReducer,
  initialState,
  COUNT_DOWN,
  SET_INTERVAL,
  CLEAR_INTERVAL,
  RESET,
} from "./reducers";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  console.log("STATE = " + JSON.stringify(state));

  return (
    <div className="App">
      <div className="mod">
        <ValueSetter
          dispatch={dispatch}
          id="sessionTime"
          className="Session Time"
          time={state.session.sessionTime}
          title="Session Length"
          titleID="session-label"
        ></ValueSetter>

        <ValueSetter
          dispatch={dispatch}
          id="breakTime"
          className="Break Time"
          time={state.session.breakTime}
          title="Break Length"
          titleID="break-label"
        ></ValueSetter>
      </div>
      <div className="actionPanel">
        <button
          id="start_stop"
          className="actionBtn"
          onClick={() => {
            if (state.interval === null) {
              dispatch({
                type: SET_INTERVAL,
                payload: setInterval(
                  () => dispatch({ type: COUNT_DOWN }),
                  1000
                ),
              });
            } else {
              dispatch({
                type: CLEAR_INTERVAL,
              });
            }
          }}
        >
          {state.interval === null ? "Start" : "Stop"}
        </button>
        <button
          id="reset"
          className="actionBtn"
          onClick={() => dispatch({ type: RESET })}
        >
          Reset
        </button>
      </div>
      <Timer timeLeft={state.timeLeft} sessionMode={state.sessionMode}></Timer>
      <audio id="beep" src="ding-ding-sound-effect.mp3"></audio>
    </div>
  );
}

export default App;
