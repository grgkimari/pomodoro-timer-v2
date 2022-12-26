//INITIAL STATE
export const initialState = {
  interval: null,
  sessionMode: true,
  session: {
    sessionTime: 25,
    breakTime: 5,
  },
  timeLeft: {
    minutes: 25,
    seconds: 0,
  },
};

//ACTIONS
export const COUNT_DOWN = "COUNT_DOWN";
export const SET_INTERVAL = "SET_INTERVAL";
export const CLEAR_INTERVAL = "CLEAR_INTERVAL";
export const INCREMENT_VALUE = "INCREMENT_VALUE";
export const DECREMENT_VALUE = "DECREMENT_VALUE";
export const RESET = "RESET";
export const SWITCH = "SWITCH"

export const mainReducer = (state, action) => {
  switch (action.type) {
    case RESET:
      let audio = document.getElementById("beep");
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
      if (state.interval !== null) {
        clearInterval(state.interval);
      }
      return initialState;
    case INCREMENT_VALUE:
      if (action.id === "sessionTime") {
        if (state.session.sessionTime === 60) {
          return { ...state };
        } else {
          return {
            ...state,
            timeLeft:
              state.interval === null && state.sessionMode
                ? { ...state.timeLeft, minutes: state.session.sessionTime + 1 }
                : state.timeLeft,
            session: {
              sessionTime: state.session.sessionTime + 1,
              breakTime: state.session.breakTime,
            },
          };
        }
      } else {
        if (state.session.breakTime === 60) {
          return { ...state };
        } else {
            return {
                ...state,
                timeLeft:
                  state.interval === null && !state.sessionMode
                    ? { ...state.timeLeft, minutes: state.session.breakTime + 1 }
                    : state.timeLeft,
                session: {
                  sessionTime: state.session.sessionTime,
                  breakTime: state.session.breakTime + 1,
                },
          };
        }
      }
    case DECREMENT_VALUE:
      if (action.id === "sessionTime") {
        if (state.session.sessionTime === 1) {
          return { ...state };
        } else {
          return {
            ...state,
            timeLeft:
              state.interval === null && state.sessionMode
                ? { ...state.timeLeft, minutes: state.session.sessionTime - 1 }
                : state.timeLeft,

            session: {
              sessionTime: state.session.sessionTime - 1,
              breakTime: state.session.breakTime,
            },
          };
        }
      } else {
        if (state.session.breakTime === 1) {
          return {
            ...state,
          };
        } else {
            return {
                ...state,
                timeLeft:
                  state.interval === null && !state.sessionMode
                    ? { ...state.timeLeft, minutes: state.session.breakTime - 1 }
                    : state.timeLeft,
    
                session: {
                  sessionTime: state.session.sessionTime,
                  breakTime: state.session.breakTime -1,
                },
              };
        }
      }
    case CLEAR_INTERVAL:
      if (state.interval === null) {
        return { ...state };
      } else {
        clearInterval(state.interval);
        return { ...state, interval: null };
      }
    case SET_INTERVAL:
      console.log("Setting Interval");
      return { ...state, interval: action.payload };
    case COUNT_DOWN:
      console.log("Counting down.");
      if (state.timeLeft.seconds > 0) {
        console.log("Reducing seconds");
        return {
          ...state,
          timeLeft: {
            minutes: state.timeLeft.minutes,
            seconds: state.timeLeft.seconds - 1,
          },
        };
      } else {
        if (state.timeLeft.minutes > 0) {
          console.log("reducing minutes.");
          return {
            ...state,
            timeLeft: {
              minutes: state.timeLeft.minutes - 1,
              seconds: 59,
            },
          };
        } else {
          console.log("Time is up.");
          let ding = document.getElementById("beep");
          ding.play();
        //   clearInterval(state.interval);
        //   console.log("interval cleared!");
          return {
            ...state,
            sessionMode: !state.sessionMode,
            timeLeft: {
              minutes: state.sessionMode
                ? state.session.breakTime
                : state.session.sessionTime,
              seconds: 0,
            },
          };
        }
      }


    default:
      return { ...state };
  }
};
