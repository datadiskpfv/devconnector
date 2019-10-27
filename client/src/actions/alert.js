import { SET_ALERT, REMOVE_ALERT } from "./types";
import uuid from 'uuid';

// dispatch comes from the thunk middleware
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    console.log("actions->alert setAlert called");

   const id = uuid.v4();
   dispatch({
       type: SET_ALERT,
       payload: { msg, alertType, id}
   });

   setTimeout(() =>
       dispatch({type: REMOVE_ALERT, payload: id}), timeout
   );
};
